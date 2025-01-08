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
  id: string
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
    title: "Quantum Algorithms Researcher",
    shortDescription: "Drive quantum algorithm innovation and optimization at BEIT.",
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
    title: "Quantum Error Correction Researcher",
    shortDescription:
      "Advance end-to-end fault-tolerant protocols and quantum compilation for scalable quantum computing.",
    longDescription:
      "BEIT, a venture-backed quantum computing startup focused on pioneering algorithms for next-generation quantum systems, is seeking a Quantum Error Correction Researcher to join our Toronto team. Our mission is to optimize fault-tolerant quantum computing by reducing overhead, improving fidelity, and addressing realistic noise models for modern quantum devices. In this role, you will focus on the research and development of end-to-end fault-tolerant protocols. Your contributions will form the backbone of our Quantum Error Correction Compiler, which translates logical-level circuits into physical implementations tailored for non-planar hardware geometries. Collaborate with a world-class team of physicists, mathematicians, and engineers to shape the future of error-corrected quantum computing.",
    responsibilities: [
      "Research and develop fault-tolerant quantum protocols to minimize overhead and enhance fidelity.",
      "Analyze and design error correction methods that address realistic noise models for current and emerging quantum hardware.",
      "Contribute to the development of a Quantum Error Correction Compiler that translates logical to physical circuits.",
      "Identify/Optimize fault-tolerant gates for diverse quantum error correction codes, including QLDPC codes.",
      "Perform experiments to validate and benchmark error correction strategies.",
      "Collaborate with interdisciplinary teams to integrate research outcomes into scalable software solutions.",
      "Document findings and publish in leading peer-reviewed journals."
    ],
    requirements: [
      "Ph.D. (or MS with equivalent experience) in Quantum Computing, Physics, Mathematics, or a related field.",
      "Deep expertise in quantum error correction codes, fault-tolerant computing methods, and resource-efficient circuit compilation.",
      "Proficiency in Python and familiarity with software development tools and practices.",
      "Experience with quantum circuit simulators, noise models, and hardware constraints.",
      "Strong understanding of logical-to-physical mapping of quantum circuits on non-planar hardware geometries.",
      "Ability to work independently and collaboratively in a fast-paced, research-driven environment.",
      "Proven track record of research contributions, demonstrated through publications or software tools."
    ],
    city: ["Toronto"],
    dateStart: "2025-01-01",
    dateEnd: "2025-12-31",
    employmentType: "FULL_TIME"
  },
  {
    title: "Quantum Simulation Researcher",
    shortDescription: "Advance quantum chemistry and simulation algorithms on quantum and classical computers.",
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
    dateStart: "2025-01-01",
    dateEnd: "2025-12-31",
    employmentType: "FULL_TIME"
  },
  {
    title: "Quantum Software Developer",
    shortDescription: "Bridge the gap between quantum computing theory and software development.",
    longDescription:
      "BEIT, a cutting-edge quantum computing company headquartered in Toronto, is seeking a Quantum Software Developer to join our dynamic team. Our mission is to push the boundaries of quantum technology by creating innovative algorithms and tools for optimization, molecular simulation, and fault-tolerant quantum computing. As a Quantum Software Developer, you'll work closely with researchers to translate groundbreaking theoretical concepts into robust, efficient software solutions. This role is ideal for individuals who thrive in interdisciplinary environments and are passionate about advancing quantum technologies from theory to application.",
    responsibilities: [
      "Collaborate with quantum researchers to translate theoretical ideas into efficient software implementations.",
      "Design, develop, and optimize software tools for quantum algorithms and applications.",
      "Develop robust testing frameworks to ensure software accuracy and performance.",
      "Implement and validate quantum-inspired algorithms on classical platforms.",
      "Work on circuit-level simulations, including noise models, to bridge software and hardware layers.",
      "Contribute to continuous integration pipelines for seamless software deployment.",
      "Document and present your work through clear, professional communication, including research publications or internal reports."
    ],
    requirements: [
      "B.Sc in Computer Science, Physics, Mathematics, or a related field (Master's or Ph.D. preferred).",
      "Proficiency in Python and familiarity with modern C++.",
      "Experience with software best practices, including unit testing, code reviews, and CI/CD pipelines.",
      "Ability to translate abstract algorithms into efficient and scalable code.",
      "Demonstrated understanding of quantum computing concepts, algorithms, or architectures.",
      "Familiarity with additional programming languages (e.g., JavaScript, HTML, CSS) is a plus.",
      "Exposure to machine learning is advantageous.",
      "Strong analytical skills and the ability to work on mathematically complex problems.",
      "Experience with quantum circuit simulators or emulators, including noise models.",
      "Proven ability to work independently in a fast-paced, research-driven environment.",
      "Public contributions to open-source projects (e.g., GitHub) or a portfolio of personal projects are a strong asset."
    ],
    city: ["Toronto"],
    dateStart: "2025-03-01",
    dateEnd: "2025-05-01",
    employmentType: "FULL_TIME"
  },
  {
    title: "Quantum Computing Intern (Toronto)",
    shortDescription: "Gain hands-on experience in cutting-edge quantum computing projects at BEIT's Toronto office.",
    longDescription:
      "BEIT, a leading quantum computing startup in Toronto, is offering a unique opportunity for highly motivated MSc or PhD students enrolled at Canadian universities to contribute to groundbreaking research in quantum error correction or quantum simulation. As a Quantum Research Intern, you will work on a specific project tailored to your expertise and interests, contributing directly to our mission of advancing scalable quantum technologies. This full-time internship offers hands-on experience in quantum research and development within a collaborative, interdisciplinary environment. The position is open for 4 to 8 months, with relocation to Toronto required during the internship period.",
    responsibilities: [
      "Collaborate with researchers to contribute to a focused project in quantum error correction or quantum simulation.",
      "Assist in developing and testing algorithms tailored for cutting-edge quantum hardware.",
      "Conduct experiments to validate and refine theoretical models.",
      "Document and present your findings in internal reports, team discussions and peer reviewed journals.",
      "Support the integration of research outcomes into software tools."
    ],
    requirements: [
      "Currently enrolled in an MSc or PhD program in Physics, Computer Science, Mathematics, Engineering, or a related field at a Canadian university.",
      "Foundational knowledge in quantum computing, with familiarity in either quantum error correction or quantum simulation being a strong asset.",
      "Proficiency in Python programming; familiarity with additional languages like C++ is a plus.",
      "Ability to understand and apply complex mathematical concepts in a computational setting.",
      "Strong communication skills and a willingness to collaborate with interdisciplinary teams.",
      "Self-motivated and able to work independently on research-oriented tasks.",
      "Availability to relocate to Toronto for a full-time internship lasting 4 to 8 months."
    ],
    city: ["Toronto"],
    dateStart: "2025-05-01",
    dateEnd: "2025-08-31",
    employmentType: "INTERNSHIP"
  },
  {
    title: "Quantum Computing Intern (Krakow)",
    shortDescription: "Join BEIT's Krakow team to contribute to innovative quantum computing projects.",
    longDescription:
      "BEIT, a leading quantum computing startup, is offering a hands-on research internship at our Krakow office. This opportunity is open to talented MSc or PhD students from around the world who are passionate about quantum computing and willing to relocate to Krakow for the duration of the internship. As a Quantum Research Intern, you will work on a focused project in either quantum error correction or quantum simulation, contributing directly to the development of scalable quantum technologies. This internship provides the chance to work in a dynamic, collaborative environment, bridging the gap between theory and application in quantum computing.",
    responsibilities: [
      "Collaborate with BEIT's research team on a targeted project in quantum error correction or quantum simulation.",
      "Develop, test, and optimize algorithms for cutting-edge quantum applications.",
      "Participate in experiments and simulations to validate theoretical concepts.",
      "Analyze results to refine methods and improve performance.",
      "Document research progress and present findings in internal reviews.",
      "Contribute to the integration of research results into practical software tools."
    ],
    requirements: [
      "Currently enrolled in an MSc or PhD program in Physics, Computer Science, Mathematics, Engineering, or a related field.",
      "Strong foundational knowledge in quantum computing, with experience in quantum error correction or quantum simulation preferred.",
      "Proficiency in Python programming; knowledge of additional languages like C++ is an advantage.",
      "Ability to translate abstract theoretical concepts into practical implementations.",
      "Excellent problem-solving skills and attention to detail.",
      "Willingness to relocate to Krakow and work full-time for 4 to 8 months.",
      "Strong communication skills and the ability to work effectively in a collaborative environment."
    ],
    city: ["Krakow"],
    dateStart: "2025-05-01",
    dateEnd: "2025-08-31",
    employmentType: "INTERNSHIP"
  }
].map(
  (job, index) =>
    ({
      ...job,
      id: job.title.replace(/\s+/g, "-").toLowerCase()
    }) as JobPosting
)

const archivedPosts: JobPosting[] = [
  {
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
].map(
  (job, index) =>
    ({
      ...job,
      id: job.title.replace(/\s+/g, "-").toLowerCase()
    }) as JobPosting
)
