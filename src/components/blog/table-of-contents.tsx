"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    const tocItems: TOCItem[] = []

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`
      if (!heading.id) {
        heading.id = id
      }

      tocItems.push({
        id,
        text: heading.textContent || "",
        level: Number.parseInt(heading.tagName.charAt(1)),
      })
    })

    setToc(tocItems)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (toc.length === 0) return null

  return (
    <div className="sticky top-8 w-64 hidden lg:block">
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={cn(
                "block w-full text-left text-sm transition-colors hover:text-primary",
                item.level === 1 && "font-medium",
                item.level === 2 && "pl-3",
                item.level === 3 && "pl-6 text-xs",
                item.level >= 4 && "pl-9 text-xs",
                activeId === item.id ? "text-primary font-medium" : "text-muted-foreground",
              )}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
