import { getProjects } from "app/lib/utils"
import { Projects } from "./projects"

const PROJECT_ORDER = [
  "setpoint-data-suite",
  "longhorn-design-studio",
  "shadcn-portable-text-editor",
  "hydrogen-demo",
  "support-docs-site",
  "party-rental-ecommerce-template",
]

export default async function ProjectsLoader() {
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

  return <Projects projects={projects} />
}
