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
    <motion.div className="mx-auto max-w-fit space-y-8">
      <div className="px-6">
        <h2 className="text-2xl font-semibold tracking-tighter">
          Highlighted Work
        </h2>
        <p className="mt-2 max-w-lg text-xs/5 text-zinc-600 sm:text-sm/6">
          I've had the opportunity to work on a diverse range of projects
          including in e-commerce, fintech, content engineering, and web design.
          Here's a collection of some highlighted work that I'm able to share.
        </p>
      </div>
      {projects.map((project) => (
        <article
          key={project.slug}
          className="relative rounded-lg p-6 hover:bg-zinc-200"
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
                className="mb-2 aspect-video rounded-lg shadow-md"
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
            className="font-medium tracking-tight"
          >
            {project.metadata.title}
            <span className="absolute inset-0" />
          </TransitionLink>
          <p className="mt-2 text-sm text-zinc-500">
            {project.metadata.description}
          </p>
        </article>
      ))}
    </motion.div>
  )
}
