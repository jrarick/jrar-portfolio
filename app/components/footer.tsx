import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { GithubLogo, LinkedinLogo } from "./social-icons"
import Link from "next/link"

const navigation = [
  {
    name: "Email",
    href: "mailto:rarick.joshua.e@gmail.com",
    icon: EnvelopeClosedIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/jrarick",
    icon: GithubLogo,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joshua-rarick/",
    icon: LinkedinLogo,
  },
]

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-between border-t border-zinc-300 px-8 py-24">
        <Link href="/">
          <p className="font-display text-2xl tracking-wide text-zinc-800 hover:text-zinc-900">
            JRAR.dev
          </p>
        </Link>
        <div className="flex justify-center gap-x-6 md:order-2">
          <a
            className="flex items-center text-zinc-600 transition-all hover:text-zinc-800"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            RSS
          </a>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-500 hover:text-zinc-600"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
      </div>
      <div className="z-30 h-16 w-dvw border-t border-zinc-300" />
    </footer>
  )
}
