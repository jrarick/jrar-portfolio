import Image from "next/image"
import { getProjects } from "app/blog/utils"
import { TransitionLink, SharedTransition } from "app/lib/transitions"

export function Projects() {
  const allProjects = getProjects()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {allProjects.map((project) => (
        <TransitionLink
          key={project.slug}
          href={`/projects/${project.slug}`}
          type="transition-to-detail"
          className="block"
        >
          <article className="relative p-3 rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-colors duration-300">
            {project.image ? (
              <SharedTransition
                name={`project-${project.slug}`}
                share={{
                  default: "auto",
                  "transition-to-detail": "animate-morph",
                  "transition-to-list": "animate-morph",
                }}
              >
                <Image
                  className="aspect-video rounded-lg mb-2 transition-transform duration-300"
                  src={`/projects-assets/${project.image}`}
                  alt={project.metadata.title}
                  width={500}
                  height={500}
                />
              </SharedTransition>
            ) : (
              <div className="mb-2 bg-gradient-to-br from-neutral-600 to-neutral-800 aspect-video rounded-lg" />
            )}
            <h3 className="font-medium group-hover:text-white transition-colors duration-300">
              {project.metadata.title}
            </h3>
            <p className="text-sm text-neutral-500 mt-2 group-hover:text-neutral-400 transition-colors duration-300">
              {project.metadata.description}
            </p>
          </article>
        </TransitionLink>
      ))}
    </div>
  )
}
