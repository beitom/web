import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"
import { ADDRESSES, jobPostings } from "@/data/careers.data"
import JobPostingNotFound from "@/app/careers/error"
import JobApplicationForm from "@/app/careers/form"

type Params = Promise<{ id: string }>

export default async function JobPage({ params }: { params: Params }) {
  const resolvedParams = await params
  const id = resolvedParams.id
  const job = jobPostings.find((job) => job.id === id)

  if (!job) {
    return <JobPostingNotFound />
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const formatJsonLDJobDescription = (description: string, requirements: string[], responsibilities: string[]) => {
    // generate some vanilla html as a string using <p>, <br>, <ul>, <li> tags
    // then return the string
    return `
      <h2>About the Role</h2>
      <p>${description}</p>
      <h2>Responsibilities</h2>
      <ul>
        ${responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join("")}
      </ul>
      <h2>Requirements</h2>
      <ul>
        ${requirements.map((requirement) => `<li>${requirement}</li>`).join("")}
      </ul>
    `
  }

  // JSON-LD structured data for Google Jobs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: formatJsonLDJobDescription(job.longDescription, job.requirements, job.responsibilities),
    datePosted: job.dateStart,
    validThrough: job.dateEnd,
    employmentType: job.employmentType.replace("_", " ").toUpperCase(),
    hiringOrganization: {
      "@type": "Organization",
      name: "BEIT Inc.",
      sameAs: "https://beit.tech"
    },
    jobLocation: job.city.map((city) => ({
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESSES[city].streetAddress, // You can add a specific address here if needed
        addressLocality: city,
        addressRegion: ADDRESSES[city].addressRegion, // Add region if known, e.g., "ON" for Ontario
        postalCode: ADDRESSES[city].postalCode, // Add postal code if available
        addressCountry: ADDRESSES[city].addressCountry // Adjust to the correct country code, e.g., "CA" for Canada
      }
    })),
    industry: "Quantum Computing",
    workHours: "Full-time"
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 mt-24 space-y-8">
      {/* Google Jobs Metadata */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
