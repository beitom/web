import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import { Cover } from "@/components/ui/cover"
import { jobPostings } from "@/data/careers.data"

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground p-6 md:p-12 mt-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="space-y-4">
          <Cover className="text-4xl font-bold">Careers</Cover>
          <p className="text-muted-foreground">
            Join our world class team to help build the future of quantum computing software!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPostings.map((job) => (
            <Link key={job.id} href={`/careers/${job.id}`}>
              <Card className="hover:bg-muted/50 cursor-pointer transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.city.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(job.dateStart).toLocaleDateString()}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.shortDescription}</p>
                  <Button className="mt-4" variant="secondary">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
