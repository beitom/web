export type MediaLink = {
  type: "paper" | "video" | "slides"
  url: string
}

export type Publication = {
  title: string
  authors: string[]
  category: string
  date: string
  summary: string
  body: string
  tags?: string[]
  mediaLinks?: MediaLink[]
}

const publications: Publication[] = [
  {
    title: "Clifford circuits over non-cyclic abelian groups",
    authors: ["Milo Moses", "Jacek Horecki", "Konrad Deka", "Jan Tułowiecki"],
    tags: ["Clifford", "Abelian", "Topological"],
    category: "Publications",
    date: "2024-02-22",
    summary: "We present a generalized approach to Clifford group construction for any abelian group.",
    body: "We present a discussion of the generalized Clifford group over non-cyclic finite abelian groups. These Clifford groups appear naturally in the theory of topological error correction and abelian anyon models. We demonstrate a generalized Gottesman-Knill theorem, stating that every Clifford circuit can be efficiently classically simulated. We additionally provide circuits for a universal quantum computing scheme based on local two-qudit Clifford gates and magic states.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2402.13994"
      }
    ]
  },
  {
    title: "Anyons in a highly-entangled toric xy model",
    authors: ["Milo Moses", "Konrad Deka"],
    tags: ["Topological", "Anyons", "Toric"],
    category: "Publications",
    date: "2023-08-03",
    summary:
      "We show that in some sense the only obstruction for a toric $xy$ model to have a topological order is a $U(1)$ gauge action.",
    body: "While ostensibly coined in 1989 by Xiao-Gang Wen, the term “topological order” has been in use since 1972 by Kosterlitz–Thouless to describe the behavior of the classical $xy$ model. It has been noted that the $xy$ model does not have Wen’s topological order since it is also subject to a nontopological $U(1)$ gauge action. We show in a sense this is the only obstruction. That is, if the $xy$ model evolves quantumly into gauge invariant states then one recovers pure topological order. In fact, we show the quantum $xy$ topological order is an infinite lattice limit of Kitaev’s quantum double model applied to the group $G = \\mathbb{Z}$.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2308.01765"
      }
    ]
  },
  {
    title: "Quantum Boltzmann sampling – noisiness of some existing hardware approaches",
    authors: ["Witold Jarnicki"],
    tags: ["Sampling", "Boltzmann"],
    category: "Publications",
    date: "2018-12-10",
    summary:
      "Investigation of the distribution of samples produced by existing methods of sampling from a quantum Boltzmann distribution and comparison to purely theoretical values.",
    body: "Presented during the Q2B Conference in Mountain View, CA.",
    mediaLinks: [
      {
        type: "slides",
        url: "https://drive.google.com/uc?authuser=0&id=1aXcuv7vVsBQPLWT9N0aeQ9xpc9iz6s_U&export=download"
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=Tbeipxko1dY"
      }
    ]
  },
  {
    title: "Diagonal operator decomposition on restricted topologies via enumeration of quantum state subsets",
    authors: ["Jan Tułowiecki", "Łukasz Czerwiński", "Konrad Deka", "Jan Gwinner", "Witold Jarnicki", "Adam Szady"],
    category: "Publications",
    tags: ["Diagonal", "Operator", "Decomposition"],
    date: "2024-03-04",
    summary:
      "We analyze the CX implementation cost of generic diagonal operators, based on the target device topology.",
    body: "Various quantum algorithms require usage of arbitrary diagonal operators as subroutines. For their execution on a physical hardware, those operators must be first decomposed into the target device's native gateset and its qubit connectivity for entangling gates. Here, we assume that the allowed gates are exactly the CX gate and the parameterized phase gate. We introduce a framework for the analysis of CX-only circuits and provide solution constructions for several different device topologies (fully-connected, linear, and circular). We also introduce two additional variants of the problem to enable further reduction in the CX cost of implementation. Finally, we discuss how to exploit the framework for the decomposition of particular diagonal operators.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2403.02109"
      }
    ]
  },
  {
    title: "Fixed-point Grover Adaptive Search for QUBO Problems",
    tags: ["QUBO", "Grover", "Adaptive"],
    authors: ["Ákos Nagy"],
    category: "Publications",
    date: "2023-11-10",
    summary:
      "We develop and optimize a novel Fixed-point Grover Adaptive Search for QUBO Problems based on our oracle design and previous works of Li et al. to obtain better performance guarantees than Gilliam et al.",
    body: "We apply and study a Grover-type method for Quadratic Unconstrained Binary Optimization (QUBO) problems. We construct a marker oracle for such problems with circuit depth and gate count of $\\mathcal{O}(n^2)$. Our method has better performance guarantees than the Grover Adaptive Search of Gilliam et al.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2311.05592"
      }
    ]
  },
  {
    title: "Efficient unstructured search implementation on current ion-trap quantum processors",
    authors: ["Vladyslav Hlembotskyi", "Rafał Burczyński", "Witold Jarnicki", "Adam Szady", "Jan Tułowiecki"],
    category: "Publications",
    tags: ["Grover", "Ion-trap"],
    date: "2020-10-08",
    summary:
      "We present experimental results on running unstructured search in spaces defined by 4, 5, and 6 qubits on ion-trapped quantum processors.",
    body: "Our best circuits obtained average probabilities of measuring the marked element of 66%, 26%, and 6%, respectively. We demonstrate experimentally that fewer oracle calls are required compared to classical approaches, providing evidence of viability for Grover's theoretical results at these qubit counts.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2010.03841"
      }
    ]
  },
  {
    title: "Benchmarking 16-element quantum search algorithms on IBM quantum processors",
    authors: ["Jan Gwinner", "Marcin Briański", "Wojciech Burkot", "Łukasz Czerwiński", "Vladyslav Hlembotskyi"],
    category: "Publications",
    tags: ["Grover", "IBM"],
    date: "2020-06-13",
    summary: "We present experimental results on running 4-qubit unstructured search on IBM quantum processors.",
    body: "Our best attempt attained a probability of success around 24.5%. We explore the hardware limits, showing performance degradation, and conclude that it is crucial to design hardware-aware algorithms and include optimizations for NISQ devices.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2007.06539"
      }
    ]
  },
  {
    title: "Introducing Structure to Expedite Quantum Search",
    authors: [
      "Marcin Briański",
      "Jan Gwinner",
      "Vladyslav Hlembotskyi",
      "Witold Jarnicki",
      "Szymon Pliś",
      "Adam Szady"
    ],
    category: "Publications",
    tags: ["Grover", "Structure"],
    date: "2020-06-10",
    summary:
      "We present a novel quantum algorithm for solving the unstructured search problem with one marked element.",
    body: "Our algorithm allows generating quantum circuits that use asymptotically fewer additional quantum gates than Grover's algorithm and may be successfully executed on NISQ devices. The algorithm uses the *partial uncompute* technique to exploit oracle structure, enabling gate reductions for some combinatorial problems like Unique k-SAT.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2006.05828"
      }
    ]
  },
  {
    title: "Quantum Computing Algorithms for NISQ Era",
    authors: ["Wojciech Burkot"],
    tags: ["NISQ", "Algorithms"],
    category: "Publications",
    date: "2020-05-15",
    summary:
      "A talk about a family of algorithms specifically constructed for NISQ computers, promising much better results at currently available qubit counts and circuit depths.",
    body: "Presented during the Quantum Computing Meetup in Washington, DC.",
    mediaLinks: [
      {
        type: "slides",
        url: "https://docs.google.com/presentation/d/1mHGY4lPdLR5eK-iWHKfqIUptIP06KF61VEwvVSwhHmo/"
      }
    ]
  },
  {
    title: "Novel oracle constructions for quantum random access memory",
    tags: ["QRAM"],
    authors: ["Ákos Nagy"],
    category: "Publications",
    date: "2024-05-30",
    summary:
      "We present novel ways of designing quantum (random access) memory, also known as quantum dictionary encoders or data-access oracles.",
    body: "We present novel ways of designing quantum (random access) memory. More precisely, given a function $f : \\mathbb{F}_2^n \\rightarrow \\mathbb{F}_2^d$, we construct oracles, $\\mathcal{O}_f$, with the property $\\mathcal{O}_f |x\\rangle_n |0\\rangle_d = |x\\rangle_n |f(x)\\rangle_d$. Our constructions are based on the Walsh–Hadamard transform of $f$, viewed as an integer-valued function. The complexity of our method scales with the sparsity of the Walsh–Hadamard transform, yielding more favorable constructions for binary optimization problems and functions with low-degree Walsh–Hadamard Transforms. The design comes with a tunable amount of ancillas, allowing for depth-to-size trade-offs.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2405.20225"
      }
    ]
  },
  {
    title: "Creating rotational coherences in molecules aligned along the intermediate moment of inertia axis",
    authors: ["Emil Żak"],
    tags: ["Molecules", "Rotational", "Alignment"],
    category: "Publications",
    date: "2022-11-21",
    summary:
      "We present a theoretical method for coherently controlling the dynamics of rotating molecules with a tailored-pulse optical centrifuge.",
    body: "The proposed scheme allows for generating rotational states of asymmetric molecules with well-defined projections, enabling applications in photo-electron imaging experiments.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2211.10134"
      }
    ]
  },
  {
    title: "A short note on graphs with long Thomason's chains",
    authors: ["Marcin Briański", "Adam Szady"],
    tags: ["Graphs", "Hamiltonian", "Thomason"],
    category: "Publications",
    date: "2019-03-06",
    summary:
      "We present a family of 3-connected cubic planar Hamiltonian graphs with an exponential number of steps required by Thomason's algorithm.",
    body: "The base of the exponent is approximately 1.1812, which exceeds previous results in the area.",
    mediaLinks: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/1903.02515"
      }
    ]
  }
]
// sort by date
publications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
export default publications
