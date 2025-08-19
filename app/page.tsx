import { BlogPosts } from "app/components/posts"
import { Projects } from "./components/projects"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
          Vim's keystroke commands and tabs' flexibility for personal viewing
          preferences. This extends to my support for static typing, where its
          early error detection ensures cleaner code, and my preference for dark
          mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <Projects />
      </div>
      <div className="mb-8 mt-20 max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold border-b pb-5 mb-5 border-neutral-700">
          From the blog
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
