import { personal } from "../data/portfolioData"
import { GithubIcon, MailIcon } from "./Icons"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-zinc-300">{personal.name}</p>
          <p className="mt-1 text-xs text-zinc-600">
            © {new Date().getFullYear()} · Built with React, Vite & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-white/10 p-2.5 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Send an email"
            className="rounded-lg border border-white/10 p-2.5 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href="#home"
            className="rounded-lg border border-white/10 px-3 py-2.5 text-xs text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
