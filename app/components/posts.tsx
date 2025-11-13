import { formatDate, getBlogPosts } from "app/lib/utils"
import { TransitionLink, SharedTransition } from "app/lib/transitions"

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-5">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <TransitionLink
            key={post.slug}
            href={`/blog/${post.slug}`}
            type="transition-to-detail"
            className="group flex"
          >
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-[10rem_1fr]">
              <SharedTransition
                name={`blog-date-${post.slug}`}
                share="animate-morph"
              >
                <p className="text-zinc-400 group-hover:text-zinc-500">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </SharedTransition>
              <SharedTransition
                name={`blog-title-${post.slug}`}
                share="animate-morph"
              >
                <p className="font-medium tracking-tight text-zinc-500 group-hover:text-zinc-800">
                  {post.metadata.title}
                </p>
              </SharedTransition>
            </div>
          </TransitionLink>
        ))}
    </div>
  )
}
