import { ArrowTopRightIcon } from "@radix-ui/react-icons"

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 flex max-w-xl flex-col items-center">
      <ul className="font-sm mt-8 flex flex-row space-x-8 text-zinc-600 dark:text-zinc-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-zinc-800 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowTopRightIcon />
            <p className="ml-2">RSS</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-zinc-800 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jrarick"
          >
            <ArrowTopRightIcon />
            <p className="ml-2">Github</p>
          </a>
        </li>
      </ul>
      <a
        href="https://www.longhorndesign.studio/"
        target="_blank"
        className="mt-8 flex items-center underline underline-offset-2 transition-all hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100"
      >
        Need a website?
      </a>
      <div className="z-30 h-16 w-dvw border-t border-zinc-300" />
    </footer>
  )
}
