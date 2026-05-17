import { personal, highlights } from "../data/portfolioData"
import { MapPinIcon } from "./Icons"
import SectionHeading from "./SectionHeading"
import Reveal from "./Reveal"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="01"
        title="About"
        subtitle="A bit of context on how I work and what I bring to a team."
      />

      <div className="grid gap-12 md:grid-cols-3">
        <Reveal className="md:col-span-2 space-y-5 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-300">{personal.tagline}</p>
          <p>{personal.summary}</p>
          <p>
            I enjoy owning features from database schema to pixel-perfect UI —
            writing maintainable code, optimizing performance and shipping
            products that feel fast and reliable.
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-zinc-500">
            <MapPinIcon className="h-4 w-4" />
            {personal.location}
          </p>
        </Reveal>

        <div className="space-y-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="rounded-xl border border-white/10 bg-white/3 p-5">
                <h3 className="font-mono text-sm text-accent">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
