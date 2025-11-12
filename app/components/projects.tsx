import Image from "next/image"
import { getProjects } from "app/lib/utils"
import { TransitionLink, SharedTransition } from "app/lib/transitions"

const PROJECT_ORDER = [
  "setpoint-data-suite",
  "longhorn-design-studio",
  "shadcn-portable-text-editor",
  "hydrogen-demo",
  "support-docs-site",
  "party-rental-ecommerce-template",
]

export function Projects() {
  const allProjects = getProjects()

  const projects = allProjects.sort((a, b) => {
    const aIndex = PROJECT_ORDER.indexOf(a.slug)
    const bIndex = PROJECT_ORDER.indexOf(b.slug)

    // If both have custom order, use that
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex
    }
    // If only one has custom order, prioritize it
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1

    return 0
  })

  return (
    <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-16 px-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.slug} className="group relative p-3">
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
                className="mb-2 aspect-video rounded-lg transition-all duration-300 group-hover:brightness-75"
                src={`/projects-assets/${project.image}`}
                alt={project.metadata.title}
                width={500}
                height={500}
              />
            </SharedTransition>
          ) : (
            <div className="mb-2 aspect-video rounded-lg bg-gradient-to-br from-zinc-600 to-zinc-800" />
          )}
          <TransitionLink
            href={`/projects/${project.slug}`}
            type="transition-to-detail"
            className="font-medium tracking-tight transition-colors duration-300 group-hover:text-zinc-500"
          >
            {project.metadata.title}
            <span className="absolute inset-0" />
          </TransitionLink>
          <p className="mt-2 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
            {project.metadata.description}
          </p>
        </article>
      ))}
    </div>
  )
}
