import { experience } from "../data/portfolioData"
import SectionHeading from "./SectionHeading"
import Reveal from "./Reveal"

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        title="Experience"
        subtitle="Where I've applied my skills on real projects."
      />

      <div className="relative border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.title + i} delay={i * 0.08}>
            <article className="relative pb-2">
              {/* timeline dot */}
              <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-zinc-950" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <span className="font-mono text-xs text-accent">{job.period}</span>
              </div>

              <p className="mt-1 text-sm text-zinc-400">
                {job.company} · {job.location}
              </p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {job.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
