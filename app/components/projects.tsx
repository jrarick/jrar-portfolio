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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <TransitionLink
          key={project.slug}
          href={`/projects/${project.slug}`}
          type="transition-to-detail"
          className="block"
        >
          <article className="relative p-3 rounded-xl border border-neutral-800 hover:bg-neutral-800">
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
            <h3 className="font-medium group-hover:text-white tracking-tight transition-colors duration-300">
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
