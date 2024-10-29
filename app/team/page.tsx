"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { CiLocationOn } from "react-icons/ci"
import { Cover } from "../../components/ui/cover"

interface Member {
  name: string
  roles: string[]
  photo: string
  location: string
  story: string
  education?: string[][]
}

const boardMembers: Member[] = [
  {
    name: "Paulina Mazurek",
    roles: ["Co-founder", "CEO"],
    photo: "paulina.mazurek.jpg",
    location: "Krakow",
    story:
      'Formerly Head of allegro.tech at allegro, the biggest e-commerce platform in the region, responsible for building company\'s tech brand and supporting developers and startups communities in Poland. Before, she helped in setting up Google R&D site in Krakow and become Program Manager responsible for several programs including "Google for Entrepreneurs Krakow", GTV second screen app, or Google Transit for Krakow. Prior to Google she worked for Motorola, holding various administrative positions.'
  },
  {
    name: "Wojciech Burkot",
    roles: ["Co-founder", "Chief Physics Officer"],
    photo: "wojciech.burkot.jpg",
    location: "Krakow",
    story:
      "Previously, Chief Technology Officer at Grupa Allegro responsible for Marketplace, focused on Mobile and Big Data. Before Allegro, he had started and run Google R&D Center in Krakow as a Site Lead and Engineering Director between 2006-2014. Prior to Google, he worked in a number of roles at Motorola. Earlier in his career, he was an Assistant Professor of Computer Science at AGH in Krakow and a researcher at Institute of Nuclear Physics."
  },
  {
    name: "Witold Jarnicki",
    roles: ["Co-founder", "Chief Mathematics Officer"],
    photo: "witold.jarnicki.jpg",
    location: "Krakow",
    story:
      "Witold is an expert in complex analysis, algebraic geometry, computer algebra and algorithmic complexity. Recently, as a Software Engineer at Corvil, he worked on low-level performance of the core system, contribution towards user-customizable big-data analysis framework based on open-source components and the solution allowing monitoring network traffic in cloud deployments. Between 2007-2014 he worked at the same position at Google R&D Krakow within Infrastructure area, responsible for analysis and optimization of cluster resource utilization, Omega cluster OS, ML-based ads optimization. Prior to Google he was assistant professor at the Jagiellonian University."
  }
]

