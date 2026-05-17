import { projects } from "../data/portfolioData"
import SectionHeading from "./SectionHeading"
import Reveal from "./Reveal"

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="04"
        title="Selected Projects"
        subtitle="Full-stack applications built end to end — frontend, API and database."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-7 transition-colors hover:border-accent/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {project.type}
                </span>
                <span className="font-mono text-xs text-zinc-600">
                  {`0${i + 1}`}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <ul className="mt-5 grid gap-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-900/80 px-2.5 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
