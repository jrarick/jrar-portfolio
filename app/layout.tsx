import "./global.css"
import type { Metadata } from "next"
import { Raleway, Inter, Bebas_Neue, PT_Serif } from "next/font/google"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import { baseUrl } from "./sitemap"

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
      <body className="antialiased w-full text-black flex">
        <div className="border-r border-zinc-300 w-16 h-dvh hidden sm:flex items-center fixed left-0 top-0">
          <div className="-rotate-90 -ml-8 whitespace-nowrap">
            Built in Austin TX
          </div>
        </div>
        <main className="flex flex-col items-center px-4 sm:px-16 w-full mt-16">
          <Navbar />
          <div className="flex-auto min-w-0 flex flex-col max-w-full">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <div className="border-l border-zinc-300 w-16 h-dvh hidden sm:flex flex-col justify-between fixed right-0 top-0" />
      </body>
    </html>
  )
}
