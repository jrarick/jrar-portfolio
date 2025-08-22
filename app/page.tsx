import { BlogPosts } from "app/components/posts"
import { Projects } from "./components/projects"
import { Tools } from "./components/tools"

export default function Page() {
  return (
    <section>
      <div className="mb-32 mt-16 max-w-xl mx-auto">
        <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
          Hey, I'm Josh Rarick
        </h1>
        <p className="leading-8 tracking-tight">
          I work across the full stack and specialize in frontend, design, and
          UX. I pay attention to the details of user interfaces.
        </p>
      </div>
      <div className="my-24">
        <h2 className="text-2xl font-semibold mb-6 tracking-tighter">
          Things I've built
        </h2>
        <Projects />
      </div>
      <div className="my-24">
        <h2 className="text-2xl font-semibold mb-6 tracking-tighter">
          Tools I use
        </h2>
        <Tools />
      </div>
      <div className="my-24 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tighter border-b pb-5 mb-5 border-neutral-700">
          Read the blog
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
