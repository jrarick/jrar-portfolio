import "./global.css"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import { baseUrl } from "./sitemap"
import { ThemeProvider } from "next-themes"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
      className={cx(inter.className, jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="antialiased w-full px-4 pt-8 text-black bg-neutral-50 dark:text-white dark:bg-neutral-900">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 max-w-5xl mx-auto">
              <Navbar />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
