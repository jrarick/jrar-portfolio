import { formatDate, getBlogPosts } from "app/lib/utils"
import { TransitionLink, SharedTransition } from "app/lib/transitions"

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
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
            className="flex rounded-lg p-3 hover:bg-zinc-200"
          >
            <div className="flex w-full flex-row items-baseline">
              <SharedTransition
                name={`blog-date-${post.slug}`}
                share="animate-morph"
              >
                <p className="w-24 shrink-0 self-baseline text-xs font-medium tracking-tight text-zinc-500">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </SharedTransition>
              <SharedTransition
                name={`blog-title-${post.slug}`}
                share="animate-morph"
              >
                <p className="text-sm tracking-tight group-hover:text-zinc-800">
                  {post.metadata.title}
                </p>
              </SharedTransition>
            </div>
          </TransitionLink>
        ))}
    </div>
  )
}
