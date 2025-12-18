import "./global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { baseUrl } from "./sitemap"
import { cn } from "./lib/client-utils"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, "bg-alabaster")}
      suppressHydrationWarning
    >
      <body className="mx-auto min-h-dvh max-w-7xl justify-center antialiased">
        <div className="flex max-w-full flex-col sm:flex-row">
          <Navbar />
          <main className="w-full min-w-0 shrink-1 px-4 py-16 sm:px-16">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  )
}
