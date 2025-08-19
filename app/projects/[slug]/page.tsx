import { notFound } from "next/navigation"
import { CustomMDX } from "app/components/mdx"
import { getProjects } from "app/blog/utils"
import { baseUrl } from "app/sitemap"
import Image from "next/image"

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  let project = getProjects().find((project) => project.slug === slug)
  if (!project) {
    return
  }

  let { title, description } = project.metadata
  let ogImage = project.image
    ? `/projects-assets/${project.image}`
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Project({ params }) {
  const { slug } = await params

  let project = getProjects().find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.metadata.title,
            description: project.metadata.description,
            image: project.image
              ? `${baseUrl}/projects-assets/${project.image}`
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />

      {/* Project image at the top */}
      {project.image && (
        <div className="mb-8">
          <Image
            src={`/projects-assets/${project.image}`}
            alt={project.metadata.title}
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      )}

      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        {project.metadata.title}
      </h1>

      <article className="prose prose-invert prose-neutral">
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}
