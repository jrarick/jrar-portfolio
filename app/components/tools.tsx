"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"

interface Tool {
  name: string
  image: string
  website: string
  type: (typeof types)[number]
}

const types = [
  "Frameworks",
  "Languages",
  "Libraries",
  "Platforms",
  "Other",
] as const

const tools: Tool[] = [
  {
    name: "Next.js",
    image: "nextjs-icon.svg",
    website: "https://nextjs.org",
    type: "Frameworks",
  },
  {
    name: "React",
    image: "react-icon.svg",
    website: "https://react.dev",
    type: "Libraries",
  },
  {
    name: "Tailwind CSS",
    image: "tailwind-icon.svg",
    website: "https://tailwindcss.com",
    type: "Libraries",
  },
  {
    name: "Remix",
    image: "remix-icon.svg",
    website: "https://remix.run",
    type: "Frameworks",
  },
  {
    name: "TypeScript",
    image: "typescript-icon.svg",
    website: "https://typescriptlang.org",
    type: "Languages",
  },
  {
    name: "Python",
    image: "python-icon.svg",
    website: "https://python.org",
    type: "Languages",
  },
  {
    name: "Node.js",
    image: "nodejs-icon.svg",
    website: "https://nodejs.org",
    type: "Languages",
  },
  {
    name: "Flask",
    image: "flask-icon.svg",
    website: "https://flask.palletsprojects.com",
    type: "Frameworks",
  },
  {
    name: "React Router",
    image: "react-router-icon.svg",
    website: "https://reactrouter.com",
    type: "Libraries",
  },
  {
    name: "Sanity",
    image: "sanity-icon.svg",
    website: "https://sanity.io",
    type: "Platforms",
  },
  {
    name: "Supabase",
    image: "supabase-icon.svg",
    website: "https://supabase.com",
    type: "Platforms",
  },
  {
    name: "TanStack Query",
    image: "tanstack-icon.svg",
    website: "https://tanstack.com/query",
    type: "Libraries",
  },
  {
    name: "Vite",
    image: "vite-icon.svg",
    website: "https://vitejs.dev",
    type: "Other",
  },
  {
    name: "Motion",
    image: "motion-icon.svg",
    website: "https://motion.dev/",
    type: "Libraries",
  },
  {
    name: "GSAP",
    image: "gsap-icon.svg",
    website: "https://gsap.com/",
    type: "Libraries",
  },
  {
    name: "Three.js",
    image: "threejs-icon.svg",
    website: "https://threejs.org",
    type: "Libraries",
  },
  {
    name: "D3.js",
    image: "d3-icon.svg",
    website: "https://d3js.org",
    type: "Libraries",
  },
  {
    name: "Figma",
    image: "figma-icon.svg",
    website: "https://figma.com",
    type: "Other",
  },
  {
    name: "PostgreSQL",
    image: "postgres-icon.svg",
    website: "https://postgresql.org",
    type: "Languages",
  },
  {
    name: "Prisma",
    image: "prisma-icon.svg",
    website: "https://prisma.io",
    type: "Libraries",
  },
  {
    name: "Radix UI",
    image: "radix-icon.svg",
    website: "https://radix-ui.com",
    type: "Libraries",
  },
  {
    name: "React Aria",
    image: "react-aria-icon.svg",
    website: "https://react-spectrum.adobe.com/react-aria/index.html",
    type: "Libraries",
  },
  {
    name: "Playwright",
    image: "playwright-icon.svg",
    website: "https://playwright.dev",
    type: "Other",
  },
  {
    name: "Vitest",
    image: "vitest-icon.svg",
    website: "https://vitest.dev",
    type: "Other",
  },
]

export function Tools() {
  const [selectedType, setSelectedType] =
    useState<(typeof types)[number]>("Frameworks")

  return (
    <section className="px-4">
      <h2 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
        The Tools I Use
      </h2>
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-y divide-zinc-300 border-t border-l border-zinc-300 sm:grid-cols-5 md:grid-cols-6 [&>a:last-child]:border-r [&>a:last-child]:border-b [&>a:last-child]:border-zinc-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
      >
        {tools.map((tool) => {
          return (
            <motion.a
              key={tool.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center py-4 sm:py-6 md:py-8"
            >
              <div className="mb-2 flex size-6 items-center justify-center sm:size-8 md:size-12">
                <Image
                  src={`/tool-logos/${tool.image}`}
                  alt={`${tool.name} logo`}
                  width={36}
                  height={36}
                  className="aspect-square object-contain brightness-90 grayscale-100 group-hover:brightness-100 group-hover:grayscale-0"
                />
              </div>
              <span className="text-center text-xs text-zinc-500">
                {tool.name}
              </span>
            </motion.a>
          )
        })}
      </motion.div>
    </section>
  )
}
