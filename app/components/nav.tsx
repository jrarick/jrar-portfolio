import Link from "next/link"
import { HomeIcon, Pencil1Icon } from "@radix-ui/react-icons"

const navItems = {
  "/": {
    name: "Home",
    icon: HomeIcon,
  },
  "/blog": {
    name: "Blog",
    icon: Pencil1Icon,
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, icon }]) => {
              const Icon = icon
              return (
                <Link
                  key={path}
                  href={path}
                  className="hover:text-neutral-800 dark:hover:text-neutral-300 font-medium flex items-center space-x-2 align-middle relative py-1 px-2 m-1"
                >
                  <Icon />
                  <span>{name}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
