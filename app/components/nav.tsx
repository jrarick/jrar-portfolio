import Link from "next/link"
import { TransitionLink } from "app/lib/transitions"

const navItems = {
  "/resume": {
    name: "Resume",
  },
  "/blog": {
    name: "Blog",
  },
}

export function Navbar() {
  return (
    <aside className="bg-alabaster fixed top-0 z-20 h-16 w-full border-b border-zinc-300">
      <nav className="flex h-full" id="nav">
        <div className="hidden size-16 border-r border-zinc-300 sm:block" />
        <div className="flex h-full flex-1 flex-row items-center justify-between px-4">
          <Link href="/" className="font-display text-2xl tracking-wide">
            JRAR.dev
          </Link>
          <div className="flex flex-row space-x-4 sm:space-x-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <TransitionLink
                  key={path}
                  type="default"
                  href={path}
                  className="relative flex items-center space-x-2 px-2 py-1 align-middle font-medium hover:text-zinc-800"
                >
                  <span>{name}</span>
                </TransitionLink>
              )
            })}
          </div>
        </div>
        <div className="hidden size-16 border-l border-zinc-300 sm:block" />
      </nav>
    </aside>
  )
}
