import { notFound } from "next/navigation"
import { CustomMDX } from "app/components/mdx"
import { getProjects } from "app/lib/utils"
import { baseUrl } from "app/sitemap"
import Image from "next/image"
import { SharedTransition, TransitionLink } from "app/lib/transitions"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { type Metadata } from "next"
import Link from "next/link"

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params

  let project = getProjects().find((project) => project.slug === slug)
  if (!project) {
    return {}
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

      <article className="prose prose-zinc prose-sm mx-auto">
        {/* Back to projects link */}
        <div className="not-prose mb-8">
          <Link
            href="/projects"
            // type="default"
            className="inline-flex items-center space-x-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-700"
          >
            <ArrowLeftIcon />
            <span>All Projects</span>
          </Link>
        </div>

        {/* Project image at the top */}
        {project.image && (
          <div className="mb-8">
            <SharedTransition
              name={`project-${project.slug}`}
              share={{
                default: "auto",
                "transition-to-detail": "animate-morph",
                "transition-to-list": "animate-morph",
              }}
            >
              <a
                href={project.metadata.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg ring-2 ring-transparent transition-[box-shadow] duration-100 hover:ring-zinc-400"
              >
                <Image
                  src={`/projects-assets/${project.image}`}
                  alt={project.metadata.title}
                  width={800}
                  height={400}
                  className="h-auto w-full rounded-lg shadow-md"
                  priority
                />
              </a>
            </SharedTransition>
          </div>
        )}
        <h1 className="title mb-8 text-2xl font-semibold tracking-tighter">
          {project.metadata.title}
        </h1>
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}
