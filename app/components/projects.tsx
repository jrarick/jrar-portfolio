import Link from "next/link"
import Image from "next/image"
import { getProjects } from "app/blog/utils"

export function Projects() {
  const allProjects = getProjects()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allProjects.map((project) => (
        <article
          key={project.slug}
          className="relative p-3 rounded-xl border border-neutral-800 hover:bg-neutral-800"
        >
          {project.image ? (
            <Image
              className="aspect-video rounded-lg mb-2"
              src={`/projects-assets/${project.image}`}
              alt={project.metadata.title}
              width={500}
              height={300}
            />
          ) : (
            <div className="mb-2 bg-gradient-to-br from-neutral-600 to-neutral-800 aspect-video" />
          )}
          <Link href={`/projects/${project.slug}`} className="font-medium">
            <span className="absolute inset-0" />
            {project.metadata.title}
          </Link>
          <p className="text-sm text-neutral-500 mt-2">
            {project.metadata.description}
          </p>
        </article>
      ))}
    </div>
  )
}
