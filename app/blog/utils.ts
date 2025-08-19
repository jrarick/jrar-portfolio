import fs from "fs"
import path from "path"

type ProjectMetadata = {
  title: string
  description: string
  projectLink: string
}

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, "").trim()
  let frontMatterLines = frontMatterBlock.trim().split("\n")
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function parseProjectFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  if (!match) {
    throw new Error("Invalid frontmatter")
  }

  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, "").trim()
  let frontMatterLines = frontMatterBlock.trim().split("\n")
  let metadata: Partial<ProjectMetadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
    metadata[key.trim() as keyof ProjectMetadata] = value
  })

  return { metadata: metadata as ProjectMetadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function readProjectMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  return parseProjectFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"))
}

export function getProjects() {
  const projectsCollectionDir = path.join(
    process.cwd(),
    "app",
    "projects",
    "collection"
  )
  const projectAssetsDir = path.join(process.cwd(), "public", "projects-assets")

  // Get all MDX files from the collection directory
  const mdxFiles = getMDXFiles(projectsCollectionDir)

  // Get all image files from the assets directory
  const imageFiles = fs.readdirSync(projectAssetsDir).filter((file) => {
    const ext = path.extname(file).toLowerCase()
    return [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"].includes(ext)
  })

  return mdxFiles.map((file) => {
    const { metadata, content } = readProjectMDXFile(
      path.join(projectsCollectionDir, file)
    )
    const slug = path.basename(file, path.extname(file))

    // Find matching image file by comparing filenames (without extensions)
    const matchingImage = imageFiles.find((imageFile) => {
      const imageSlug = path.basename(imageFile, path.extname(imageFile))
      return imageSlug === slug
    })

    return {
      metadata,
      slug,
      content,
      image: matchingImage || null,
    }
  })
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes("T")) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ""

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = "Today"
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
