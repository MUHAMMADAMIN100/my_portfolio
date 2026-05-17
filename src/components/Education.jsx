import { education } from "../data/portfolioData"
import SectionHeading from "./SectionHeading"
import Reveal from "./Reveal"

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading index="05" title="Education" />

      <Reveal>
        <article className="rounded-2xl border border-white/10 bg-white/3 p-7 md:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-semibold text-white">
              {education.school}
            </h3>
            <span className="font-mono text-xs text-accent">
              {education.date}
            </span>
          </div>

          <p className="mt-1 text-sm text-zinc-400">{education.location}</p>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400">
            {education.description}
          </p>
        </article>
      </Reveal>
    </section>
  )
}
