import { languages } from "../data/portfolioData"
import SectionHeading from "./SectionHeading"
import Reveal from "./Reveal"

export default function Languages() {
  return (
    <section id="languages" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading index="06" title="Languages" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {languages.map((lang, i) => (
          <Reveal key={lang.name} delay={i * 0.06}>
            <div className="rounded-xl border border-white/10 bg-white/3 p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-white">{lang.name}</h3>
                <span className="font-mono text-xs text-zinc-500">
                  {lang.level}
                </span>
              </div>

              {/* proficiency segments */}
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1 flex-1 rounded-full ${
                      idx < lang.score ? "bg-accent" : "bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
