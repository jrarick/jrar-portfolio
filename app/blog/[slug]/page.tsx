import { notFound } from "next/navigation"
import { CustomMDX } from "app/components/mdx"
import { formatDate, getBlogPosts } from "app/lib/utils"
import { baseUrl } from "app/sitemap"
import { SharedTransition, TransitionLink } from "app/lib/transitions"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const { slug } = await params

  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="mx-auto pt-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />

      {/* Back to home link */}
      <div className="mb-8">
        <TransitionLink
          href="/blog"
          type="transition-to-list"
          className="inline-flex items-center space-x-2 text-sm text-neutral-500 transition-colors hover:text-neutral-300"
        >
          <ArrowLeftIcon />
          <span>All blog posts</span>
        </TransitionLink>
      </div>

      <SharedTransition name={`blog-title-${post.slug}`} share="animate-morph">
        <h1 className="title text-2xl font-semibold tracking-tighter">
          {post.metadata.title}
        </h1>
      </SharedTransition>
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <SharedTransition name={`blog-date-${post.slug}`} share="animate-morph">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </SharedTransition>
      </div>
      <article className="prose dark:prose-invert prose-neutral">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
