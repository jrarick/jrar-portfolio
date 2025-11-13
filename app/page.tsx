import { BlogPosts } from "app/components/posts"
import { Tools } from "./components/tools"
import Hero from "./components/hero"
import ProjectsLoader from "./components/projects-loader"

export default function Page() {
  return (
    <section>
      <Hero />
      <hr className="mx-16 border-zinc-300" />
      <div className="py-24">
        <ProjectsLoader />
      </div>
      <hr className="mx-16 border-zinc-300" />
      <div className="py-24">
        <Tools />
      </div>
      <hr className="mx-16 border-zinc-300" />
      <div className="py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-5 border-b border-zinc-300 pb-5 text-2xl font-semibold tracking-tighter">
            From the blog
          </h2>
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
