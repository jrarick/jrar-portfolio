import { BlogPosts } from "app/components/posts"
import { Projects } from "./components/projects"
import { Tools } from "./components/tools"
import Hero from "./components/hero"

export default function Page() {
  return (
    <section>
      <Hero />
      <div className="border-t border-zinc-300 py-24">
        <Projects />
      </div>
      <div className="border-t border-zinc-300 py-24">
        <Tools />
      </div>
      <div className="border-t border-zinc-300 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-5 border-b border-neutral-300 pb-5 text-2xl font-semibold tracking-tighter dark:border-neutral-700">
            From the blog
          </h2>
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
