"use client"

import { useState } from "react"
import bookmarksData from "../../public/bookmarks.json"
import { AnimatePresence, motion } from "motion/react"

interface Bookmark {
  url: string
  add_date: string
  icon: string
  title: string
}

export default function Page() {
  const bookmarks = bookmarksData.bookmarks as Bookmark[]
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBookmarks = bookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp) * 1000)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tighter">Bookmarks</h2>
      <p className="mt-2 text-sm text-zinc-600">
        A collection of resources I find interesting or inspiring
      </p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md rounded border border-zinc-300 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-zinc-400 focus:outline-none"
        />
      </div>

      <ul className="mt-8">
        <AnimatePresence mode="popLayout">
          {filteredBookmarks.map((bookmark, index) => (
            <motion.li
              key={bookmark.url}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
              transition={{ duration: 0.2 }}
              layout
            >
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                title={bookmark.title}
                className="flex w-full items-center justify-between gap-3 rounded-lg p-3 hover:bg-zinc-200"
              >
                {bookmark.icon ? (
                  <img
                    src={bookmark.icon}
                    alt=""
                    className="h-4 w-4 flex-shrink-0"
                  />
                ) : (
                  <div className="h-4 w-4 flex-shrink-0 rounded-full bg-zinc-400" />
                )}
                <div className="flex w-full min-w-0 flex-1 items-center justify-between gap-4">
                  <span className="truncate text-sm">{bookmark.title}</span>
                  <span className="flex-shrink-0 text-xs font-medium text-zinc-500">
                    {formatDate(bookmark.add_date)}
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {filteredBookmarks.length === 0 && (
        <p className="mt-8 text-sm text-zinc-500">
          {`No bookmarks found matching "${searchTerm}"`}
        </p>
      )}
    </>
  )
}
