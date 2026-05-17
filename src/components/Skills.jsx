import { skills } from "../data/portfolioData"
import SectionHeading from "./SectionHeading"
import Reveal from "./Reveal"

const groups = [
  { key: "frontend", label: "Frontend", items: skills.frontend },
  { key: "backend", label: "Backend", items: skills.backend },
  { key: "tools", label: "Tools & Practices", items: skills.tools },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="02"
        title="Tech Stack"
        subtitle="The technologies I use to build and ship full-stack applications."
      />

      <div className="space-y-px overflow-hidden rounded-2xl border border-white/10">
        {groups.map((group, i) => (
          <Reveal key={group.key} delay={i * 0.08}>
            <div className="grid gap-4 bg-white/3 p-6 md:grid-cols-[180px_1fr] md:gap-8 md:p-8">
              <h3 className="font-mono text-sm text-zinc-300">
                <span className="text-accent">{`0${i + 1}`}</span> {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-1.5 font-mono text-sm text-zinc-300 transition-colors hover:border-accent/50 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
