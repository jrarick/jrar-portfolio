import { getBlogPosts, getProjects } from "app/lib/utils"

export const baseUrl = "https://www.jrar.dev"

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ["", "/blog", "/about", "/resume"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: "yearly",
  }))

  return [...routes, ...blogs, ...projects]
}
