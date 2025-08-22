import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import ThemeSwitcher from "./theme-switcher"

export default function Footer() {
  return (
    <footer className="my-20 max-w-xl mx-auto flex flex-col items-center">
      <div className="mb-2">
        <ThemeSwitcher />
      </div>

      <ul className="font-sm mt-8 flex text-neutral-600 flex-row space-x-8 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
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
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
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
        className="flex mt-8 items-center transition-all underline underline-offset-2 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
      >
        Need a website?
      </a>
    </footer>
  )
}
