import { BlogPosts } from "app/components/posts"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my blog.",
}

export default function Page() {
  return (
    <section className="mx-auto w-fit">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        From the blog
      </h1>
      <BlogPosts />
    </section>
  )
}
