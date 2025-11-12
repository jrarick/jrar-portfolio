"use client"

import Image from "next/image"
import { useState } from "react"

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
    name: "Flask",
    image: "flask-icon.svg",
    website: "https://flask.palletsprojects.com",
    type: "Frameworks",
  },
  {
    name: "GSAP",
    image: "gsap-icon.svg",
    website: "https://gsap.com/",
    type: "Libraries",
  },
  {
    name: "Motion",
    image: "motion-icon.svg",
    website: "https://motion.dev/",
    type: "Libraries",
  },
  {
    name: "Next.js",
    image: "nextjs-icon.svg",
    website: "https://nextjs.org",
    type: "Frameworks",
  },
  {
    name: "Node.js",
    image: "nodejs-icon.svg",
    website: "https://nodejs.org",
    type: "Languages",
  },
  {
    name: "Playwright",
    image: "playwright-icon.svg",
    website: "https://playwright.dev",
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
    name: "Python",
    image: "python-icon.svg",
    website: "https://python.org",
    type: "Languages",
  },
  {
    name: "Radix UI",
    image: "radix-icon.svg",
    website: "https://radix-ui.com",
    type: "Libraries",
  },
  {
    name: "React",
    image: "react-icon.svg",
    website: "https://react.dev",
    type: "Libraries",
  },
  {
    name: "React Aria",
    image: "react-aria-icon.svg",
    website: "https://react-spectrum.adobe.com/react-aria/index.html",
    type: "Libraries",
  },
  {
    name: "React Router",
    image: "react-router-icon.svg",
    website: "https://reactrouter.com",
    type: "Libraries",
  },
  {
    name: "Remix",
    image: "remix-icon.svg",
    website: "https://remix.run",
    type: "Frameworks",
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
    name: "Tailwind CSS",
    image: "tailwind-icon.svg",
    website: "https://tailwindcss.com",
    type: "Libraries",
  },
  {
    name: "TanStack Query",
    image: "tanstack-icon.svg",
    website: "https://tanstack.com/query",
    type: "Libraries",
  },
  {
    name: "Three.js",
    image: "threejs-icon.svg",
    website: "https://threejs.org",
    type: "Libraries",
  },
  {
    name: "TypeScript",
    image: "typescript-icon.svg",
    website: "https://typescriptlang.org",
    type: "Languages",
  },
  {
    name: "Vite",
    image: "vite-icon.svg",
    website: "https://vitejs.dev",
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
    <section>
      {/* <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 divide-x divide-y divide-neutral-200 dark:divide-neutral-800 border-l border-t border-neutral-200 dark:border-neutral-800 [&>a:last-child]:border-b [&>a:last-child]:border-r [&>a:last-child]:border-neutral-200 dark:[&>a:last-child]:border-neutral-800">
        {tools.map((tool) => {
          return (
            <a
              key={tool.name}
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center py-4 sm:py-6 md:py-8 group hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <div className="size-6 sm:size-8 md:size-12 mb-2 flex items-center justify-center">
                <Image
                  src={`/tool-logos/${tool.image}`}
                  alt={`${tool.name} logo`}
                  width={36}
                  height={36}
                  className="object-contain aspect-square grayscale-100 group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
                />
              </div>
              <span className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                {tool.name}
              </span>
            </a>
          )
        })}
      </div> */}
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex flex-col space-y-4">
          {types.map((type) => (
            <button
              className="cursor-pointer"
              key={type}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="col-span-2">
          {tools
            .filter((tool) => tool.type === selectedType)
            .map((tool) => (
              <a
                key={tool.name}
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center py-4 hover:bg-neutral-100 sm:py-6 md:py-8 dark:hover:bg-neutral-800"
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
                <span className="text-center text-xs text-neutral-500 dark:text-neutral-400">
                  {tool.name}
                </span>
              </a>
            ))}
        </div>
      </div>
    </section>
  )
}
