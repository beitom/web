import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react"
import { jobPostings } from "@/data/careers.data"
import JobPostingNotFound from "@/app/careers/error"
import JobApplicationForm from "@/app/careers/form"

export default function JobPage({ params }: { params: { id: string } }) {
  const job = jobPostings.find((job) => job.id === Number(params.id))

  if (!job) {
    return <JobPostingNotFound />
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 mt-24 space-y-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Job Details */}
        <div className="flex-1 space-y-8">
          <header className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
            <p className="text-xl text-muted-foreground">{job.shortDescription}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPinIcon className="w-4 h-4 mr-2" />
                {job.city.join(", ")}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4 mr-2" />
                {formatDate(job.dateStart)} - {formatDate(job.dateEnd)}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <ClockIcon className="w-4 h-4 mr-2" />
                {job.employmentType.replace("_", " ").toLowerCase()}
              </div>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">About the Role</h2>
            <p className="text-muted-foreground">{job.longDescription}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-muted-foreground">
                  {responsibility}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Requirements</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="text-muted-foreground">
                  {requirement}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Application Form */}
        <div className="flex-1 lg:max-w-lg">
          <JobApplicationForm jobTitle={job.title} cities={job.city} />
        </div>
      </div>
    </div>
  )
}
