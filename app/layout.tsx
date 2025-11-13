import "./global.css"
import type { Metadata } from "next"
import { Raleway, Inter, Bebas_Neue, PT_Serif } from "next/font/google"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import { baseUrl } from "./sitemap"
import { Marquee } from "./components/animations/marquee"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
})

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "JRAR.dev",
    template: "%s | JRAR.dev",
  },
  description: "This is my personal portfolio and blog.",
  openGraph: {
    title: "Josh Rarick's Portfolio",
    description: "This is my personal portfolio and blog.",
    url: baseUrl,
    siteName: "JRAR.dev",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(" ")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(ptSerif.variable, bebasNeue.variable, "bg-alabaster")}
      suppressHydrationWarning
    >
      <body className="flex w-full antialiased">
        <div className="fixed top-0 left-0 hidden h-dvh w-16 items-center border-r border-zinc-300 sm:flex" />
        <main className="mt-16 flex w-full flex-col items-center px-4 sm:px-16">
          <Navbar />
          <div className="flex max-w-full min-w-0 flex-auto flex-col">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <div className="fixed top-0 right-0 hidden h-dvh w-16 flex-col justify-between border-l border-zinc-300 sm:flex" />
      </body>
    </html>
  )
}