const teamMembers: Member[] = [
  {
    name: "Adam Szady",
    roles: ["Software Engineer"],
    photo: "adam.szady.jpg",
    location: "Krakow",
    story:
      "Adam joined BEIT during the fourth year of his studies. Always keen on learning, willing to dive deep into quantum computing, questioning more traditional approach to problem solving, added creativity to our team. He has already managed to work for Sabre as software engineer, got to Google Distributed Code Jam finals and spend 3 months as Google intern in Munich."
  },
  {
    name: "Marcin Briański",
    roles: ["Mathematician"],
    photo: "marcin.brianski.jpg",
    location: "Krakow",
    story:
      "Marcin has joined BEIT in the summer of 2018, initially just for the summer internship but decided to continue working with us. He is currently enrolled in a PhD programme in Theoretical Computer Science at the Jagiellonian University. His tasks at BEIT range from implementing our algorithms to proving they can't work (any better). His interests focus around combinatorics, in particular structural graph theory and optimisation."
  },
  {
    name: "Jan Tułowiecki",
    roles: ["Software Engineer"],
    photo: "jan.tulowiecki.jpg",
    location: "Krakow",
    story:
      "Jan is a competitive programming spirit. He loves analysing problems in depth and solving algorithmic challenges. In 2019 he obtained his master's degree in Computer Science on University of Science and Technology in Krakow. He represented his university on various coding competitions, both national and Europe-wide. Jan joined BEIT already having work experience in software engineering gained at Samsung R&D in Krakow."
  },
  {
    name: "Szymon Pliś",
    roles: ["General Engineer"],
    education: [["PhD in Mathematics", "Jagiellonian University"]],
    photo: "szymon.plis.jpg",
    location: "Krakow",
    story:
      "Szymon is an expert in complex analysis and nonlinear PDEs. Recently he worked as an assistant professor at the Jagiellonian University. Earlier he was doing his research in the Cracow University of Technology and in the Polish Academy of Sciences."
  },
  {
    name: "Jacek Horecki",
    roles: ["Mathematician"],
    photo: "jacek.horecki.jpg",
    location: "Krakow",
    story:
      "Jacek joined the BEIT team in 2020 while pursuing his studies in Mathematics and Computer Science at Jagiellonian University. Currently, he is a PhD student, specializing in differential geometry and topology. At BEIT, Jacek is a passionate C++ and Python developer with a strong interest in simulations and cloud technologies."
  },
  {
    name: "Natalia Szczepanik",
    roles: ["Administrative assistant"],
    photo: "natalia.szczepanik.jpg",
    location: "Krakow",
    story: "Natalia has joined BEIT in 2020. She is currently pursuing a master's degree in clinical psychology."
  },
  {
    name: "Bruno Pitrus",
    roles: ["Mathematician"],
    photo: "bruno.pitrus.jpg",
    location: "Krakow",
    story:
      "Bruno has C++ programming experience, having previously interned at Techmo working on a natural language grammar parser. He studied computer science and mathematics at Jagiellonian University. His interests range from category theory and algebraic topology to computational complexity, and he believes that abstract algebra is the best approach for solving mathematical problems."
  },
  {
    name: "Konrad Deka",
    roles: ["Mathematician"],
    photo: "konrad.deka.jpg",
    location: "Krakow",
    story:
      "Konrad joined BEIT in 2021. He is currently pursuing his PhD in Mathematics at the Jagiellonian University in the area of dynamical systems and ergodic theory. He is also a C++ and Python programmer who deals with a variety of mathematics-related tasks."
  },
  {
    name: "Emil Żak",
    roles: ["Physicist"],
    education: [["PhD in theoretical molecular and optical physics", "University College London"]],
    photo: "emil.zak.jpg",
    location: "Krakow",
    story:
      "Emil got his PhD in theoretical molecular and optical physics at University College London, UK. Later he stayed as a post-doctoral fellow at Queen's University (Ontario, Canada) and more recently he was a research associate at the Deutsches Elektronen-Synchtrotron DESY in Hamburg, Germany. His research has been focused on designing new computational methods for the quantum dynamics of molecules. Now with BEIT he is developing algorithms for simulating quantum systems with analog and digital quantum computers."
  },
  {
    name: "Joanna Bednarczyk",
    roles: ["Accounting specialist"],
    photo: "joanna.bednarczyk.jpg",
    location: "Krakow",
    story:
      "Joanna holds degrees in finance and accounting from the Cracow University of Economics and the Warsaw School of Economics. In 2013, she completed an internship of several months in London as part of the Erasmus program, that allowed her to gain valuable international experience in the field of accounting and finance. She has further enhanced her expertise through numerous specialized courses and training programs in finance, accounting, and taxation, including advanced courses for Head of Accounting and Financial Director roles. With 15 years of professional experience, Joanna thrives in collaborative environments with top mathematicians and physicists, reflecting her strong affinity for science. Her passion for tackling challenges aligns perfectly with her role at BEIT, where she finds ample opportunities to excel."
  },
  {
    name: "Tom Ginsberg",
    roles: ["CTO - BEIT Canada", "Head of Quantum Error Correction"],
    photo: "tom.ginsberg.jpg",
    location: "Toronto",
    story:
      "Tom was a former BEIT intern in Krakow in summer 2019 while completing his undergraduate studies in Engineering Physics at the University of British Columbia. At the time he worked on quantum algorithms related to graph theory, quantum walks/simulation, and continuous variable quantum computing. After completing his MSc in Computer Science in 2022 at the University of Toronto on Machine Learning safety algorithms, he co-founded BEIT's new research headquarters in Toronto, Canada where he currently manages the technical team and business operations as well as working on fault tolerant quantum computing and quantum error correction."
  },
  {
    name: "Ákos Nagy",
    roles: ["Quantum Algorithms"],
    education: [["PhD in Mathematics", "Michigan State University"]],
    photo: "akos.nagy.jpg",
    location: "Toronto",
    story:
      "Ákos received his Ph.D. in Mathematics from Michigan State University and also holds Master’s degrees in Engineering Physics and in Mathematics, both from Budapest University of Technology. Before joining BEIT, he held a Visiting Assistant Professorship at the University of California, Santa Barbara, a William W. Elliott Assistant Research Professorship of Mathematics at Duke University, a Fields Postdoctoral Fellowship at the Fields Institute, and a Postdoctoral Fellowship at the University of Waterloo."
  },
  {
    name: "Hirsh Kamakari",
    roles: ["Quantum Simulation"],
    education: [["PhD in Physics", "California Institute of Technology"]],
    photo: "hirsh.kamakari.jpg",
    location: "Toronto",
    story:
      "Hirsh joined BEIT in May 2024 after earning his Ph.D. in Applied Physics from Caltech, where he specialized in quantum simulation algorithms for open quantum systems. His academic and practical experience includes internships at IBM Research, where he developed quantum machine learning and simulation algorithms, and hands-on experimental setups at the University of British Columbia and ETH Zurich. His diverse background also includes superconducting theory at the Max Planck Institute and work with particle decay data at TRIUMF. At BEIT, Hirsh applies his extensive knowledge of quantum mechanics and algorithm development to pioneer advancements in quantum simulation."
  },
  {
    name: "Michael Tarino",
    roles: ["Head of Sales", "Business Development Manager"],
    photo: "michael.tarino.jpg",
    location: "Washington, D.C.",
    story:
      "Michael joined BEIT in late 2023 and works in business development, focusing on building growth strategies, developing relationships with hardware providers, and sourcing commercial clients. He leverages his background in science and business to expand the application of quantum algorithms and quantum-inspired solutions for computational advantage. While pursuing a master's in physics from the Stevens Institute of Technology, Michael conducted research with Dr. Herman’s Quantum Alliance Initiative, exploring quantum technology's implications for national security and cybersecurity. Before this, he gained experience in big data analysis and financial services with American Express and UBS Investment Bank. He earned his undergraduate degree from the Wharton School of the University of Pennsylvania, where he interned with the Wharton Public Policy Initiative and a U.S. Congressional Office."
  },
  {
    name: "Michał Szczepanik",
    roles: ["Physicist"],
    photo: "michal.szczepanik.jpg",
    location: "Krakow",
    story:
      "Michał is an Applied Physics student at Gdańsk University of Technology. He joined BEIT in 2024, initially for a summer internship. Before that, he was also an intern at the Center For Theoretical Physics in Warsaw. His work at BEIT is focused on molecular calculations on quantum computers. Apart from that, he is also interested in various areas of physics and enjoys using knowledge from different fields to find novel solutions to complex problems."
  }
]

