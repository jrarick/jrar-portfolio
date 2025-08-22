"use client"

import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const ThemeButton = ({
    value,
    icon: Icon,
    label,
  }: {
    value: string
    icon: React.ComponentType
    label: string
  }) => (
    <button
      onClick={() => setTheme(value)}
      className={`p-2 rounded transition-all ${
        theme === value
          ? "text-neutral-800 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-700"
          : "text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      }`}
      title={`Switch to ${label} theme`}
    >
      <Icon />
    </button>
  )

  return (
    <div className="flex items-center space-x-1">
      <ThemeButton value="light" icon={SunIcon} label="light" />
      <ThemeButton value="dark" icon={MoonIcon} label="dark" />
      <ThemeButton value="system" icon={DesktopIcon} label="system" />
    </div>
  )
}
