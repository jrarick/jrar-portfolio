import Link from "next/link"
import { formatDate, getBlogPosts } from "app/lib/utils"

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
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex group"
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-2">
              <p className="text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-300 tracking-tight font-medium">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
