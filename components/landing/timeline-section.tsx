import React from "react"
import { Timeline } from "@/components/ui/timeline"

function Hyperlink({ link, text }: { link: string; text: string }) {
  return (
    <a href={link} className="text-blue-500 hover:underline" target="_blank">
      {text}
    </a>
  )
}

export function BeitTimeline() {
  const data = [
    {
      title: "Founding",
      date: "Jan 2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
            BEIT was founded in 2017 in Krakow, Poland, by three experienced professionals with strong backgrounds in
            technology and academia. The founders had previously held important roles at major organizations such as
            Google, CERN, Motorola, and Allegro (Poland’s largest e-commerce platform). Their combined experiences
            covered areas critical to advanced computing, including quantum physics, algorithm development, and
            technical management. They also brought academic insights from their time as professors and researchers.
            This mix of industry knowledge and academic expertise provided a solid foundation for BEIT to innovate in
            the quantum computing field.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <img
                src="https://beit.tech/assets/images/team/paulina.mazurek.jpg"
                alt="Paulina Mazurek"
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
              <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Paulina Mazurek</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Co-founder, CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://beit.tech/assets/images/team/wojciech.burkot.jpg"
                alt="Wojciech Burkot"
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
              <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Wojciech Burkot</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Co-founder, Chief Physics Officer
                <br />
                PhD in Physics, Jagiellonian University
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://beit.tech/assets/images/team/witold.jarnicki.jpg"
                alt="Witold Jarnicki"
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
              <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Witold Jarnicki</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Co-founder, Chief Mathematics Officer
                <br />
                PhD in Mathematics, Jagiellonian University
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Creative Destruction Lab",
      date: "June 2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
            In 2019, BEIT successfully graduated from the
            <Hyperlink link="https://creativedestructionlab.com/companies/beit/" text=" Creative Destruction Lab's " />
            quantum stream, marking our early commitment to quantum innovation.
          </p>
        </div>
      )
    },
    {
      title: "Pre Seed",
      date: "Sept 2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
            We secured our pre-seed funding of
            <Hyperlink
              link="https://www.linkedin.com/pulse/beit-inc-raises-14m-seed-funding-paulina-mazurek/"
              text=" $1.4 million USD "
            />{" "}
            consortium led by <Hyperlink link="https://kindredcapital.vc/" text=" Kindred Capital " />, including{" "}
            <Hyperlink link={"https://mantaray.vc/"} text=" Manta Ray Ventures" />,{" "}
            <Hyperlink link="http://www.fireboltventures.com/" text=" Firebolt Ventures" />,
            <Hyperlink
              link="https://www.linkedin.com/in/charlessonghurst?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B4HlsDz%2BKR3yFaEOIgA%2FnNg%3D%3D"
              text=" Charles M. Songhurst "
            />{" "}
            and <Hyperlink link="http://linkedin.com/in/george-armoyan-87a9a4110" text=" George Armoyan" />. Our new
            investors are our CDL investors: <Hyperlink link="https://dcvc.com/" text=" Data Collective VC" />,{" "}
            <Hyperlink link="https://www.bloomberg.com/lp/beta/" text=" Bloomberg Beta " /> and{" "}
            <Hyperlink link="https://www.s28capital.com/" text="Spectrum28" />. The funds will be used to match the
            company’s EU grants of $2.6M USD in order to speed up the development of quantum algorithms, as well as to
            expand business development.
          </p>
        </div>
      )
    },
    {
      title: "Quantum Advantage Breakthrough",
      date: "Oct 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-lg mb-4">
            Achieved a <Hyperlink link="https://beit.tech/blog/honeywell-h0.html" text=" significant breakthrough " />{" "}
            in quantum advantage for unstructured search in high-dimensional spaces in partnership with the Honeywell
            Quantum Solutions team (now <Hyperlink link="https://www.quantinuum.com/" text=" Quantinuum" />
            ). This work showcased our Micro Diffuser algorithm's potential in harnessing quantum capabilities beyond
            traditional constraints.
          </p>

          <figure className="pl-4 mb-3 border p-3 rounded-lg">
            <blockquote className="text-lg italic font-semibold text-white">
              <p>
                " We look to enable users with the most capable quantum computing environment. We’re thrilled to see how
                BEIT has used our systems in ground breaking demonstrations of Grover’s algorithm and how they have
                leveraged Honeywell’s technology differentiators."
              </p>
            </blockquote>
            <figcaption className="flex items-center mt-3 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
                <cite className="pr-3 font-xs text-white">- Tony Uttley</cite>
                <span className="ps-2">(President of Honeywell Quantum Solutions)</span>
              </div>
            </figcaption>
          </figure>
        </div>
      )
    },
    {
      title: "European Innovation Council Grant",
      date: "March 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
            Secured a grant of
            <Hyperlink
              link="https://eic.ec.europa.eu/news/european-innovation-council-new-group-deep-tech-start-ups-receive-accelerator-investments-increase-2023-03-29_en"
              text=" €2.5 million from the European Innovation Council (EIC) "
            />
            for resource estimation and the pursuit of innovative approaches in quantum chemistry simulation, aimed at
            solving complex molecular properties for applications in battery design. BEIT has raised over $6.5m USD in
            non-diluting grants from European government programs.
          </p>
        </div>
      )
    },
    {
      title: "Seed Round",
      date: "June 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
            <Hyperlink
              link="https://www.linkedin.com/posts/tensor-ventures_%C4%8De%C5%A1i-pos%C3%ADlaj%C3%AD-pen%C3%ADze-do-budoucnosti-kvantov%C3%BDch-activity-7120038390305054720-S9Ip/?trk=public_profile_like_view"
              text="Raised $3.2 million USD in seed investment "
            />
            lead by
            <Hyperlink link="https://tensor.ventures/" text=" Tensor Ventures" />, accelerating our development and
            scaling of next-generation quantum computing solutions aimed at industrial and scientific challenges.
          </p>
        </div>
      )
    },
    {
      title: "Washington Office Opens",
      date: "Sept 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
            Marked our expansion into North America by opening a new office in Washington focused on business
            development and customer education.
          </p>
        </div>
      )
    },
    {
      title: "Toronto Office Opens",
      date: "Oct 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
            Continuing our expansion into North America with a{" "}
            <Hyperlink
              link="https://www.linkedin.com/feed/update/urn:li:activity:7201331530126819330/"
              text=" new office in Toronto"
            />
            , enhancing our global reach and operational capacity. The Toronto team is focusing on fault-tolerant
            quantum computing for quantum simulation.
          </p>
        </div>
      )
    }
  ]
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-200 font-sans text-center">Milestones</h1>
      <Timeline data={data} />
    </section>
  )
}
