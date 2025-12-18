"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "app/lib/client-utils"
import { GithubLogo, LinkedinLogo } from "./social-icons"

const navItems = {
  "/": {
    name: "About",
  },
  "/projects": {
    name: "Work",
  },
  "/blog": {
    name: "Writings",
  },
  "/bookmarks": {
    name: "Bookmarks",
  },
  "/tools": {
    name: "Tools",
  },
}

function isActive(pathname: string, path: string) {
  if (path === "/") {
    return pathname === "/"
  }
  return pathname.includes(path)
}

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="bg-alabaster sticky top-0 hidden h-dvh w-48 shrink-0 border-r border-zinc-300 py-16 sm:block">
        <nav className="flex flex-col justify-end" id="nav">
          <Link
            href="/"
            className="mb-8 py-2 pr-10 text-right text-sm font-semibold tracking-tight transition-all"
          >
            jrar.dev
          </Link>
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "py-2 pr-10 text-right text-sm tracking-tight transition-all",
                isActive(pathname, path)
                  ? "font-semibold text-zinc-950"
                  : "text-zinc-700"
              )}
            >
              {name}
            </Link>
          ))}
          <div className="flex justify-end space-x-2 px-10 py-4">
            <a
              href="https://github.com/jrarick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900"
            >
              <GithubLogo />
            </a>
            <a
              href="https://linkedin.com/in/jrarick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900"
            >
              <LinkedinLogo />
            </a>
          </div>
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="bg-alabaster sticky top-0 z-50 border-b border-zinc-300 sm:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-semibold text-zinc-950">
            jrar.dev
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative h-10 w-10 text-zinc-700 hover:text-zinc-950 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="absolute top-1/2 left-1/2 block w-5 -translate-x-1/2 -translate-y-1/2">
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
                  isOpen ? "top-0 rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute top-0 block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
                  isOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
                  isOpen ? "top-0 -rotate-45" : "translate-y-1.5"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "bg-alabaster fixed inset-0 top-[57px] transition-all ease-in-out",
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
        >
          <nav className="flex flex-col px-4 py-8">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className={cn(
                  "py-4 text-base tracking-tight transition-colors",
                  isActive(pathname, path)
                    ? "font-semibold text-zinc-950"
                    : "text-zinc-700"
                )}
              >
                {name}
              </Link>
            ))}
            <div className="flex space-x-4 py-6">
              <a
                href="https://github.com/jrarick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900"
              >
                <GithubLogo />
              </a>
              <a
                href="https://linkedin.com/in/jrarick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900"
              >
                <LinkedinLogo />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
