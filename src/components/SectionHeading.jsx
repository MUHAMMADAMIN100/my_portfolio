import Reveal from "./Reveal"

/**
 * Consistent section heading: index marker + title + optional subtitle.
 */
export default function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-10 bg-zinc-700" />
      </div>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-xl text-zinc-400">{subtitle}</p>
      )}
    </Reveal>
  )
}
