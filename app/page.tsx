import Image from "next/image"

export default function Page() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-12 md:flex-row">
      <Image
        src="/josh.jpeg"
        alt="Portrait of me"
        width={150}
        height={150}
        className="size-40 rounded-lg border border-zinc-200 shadow-md"
      />
      <div className="prose prose-zinc prose-sm">
        <p>
          Hi, I'm <b>Josh Rarick</b>. I'm a creative developer that works across
          the full stack. I've worn a number of different hats over the years.
          From creating websites and application UIs, API development,
          automating workflows, and more.
        </p>
        <p>
          Where I really find myself <em>most</em> comfortable is at the
          intersection of design, implementation, and user experience. Building
          experiences that are inspiring, meaningful, useful, and beautiful is
          what drives me.
        </p>
      </div>
    </div>
  )
}
