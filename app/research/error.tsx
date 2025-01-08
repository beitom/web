"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function PublicationNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center space-y-6 max-w-md">
        <AlertCircle className="w-16 h-16 text-primary mx-auto" />
        <h1 className="text-3xl font-bold tracking-tight">Publication Not Found</h1>
        <p className="text-xl text-muted-foreground">
          We're sorry, but the publication you're looking for couldn't be found. It may have been removed or doesn't
          exist.
        </p>
        <Button asChild className="mt-4">
          <Link href="/research">Return to Research</Link>
        </Button>
      </div>
    </div>
  )
}