const emptyMember: Member = {
  name: "",
  roles: [],
  photo: "",
  location: "",
  story: ""
}

export default function Component() {
  const [selectedMember, setSelectedMember] = useState<Member>(emptyMember)

  const MemberCard = ({ member }: { member: Member }) => (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full text-left flex flex-col h-full"
          onClick={() => setSelectedMember(member)}
        >
          <Card className="flex flex-col h-full overflow-hidden">
            <CardContent className="p-0 flex-grow flex flex-col">
              <div className="aspect-[4/6] relative">
                <Image src={`/assets/images/team/${member.photo}`} alt={member.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.roles.join(", ")}</p>
                </div>
                <div className="flex flex-row space-x-2 text-sm text-muted-foreground mt-3 items-end">
                  <CiLocationOn className="size-3" />
                  <p className="translate-y-1">{member.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SheetTrigger>

      <SheetContent className="w-full">
        {selectedMember && (
          <>
            <SheetHeader>
              <SheetTitle>{selectedMember.name}</SheetTitle>
            </SheetHeader>
            <ScrollArea className="flex flex-col gap-4 w-full h-full mt-4">
              <p>{selectedMember.story}</p>
              <div className="aspect-[4/6] relative w-full mt-4 mb-4">
                <Image
                  src={`/assets/images/team/${selectedMember.photo}`}
                  alt={selectedMember.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </ScrollArea>
          </>
        )}
      </SheetContent>
    </Sheet>
  )

  return (
    <div className="container mx-auto px-[5vh] py-8">
      <div className="mb-4">
        <Cover className="text-3xl font-bold animate-fade-in">Our Team</Cover>
      </div>
      <p className="text-muted-foreground mb-6">
        Our team is composed of experts in quantum computing, mathematics, physics, software engineering, and R&D
        management. We are passionate about pushing the boundaries of quantum technology and developing innovative
        solutions for our clients.
      </p>
      <h2 className="text-2xl font-semibold mb-4 animate-fade-in">Founders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 items-stretch">
        {boardMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 animate-fade-in">Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
