"use client"

import React from "react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { InlineMath } from "react-katex"
import "katex/dist/katex.min.css"
import { FileText, LinkIcon, Presentation, Video } from "lucide-react"

import publications, { normalizedTitleMap, Publication } from "@/data/publications.data"
import { LinkPreview } from "@/components/ui/link-preview"

// For any UI components you have:
import { Badge } from "@/components/ui/badge"

type Params = {
  id: string
}

// Helper for rendering inline math if needed
function mathify(text: string) {
  return text.split("$").map((part, index) => {
    return index % 2 === 0 ? part : <InlineMath key={index}>{part}</InlineMath>
  })
}

// Select an icon for media links based on their `type`
function MediaIcon({ type }: { type: string }) {
  switch (type) {
    case "video":
      return <Video className="h-5 w-5" />
    case "slides":
      return <Presentation className="h-5 w-5" />
    case "paper":
      return <FileText className="h-5 w-5" />
    default:
      return <LinkIcon className="h-5 w-5" />
  }
}

export default function PublicationPage({ params }: { params: Params }) {
  // Extract ID from the URL
  const { id } = params

  // Use the normalizedTitleMap to find the matching publication index
  const index = normalizedTitleMap[id]
  if (index === undefined) {
    notFound()
  }

  // If found, retrieve the publication data
  const publication: Publication = publications[index]

  return (
    <main className="bg-zinc-900 text-gray-100 min-h-screen flex flex-col pt-16">
      {/* Framer Motion wrapper for a nice fade/slide-in effect */}
      <motion.section
        className="max-w-3xl w-full mx-auto px-4 py-12 flex-1 flex flex-col gap-8"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Title / Authors / Date */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight">{mathify(publication.title)}</h1>
          <p className="text-sm text-gray-400">{publication.authors.join(", ")}</p>
          <Badge variant="outline">{new Date(publication.date).toDateString()}</Badge>
        </header>

        {/* Summary */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="text-gray-300 leading-relaxed">{mathify(publication.summary)}</p>
        </section>

        {/* Full Body / Content */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Details</h2>
          <p className="text-gray-300 leading-relaxed">{mathify(publication.body)}</p>
        </section>

        {/* Tags */}
        {publication.tags && publication.tags.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {publication.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Media Links */}
        <section className="space-y-2">
          {/*<h2 className="text-xl font-semibold">Media</h2>*/}
          <div className="flex flex-col gap-3">
            {publication.mediaLinks.map((link, i) => {
              const content = (
                <>
                  <MediaIcon type={link.type} />
                  <span>View {link.type}</span>
                </>
              )

              // Use a "LinkPreview" for "paper" type if you want
              if (link.type === "paper") {
                return (
                  <LinkPreview
                    key={i}
                    url={link.url}
                    className="inline-flex items-center gap-2 p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-primary transition-colors w-max"
                  >
                    {content}
                  </LinkPreview>
                )
              }

              // Otherwise, render a standard <a> tag
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-primary transition-colors w-max"
                >
                  {content}
                </a>
              )
            })}
          </div>
        </section>
      </motion.section>
    </main>
  )
}
