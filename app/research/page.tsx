"use client"

import * as React from "react"
import Link from "next/link"
import { Video, Link as LinkIcon, FileText, Presentation, Search, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Cover } from "@/components/ui/cover"
import publications, { Publication } from "@/data/publications.data"
import { InlineMath } from "react-katex"
import "katex/dist/katex.min.css"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")

  const allTags = useMemo(
    () => Array.from(new Set(publications.flatMap((pub) => pub.tags || []))).sort(),
    [publications]
  )

  const filteredPublications = useMemo(
    () =>
      publications.filter((pub) => {
        const searchLower = searchTerm.toLowerCase()
        return (
          pub.title.toLowerCase().includes(searchLower) ||
          pub.summary.toLowerCase().includes(searchLower) ||
          pub.body.toLowerCase().includes(searchLower) ||
          pub.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
        )
      }),
    [publications, searchTerm]
  )

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12">
      <div className="mx-auto space-y-8">
        <header className="space-y-4">
          <Cover className="text-4xl font-bold">Publications</Cover>
          <p className="text-gray-400">Recent academic publications, presentations, and preprints</p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
            <Input
              type="search"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          {searchTerm && (
            <div className="flex flex-wrap gap-2">
              {allTags
                .filter((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80"
                    onClick={() => setSearchTerm(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
          )}
        </header>

        <ScrollArea className="h-screen border rounded-xl">
          <div className="grid gap-4 p-4">
            {filteredPublications.map((pub, index) => (
              <PublicationCard key={index} pub={pub} onTagClick={setSearchTerm} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

interface PublicationCardProps {
  pub: Publication
  onTagClick: (tag: string) => void
}

function PublicationCard({ pub, onTagClick }: PublicationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    console.log("toggleExpand")
    setIsExpanded((prev) => !prev)
  }

  const MediaIcon = ({ type }: { type: string }) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "slides":
        return <Presentation className="h-4 w-4" />
      case "paper":
        return <FileText className="h-4 w-4" />
      default:
        return <LinkIcon className="h-4 w-4" />
    }
  }

  function mathify(text: string) {
    return text.split("$").map((part, index) => {
      return index % 2 === 0 ? part : <InlineMath key={index}>{part}</InlineMath>
    })
  }

  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false, amount: 0.25 }}
      onClick={toggleExpand}
    >
      <Card className="bg-zinc-900 relative">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold">{mathify(pub.title)}</CardTitle>
              <p className="text-sm text-gray-400">{pub.authors.join(", ")}</p>
            </div>
            <Badge variant="outline" className="shrink-0 sm:mt-1">
              {new Date(pub.date).toDateString()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">{mathify(pub.summary)}</p>

          <AnimatePresence>
            {isExpanded && (
              <motion.p
                className="text-gray-300"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {mathify(pub.body)}
              </motion.p>
            )}
          </AnimatePresence>

          {pub.tags && (
            <div className="flex flex-wrap gap-2">
              {pub.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80"
                  onClick={(event) => {
                    event.stopPropagation()
                    onTagClick(tag)
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {pub.mediaLinks && (
            <div className="flex flex-wrap gap-4">
              {pub.mediaLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  // make open in new tab
                  target="_blank"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <MediaIcon type={link.type} />
                  <span>View {link.type}</span>
                </Link>
              ))}
            </div>
          )}
        </CardContent>

        <Button
          variant="outline"
          className="absolute bottom-4 right-4 text-gray-400 hover:text-white transition-colors"
          onClick={(event) => {
            event.stopPropagation()
            toggleExpand()
          }}
        >
          {isExpanded ? <ChevronUp className="h-4 w-4 inline" /> : <ChevronDown className="h-4 w-4 inline" />}
        </Button>
      </Card>
    </motion.div>
  )
}
