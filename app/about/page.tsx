import { CustomMDX } from "app/components/mdx"
import { getAbout } from "app/lib/utils"

export default async function Page() {
  const about = getAbout()[0]

  return (
    <article className="prose dark:prose-invert prose-neutral mx-auto my-16">
      <CustomMDX source={about.content} />
    </article>
  )
}
