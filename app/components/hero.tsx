"use client"

import Image from "next/image"
import { VerticalCutReveal } from "./animations/vertical-cut-reveal"
import { Pointer } from "./animations/pointer"
import { motion } from "motion/react"
import { ArrowDownIcon } from "@radix-ui/react-icons"

export default function Hero() {
  return (
    <div className="relative h-[calc(100dvh_-_4rem)] min-h-[40rem] sm:min-h-[56rem]">
      <div className="font-display -mb-[0.1em] flex w-full items-baseline justify-center gap-[0.1em] overflow-hidden pt-[0.1em] text-[20.5vw] leading-none whitespace-nowrap text-zinc-800 text-shadow-md/20 sm:px-4 sm:text-[calc((100vw_-_8rem)*_0.21)]">
        <VerticalCutReveal>Josh</VerticalCutReveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          className="h-[0.7em] w-[0.7em] overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src="/josh.jpeg"
            alt="Josh Rarick"
            width={300}
            height={300}
            className="h-[0.7em] w-[0.7em] object-cover"
          />
        </motion.div>
        <VerticalCutReveal
          transition={{
            type: "spring",
            stiffness: 190,
            damping: 22,
            delay: 0.2,
          }}
        >
          Rarick
        </VerticalCutReveal>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.9 }}
      >
        <div className="mx-auto grid grid-cols-1 gap-3 px-12 pt-4 text-sm font-medium tracking-tight text-zinc-600 sm:text-base md:grid-cols-2 lg:grid-cols-3 lg:px-24 lg:pt-8">
          <p className="order-1 text-center lg:text-left">
            Creative Fullstack Engineer
          </p>
          <div className="order-3 col-span-1 flex items-center justify-center gap-3 md:col-span-2 lg:order-2 lg:col-span-1">
            <a
              href="https://github.com/jrarick"
              aria-label="Github Profile"
              className="text-zinc-500 hover:text-zinc-600"
            >
              <GithubLogo />
            </a>
            <a
              href="https://www.linkedin.com/in/rarick-joshua/"
              aria-label="LinkedIn Profile"
              className="text-zinc-500 hover:text-zinc-600"
            >
              <LinkedinLogo />
            </a>
          </div>
          <div className="order-2 flex justify-center lg:order-3 lg:justify-end">
            <div className="flex h-full items-center gap-2 text-zinc-500">
              <MapPinIcon />
              <span className="text-zinc-600">Based in Austin, TX</span>
              <TexasIcon />
              <Pointer>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"
                  alt="Flag of Texas"
                  className="h-12 w-auto rounded-md"
                  height={80}
                  width={120}
                />
              </Pointer>
            </div>
          </div>
        </div>
        <hr className="mt-6 border-zinc-300" />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.002}
          staggerFrom="random"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 35,
            delay: 1,
          }}
          containerClassName="max-w-2xl text-base/8 sm:text-lg/9 text-zinc-800 py-16 px-6 lg:pt-40 lg:pl-20 col-span-1 lg:col-span-3"
        >
          I'm a product focused engineer specializing in design, UX, and React.
          I create digital interfaces that prioritize usability, accessibility,
          and performance. I pay attention to the details.
        </VerticalCutReveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.2 }}
          className="col-span-1 flex flex-col items-center justify-end gap-3 lg:col-span-2"
        >
          <p>See my work</p>
          <ArrowDownIcon className="size-4 animate-bounce" />
        </motion.div>
      </div>
    </div>
  )
}

function GithubLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  )
}

function LinkedinLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      ></path>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-map-pin-icon lucide-map-pin"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function TexasIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M156.3 41.88V222.6l-130.57 3c35.98 40.7 60.88 78.7 123.07 126c36.4-48.2 78.8-54.7 144.7 100.5l66.8 18c.7-49.4-15.2-97.8 126-155.3l-11.3-93l-3-60.7l-211.9-39.8V41.88z"
      />
    </svg>
  )
}
