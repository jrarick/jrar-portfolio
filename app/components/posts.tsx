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
            className="flex group"
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-2">
              <SharedTransition
                name={`blog-date-${post.slug}`}
                share="animate-morph"
              >
                <p className="text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-500 transition-colors duration-300">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </SharedTransition>
              <SharedTransition
                name={`blog-title-${post.slug}`}
                share="animate-morph"
              >
                <p className="text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-300 tracking-tight font-medium transition-colors duration-300">
                  {post.metadata.title}
                </p>
              </SharedTransition>
            </div>
          </TransitionLink>
        ))}
    </div>
  )
}
