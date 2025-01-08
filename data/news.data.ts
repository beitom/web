import publications from "@/data/publications.data"
import { normalizeTitle } from "@/lib/utils"

export interface NewsData {
  title: string
  date: string
  category: string
  description: string
  link: string
  image?: string
  // markdownContentPath?: string
}

export enum NewsCategories {
  Media = "Media",
  Press = "Press",
  Announcements = "Announcements",
  Events = "Events",
  Publications = "Publications"
}

const publicationNewsData: NewsData[] = publications.map((publication) => ({
  title: publication.title,
  date: publication.date,
  category: NewsCategories.Publications,
  description: publication.summary,
  link: `/research/${normalizeTitle(publication.title)}`,
  image: publication.image
}))

const newsData: NewsData[] = [
  {
    title: "Willow: Quantum Computing and the Overhyped Revolution",
    date: "2024-12-26",
    category: NewsCategories.Media,
    image: "/assets/images/news/willow.jpg",
    description:
      "The mind-blowing numbers about the capabilities of Google's new quantum computer Willow are a great, if largely PR move, experts say. Although the quantum revolution seems to be getting closer, it still remains a prospect of the coming years, not days.",
    link: "https://xyz.pl/willow-komputer-kwantowy-i-przereklamowana-rewolucja/"
  },
  {
    title: "BEIT selected by the European Innovation Council to receive Accelerator Investment",
    date: "2023-3-29",
    category: NewsCategories.Announcements,
    description: "BEIT selected by the European Innovation Council to receive Accelerator Investment of €2.5m.",
    link: "https://eic.ec.europa.eu/news/european-innovation-council-new-group-deep-tech-start-ups-receive-accelerator-investments-increase-2023-03-29_en"
  }
]

let news: NewsData[] = [...newsData, ...publicationNewsData.slice(0, 3)]
news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default news
