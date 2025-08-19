import { getProjects } from "app/blog/utils"
import Image from "next/image"

export default function Projects() {
  const projects = getProjects()

  console.log(projects)

  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            {project.image ? (
              <Image
                src={`/projects-assets/${project.image}`}
                alt={project.metadata.title}
                width={500}
                height={300}
              />
            ) : (
              <div
                className="bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center text-white font-semibold"
                style={{ width: 500, height: 300 }}
              >
                {project.metadata.title}
              </div>
            )}
            <h2>{project.metadata.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
