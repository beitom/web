interface Address {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

interface AddressBook {
  [city: string]: Address
}

export const ADDRESSES: AddressBook = {
  Toronto: {
    streetAddress: "101 College Street, Suite H230-1",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M5G 1L7",
    addressCountry: "US"
  },
  Krakow: {
    streetAddress: "Mogilska 43",
    addressLocality: "Krakow",
    addressRegion: "",
    postalCode: "31-545",
    addressCountry: "PL"
  }
}

interface JobPosting {
  id: number
  title: string
  shortDescription: string
  longDescription: string
  responsibilities: string[]
  requirements: string[]
  city: string[]
  dateStart: string
  dateEnd: string
  employmentType: string
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Quantum Algorithms Researcher",
    shortDescription: "Drive quantum algorithm innovation at BEIT’s downtown Toronto research lab",
    longDescription:
      "BEIT is a quantum computing algorithms startup, founded by ex-Google engineers and directors, dedicated to reducing resource overheads and optimizing the interaction between physical quantum systems and their controlling algorithms. We're seeking a Quantum Algorithms Researcher to work in our Toronto office. You will theorize, develop, and implement innovative quantum algorithms, focusing on complex computational problems. Collaboration with an interdisciplinary team is key, and your expertise will help us advance quantum optimization, machine learning, and practical quantum applications.",
    responsibilities: [
      "Theorize and develop novel quantum algorithms",
      "Implement and test quantum algorithms in software",
      "Collaborate with experts in physics, mathematics, and computer science",
      "Translate theoretical quantum concepts into practical applications",
      "Conduct research in quantum optimization, machine learning, and algorithmic complexity",
      "Apply quantum algorithms to fields like cryptography, optimization, and simulation",
      "Document and publish research findings in peer-reviewed journals"
    ],
    requirements: [
      "MS/PhD in Quantum Computing, Physics, Mathematics, or related field",
      "Expertise in developing and implementing quantum algorithms",
      "Proficiency in Python and Qiskit for quantum software development",
      "Strong foundation in quantum theory and algorithm development",
      "Experience applying quantum algorithms to real-world problems",
      "Excellent written and oral communication skills in English",
      "Track record of research, with publications in peer-reviewed journals",
      "Familiarity with quantum hardware and current technological limitations",
      "Experience with interdisciplinary projects across physics, mathematics, and computer science",
      "Knowledge of patent application processes is a plus"
    ],
    city: ["Toronto", "Krakow"],
    dateStart: "2025-01-30",
    dateEnd: "2025-03-30",
    employmentType: "FULL_TIME"
  },
  {
    id: 2,
    title: "Quantum Error Correction Researcher",
    shortDescription: "Pioneer fault-tolerant quantum computing methods at BEIT's Toronto office",
    longDescription:
      "BEIT, a venture-backed quantum computing algorithms startup founded by ex-Google engineers and directors, is seeking a Quantum Error Correction Researcher in Toronto. Our mission is to optimize quantum error correction and fault-tolerant quantum computing. Join us to develop cutting-edge tools, such as our Optimizing Compiler for Quantum Error Correction, and bridge the gap between quantum hardware and software. Your work will involve designing and implementing error correction methods, performing experiments, and collaborating with a team of mathematicians, physicists, and computer scientists.",
    responsibilities: [
      "Develop and implement advanced quantum error correction tools",
      "Design and conduct experiments to test QEC methods",
      "Analyze experimental data and improve error correction strategies",
      "Collaborate with interdisciplinary teams in physics, mathematics, and computer science",
      "Optimize fault-tolerant gate implementations for various quantum codes",
      "Research non-planar codes, Quantum Low-Density Parity-Check (QLDPC) codes, and flag-based error correction",
      "Contribute to software solutions for efficient quantum resource estimation",
      "Document and publish research findings in peer-reviewed journals"
    ],
    requirements: [
      "MS/Ph.D. in Quantum Computing, Physics, Mathematics, or a related field",
      "Expertise in quantum error correction codes and fault-tolerant computing methods",
      "Proficiency in Python and experience in software development",
      "Experience with quantum hardware, circuit simulations, and noise models",
      "Strong communication skills in English and ability to work collaboratively",
      "Research publications in QEC are a plus",
      "Experience with patent applications is a plus"
    ],
    city: ["Toronto"],
    dateStart: "2025-02-01",
    dateEnd: "2025-04-01",
    employmentType: "FULL_TIME"
  },
  {
    id: 3,
    title: "Quantum Simulation Researcher",
    shortDescription: "Advance quantum simulation algorithms at BEIT's Toronto research lab",
    longDescription:
      "BEIT, a venture-backed quantum computing algorithms startup founded by ex-Google engineers and directors, is hiring a Quantum Simulation Researcher in Toronto. We focus on developing efficient, scalable quantum simulation algorithms for electronic structure problems and many-body quantum dynamics. As part of our team, you'll design and implement advanced quantum simulation methods, collaborate with experts in physics, mathematics, and computer science, and contribute to groundbreaking research that bridges the gap between hardware and software for quantum simulation.",
    responsibilities: [
      "Develop and implement advanced quantum simulation tools and methods",
      "Design and conduct experiments to validate quantum simulation techniques",
      "Analyze data from experiments to refine simulation strategies",
      "Collaborate with interdisciplinary teams to advance quantum simulation research",
      "Focus on electronic structure problems for ground and excited states",
      "Research quantum dynamics and scalable algorithm development",
      "Contribute to the development of efficient quantum simulations for material and chemical discovery",
      "Document and publish research findings in peer-reviewed journals"
    ],
    requirements: [
      "MS/Ph.D. in Quantum Computing, Physics, Mathematics, or a related field",
      "Expertise in quantum simulation, electronic structure, and quantum dynamics",
      "Proficiency in Python and software development",
      "Experience with quantum hardware and circuit simulations, including noise models",
      "Strong communication skills in English and ability to work collaboratively",
      "Research publications in quantum simulation are a plus",
      "Experience with patent applications is a plus"
    ],
    city: ["Toronto", "Krakow"],
    dateStart: "2025-02-05",
    dateEnd: "2025-04-05",
    employmentType: "FULL_TIME"
  },
  {
    id: 4,
    title: "Business Developer",
    shortDescription: "Drive business development and expand BEIT’s presence globally",
    longDescription:
      "BEIT, a quantum computing algorithms startup founded by ex-Google engineers and directors, is looking for a Business Developer to join our team. You will play a crucial role in growing our network, securing contracts, and promoting BEIT at quantum events worldwide. This role involves identifying grant opportunities, building an international team, and contributing to BEIT's strategic growth, with a focus on expanding our presence in the US and Canada. We offer competitive compensation, including a commission structure and stock options, with opportunities for ownership and leadership within the company.",
    responsibilities: [
      "Maintain and grow BEIT’s network of potential customers",
      "Secure paid contracts and business partnerships",
      "Search for grant opportunities and government projects in the US and Canada",
      "Participate in the hiring process and build an international team",
      "Represent BEIT at quantum industry events",
      "Promote BEIT and our work to a global audience"
    ],
    requirements: [
      "Proven experience in business development, sales, or a related field",
      "Strong networking and relationship-building skills",
      "Knowledge of quantum computing and technology markets is a plus",
      "Experience in securing contracts and working with government agencies",
      "Excellent communication and negotiation skills",
      "Ability to work independently and drive strategic initiatives",
      "Willingness to travel for conferences and events as needed"
    ],
    city: ["Toronto"],
    dateStart: "2024-11-18",
    dateEnd: "2025-04-18",
    employmentType: "FULL_TIME"
  }
]
