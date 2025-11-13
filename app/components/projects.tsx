"use client"

import Image from "next/image"
import { getProjects } from "app/lib/utils"
import { TransitionLink, SharedTransition } from "app/lib/transitions"
import { motion } from "motion/react"

export function Projects({
  projects,
}: {
  projects: ReturnType<typeof getProjects>
}) {
  return (
    <motion.div
      className="mx-auto grid max-w-[100rem] grid-cols-1 gap-8 sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-16 xl:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {projects.map((project) => (
        <motion.article
          key={project.slug}
          className="group relative p-3"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
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
                className="mb-2 aspect-video rounded-lg group-hover:brightness-95 group-hover:grayscale-100"
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
            className="font-medium tracking-tight group-hover:text-zinc-500"
          >
            {project.metadata.title}
            <span className="absolute inset-0" />
          </TransitionLink>
          <p className="mt-2 text-sm text-zinc-500 group-hover:text-zinc-400">
            {project.metadata.description}
          </p>
        </motion.article>
      ))}
    </motion.div>
  )
}
