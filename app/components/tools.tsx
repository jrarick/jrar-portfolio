"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { AnimatedBackground } from "app/components/animations/animated-background"

const kinds = [
  "All",
  "Frameworks",
  "Languages",
  "Libraries",
  "Platforms",
  "Other",
]

interface Tool {
  name: string
  image: string
  website: string
  kind: (typeof kinds)[number]
}

const tools: Tool[] = [
  {
    name: "Next.js",
    image: "nextjs-icon.svg",
    website: "https://nextjs.org",
    kind: "Frameworks",
  },
  {
    name: "React",
    image: "react-icon.svg",
    website: "https://react.dev",
    kind: "Libraries",
  },
  {
    name: "Tailwind CSS",
    image: "tailwind-icon.svg",
    website: "https://tailwindcss.com",
    kind: "Libraries",
  },
  {
    name: "Remix",
    image: "remix-icon.svg",
    website: "https://remix.run",
    kind: "Frameworks",
  },
  {
    name: "TypeScript",
    image: "typescript-icon.svg",
    website: "https://typescriptlang.org",
    kind: "Languages",
  },
  {
    name: "Python",
    image: "python-icon.svg",
    website: "https://python.org",
    kind: "Languages",
  },
  {
    name: "Node.js",
    image: "nodejs-icon.svg",
    website: "https://nodejs.org",
    kind: "Languages",
  },
  {
    name: "Flask",
    image: "flask-icon.svg",
    website: "https://flask.palletsprojects.com",
    kind: "Frameworks",
  },
  {
    name: "React Native",
    image: "react-icon.svg",
    website: "https://reactnative.dev",
    kind: "Libraries",
  },
  {
    name: "Expo",
    image: "expo-icon.svg",
    website: "https://expo.dev",
    kind: "Frameworks",
  },
  {
    name: "React Router",
    image: "react-router-icon.svg",
    website: "https://reactrouter.com",
    kind: "Libraries",
  },
  {
    name: "Sanity",
    image: "sanity-icon.svg",
    website: "https://sanity.io",
    kind: "Platforms",
  },
  {
    name: "Supabase",
    image: "supabase-icon.svg",
    website: "https://supabase.com",
    kind: "Platforms",
  },
  {
    name: "TanStack Query",
    image: "tanstack-icon.svg",
    website: "https://tanstack.com/query",
    kind: "Libraries",
  },
  {
    name: "Vite",
    image: "vite-icon.svg",
    website: "https://vitejs.dev",
    kind: "Other",
  },
  {
    name: "Motion",
    image: "motion-icon.svg",
    website: "https://motion.dev/",
    kind: "Libraries",
  },
  {
    name: "GSAP",
    image: "gsap-icon.svg",
    website: "https://gsap.com/",
    kind: "Libraries",
  },
  {
    name: "Three.js",
    image: "threejs-icon.svg",
    website: "https://threejs.org",
    kind: "Libraries",
  },
  {
    name: "D3.js",
    image: "d3-icon.svg",
    website: "https://d3js.org",
    kind: "Libraries",
  },
  {
    name: "Figma",
    image: "figma-icon.svg",
    website: "https://figma.com",
    kind: "Other",
  },
  {
    name: "PostgreSQL",
    image: "postgres-icon.svg",
    website: "https://postgresql.org",
    kind: "Languages",
  },
  {
    name: "Prisma",
    image: "prisma-icon.svg",
    website: "https://prisma.io",
    kind: "Libraries",
  },
  {
    name: "Radix UI",
    image: "radix-icon.svg",
    website: "https://radix-ui.com",
    kind: "Libraries",
  },
  {
    name: "React Aria",
    image: "react-aria-icon.svg",
    website: "https://react-spectrum.adobe.com/react-aria/index.html",
    kind: "Libraries",
  },
  {
    name: "Playwright",
    image: "playwright-icon.svg",
    website: "https://playwright.dev",
    kind: "Other",
  },
  {
    name: "Vitest",
    image: "vitest-icon.svg",
    website: "https://vitest.dev",
    kind: "Other",
  },
]

export function Tools() {
  const [selectedKind, setSelectedKind] = useState<string>("All")

  const filteredTools =
    selectedKind === "All"
      ? tools
      : tools.filter((tool) => tool.kind === selectedKind)

  console.log(selectedKind)

  return (
    <div className="@container/tools mx-auto flex flex-col items-center space-y-8">
      <h2 className="w-fit text-2xl font-semibold tracking-tighter">
        Tools I'm using these days
      </h2>
      <div className="flex w-fit flex-col rounded-xl border border-zinc-300 p-1 @lg/tools:flex-row">
        <AnimatedBackground
          defaultValue={kinds[0]}
          className="flex flex-col rounded-lg bg-zinc-200"
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
          onValueChange={(newActiveId) => {
            setSelectedKind(newActiveId ?? "All")
          }}
        >
          {kinds.map((kind, index) => {
            return (
              <button
                key={index}
                data-id={kind}
                type="button"
                aria-label={`${kind} view`}
                onClick={() => setSelectedKind(kind)}
                className="inline-flex w-22 cursor-pointer items-center justify-center rounded-lg py-2 text-center text-xs font-medium tracking-tight text-zinc-800 transition-transform focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:outline-none active:scale-[0.95]"
              >
                {kind}
              </button>
            )
          })}
        </AnimatedBackground>
      </div>
      <ul className="grid grid-cols-[12rem] @sm/tools:grid-cols-[12rem_12rem] @xl/tools:grid-cols-[12rem_12rem_12rem]">
        <AnimatePresence mode="popLayout">
          {filteredTools.map((tool) => (
            <motion.li
              key={tool.name}
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0)",
              }}
              exit={{
                opacity: 0,
                filter: "blur(2px)",
              }}
              transition={{ duration: 0.2 }}
              layout
            >
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex origin-left items-center gap-2 rounded-lg px-4 py-3 hover:bg-zinc-200"
              >
                <Image
                  src={`/tool-logos/${tool.image}`}
                  alt={`${tool.name} logo`}
                  width={16}
                  height={16}
                  className="aspect-square object-contain"
                />
                <span className="text-xs">{tool.name}</span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}
