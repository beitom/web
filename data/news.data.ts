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
  Interview = "Interviews",
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
    category: NewsCategories.Interview,
    image: "/assets/images/news/willow.jpg",
    description:
      "The mind-blowing numbers about the capabilities of Google's new quantum computer Willow are a great, if largely PR move, experts say. Although the quantum revolution seems to be getting closer, it still remains a prospect of the coming years, not days.",
    link: "https://xyz.pl/willow-komputer-kwantowy-i-przereklamowana-rewolucja/"
  },
  {
    title: "BEIT selected by the European Innovation Council to receive Accelerator Investment",
    date: "2023-3-29",
    category: NewsCategories.Announcements,
    image: "/assets/images/news/eic.png",
    description: "BEIT selected by the European Innovation Council to receive Accelerator Investment of €2.5m.",
    link: "https://eic.ec.europa.eu/news/european-innovation-council-new-group-deep-tech-start-ups-receive-accelerator-investments-increase-2023-03-29_en"
  },
  {
    title: "BEIT Team Wins Gold Honours at International Gamma Mathematics Olympiad",
    description:
      "We are proud to announce that two of our employees, Witold Jarnicki and Jan Tułowiecki, achieved Gold Honours at International Gamma Mathematics Olympiad 2022 (IGMO). This event is an international open-for-all individual online competition taking place over two rounds. The first round consists of fifteen integer answer type questions and one proof-based problem, while the second round spans two days, each featuring three hard proof-based problems.",
    image: "/assets/images/other_images/resized_igmo_certs2.jpg",
    category: NewsCategories.Announcements,
    date: "2022-8-23",
    link: "https://beit.tech/blog/igmo-2022-results.html"
  },
  {
    link: "https://www.classiq.io/insights/classiq-coding-competition-results",
    title: "BEIT Engineers Win Gold & Silver in Classiq Coding Competition",
    description: "",
    category: NewsCategories.Announcements,
    date: "2022-6-14",
    image: "/assets/images/news/classiq.webp"
  },
  {
    link: "https://medium.com/qiskit/presenting-the-winners-of-the-first-icpc-quantum-computing-challenge-b16a448a82e2",
    title: "BEIT Engineer Wins IBM ICPC Quantum Computing Challenge",
    description: "",
    date: "2021-3-24",
    category: NewsCategories.Announcements,
    image: "/assets/images/news/qiskit.jpg"
  },
  {
    title: "BEIT Selected as One of Four QC Technology Pioneers by the World Economic Forum",
    link: "https://www.insidequantumtechnology.com/news-archive/four-quantum-technology-companies-on-the-world-economic-forum-2022-technology-pioneers-list/",
    description:
      "The World Economic Forum bestows this honour each year on the most innovative and impactful companies worldwide. The Technology Pioneers community, launched in 2000, comprises early-to growth-stage companies from around the world that are involved in the design, development and deployment of new technologies and innovations, and are poised to have a significant impact on business and society.",
    category: NewsCategories.Announcements,
    date: "2022-5-10",
    image: "/assets/images/news/wef.jpg"
  }
]

let news: NewsData[] = [...newsData, ...publicationNewsData.slice(0, 3)]
news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default news
