import { motion, useReducedMotion } from "framer-motion"
import { personal } from "../data/portfolioData"
import { GithubIcon, MailIcon, ArrowUpRight } from "./Icons"

const keyTech = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const fade = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  })

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-28 pb-20"
    >
      <motion.p
        {...fade(0)}
        className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Available for work
      </motion.p>

      <motion.h1
        {...fade(0.08)}
        className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
      >
        {personal.firstName}
        <br />
        <span className="text-zinc-500">{personal.lastName}</span>
      </motion.h1>

      <motion.p
        {...fade(0.16)}
        className="mt-6 text-xl font-medium text-zinc-300 sm:text-2xl"
      >
        {personal.role}
      </motion.p>

      <motion.p
        {...fade(0.24)}
        className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400"
      >
        {personal.summary}
      </motion.p>

      <motion.div {...fade(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-accent-soft"
        >
          View projects
          <ArrowUpRight />
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
        >
          <MailIcon className="h-4 w-4" />
          Contact me
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-3 text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </motion.div>

      <motion.div
        {...fade(0.4)}
        className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">
          Core stack
        </span>
        {keyTech.map((tech) => (
          <span key={tech} className="font-mono text-sm text-zinc-400">
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
