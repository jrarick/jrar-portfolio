import Link from "next/link"
import { HomeIcon, PersonIcon, PilcrowIcon } from "@radix-ui/react-icons"

const navItems = {
  "/": {
    name: "Home",
    icon: HomeIcon,
  },
  "/about": {
    name: "About",
    icon: PersonIcon,
  },
  "/blog": {
    name: "Blog",
    icon: PilcrowIcon,
  },
}

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <nav
        className="flex flex-row items-start justify-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex flex-row space-x-8">
          {Object.entries(navItems).map(([path, { name, icon }]) => {
            const Icon = icon
            return (
              <Link
                key={path}
                href={path}
                className="hover:text-neutral-800 dark:hover:text-neutral-300 font-medium flex items-center space-x-2 align-middle relative py-1 px-2"
              >
                <Icon />
                <span>{name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
