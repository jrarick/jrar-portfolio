import Image from "next/image"

interface Tool {
  name: string
  image: string
  website: string
}

const tools: Tool[] = [
  { name: "D3.js", image: "d3-icon.svg", website: "https://d3js.org" },
  { name: "Figma", image: "figma-icon.svg", website: "https://figma.com" },
  {
    name: "Flask",
    image: "flask-icon.svg",
    website: "https://flask.palletsprojects.com",
  },
  {
    name: "GSAP",
    image: "gsap-icon.svg",
    website: "https://gsap.com/",
  },
  {
    name: "Motion",
    image: "motion-icon.svg",
    website: "https://motion.dev/",
  },
  { name: "Next.js", image: "nextjs-icon.svg", website: "https://nextjs.org" },
  { name: "Node.js", image: "nodejs-icon.svg", website: "https://nodejs.org" },
  {
    name: "Playwright",
    image: "playwright-icon.svg",
    website: "https://playwright.dev",
  },
  {
    name: "PostgreSQL",
    image: "postgres-icon.svg",
    website: "https://postgresql.org",
  },
  { name: "Prisma", image: "prisma-icon.svg", website: "https://prisma.io" },
  { name: "Python", image: "python-icon.svg", website: "https://python.org" },
  {
    name: "Radix UI",
    image: "radix-icon.svg",
    website: "https://radix-ui.com",
  },
  { name: "React", image: "react-icon.svg", website: "https://react.dev" },
  {
    name: "React Router",
    image: "react-router-icon.svg",
    website: "https://reactrouter.com",
  },
  { name: "Remix", image: "remix-icon.svg", website: "https://remix.run" },
  { name: "Sanity", image: "sanity-icon.svg", website: "https://sanity.io" },
  {
    name: "Supabase",
    image: "supabase-icon.svg",
    website: "https://supabase.com",
  },
  {
    name: "Tailwind CSS",
    image: "tailwind-icon.svg",
    website: "https://tailwindcss.com",
  },
  {
    name: "TanStack Query",
    image: "tanstack-icon.svg",
    website: "https://tanstack.com/query",
  },
  {
    name: "Three.js",
    image: "threejs-icon.svg",
    website: "https://threejs.org",
  },
  {
    name: "TypeScript",
    image: "typescript-icon.svg",
    website: "https://typescriptlang.org",
  },
  { name: "Vite", image: "vite-icon.svg", website: "https://vitejs.dev" },
  { name: "Vitest", image: "vitest-icon.svg", website: "https://vitest.dev" },
]

export function Tools() {
  return (
    <section>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 divide-x divide-y divide-neutral-200 dark:divide-neutral-800 border-l border-t border-neutral-200 dark:border-neutral-800 [&>a:last-child]:border-b [&>a:last-child]:border-r [&>a:last-child]:border-neutral-200 dark:[&>a:last-child]:border-neutral-800">
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
      </div>
    </section>
  )
}
