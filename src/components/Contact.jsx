import { personal } from "../data/portfolioData"
import { MailIcon, PhoneIcon, GithubIcon, ArrowUpRight } from "./Icons"
import SectionHeading from "./SectionHeading"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading index="07" title="Get in touch" />

      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-white/3 p-8 md:p-12">
          <h3 className="max-w-lg text-2xl font-semibold leading-snug text-white md:text-3xl">
            Have a project in mind, or a role to fill? Let's talk.
          </h3>
          <p className="mt-3 max-w-md text-zinc-400">
            I'm open to full-stack opportunities and freelance work. The fastest
            way to reach me is email.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${personal.email}`}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-4 transition-colors hover:border-accent/50"
            >
              <MailIcon className="h-5 w-5 text-accent" />
              <span className="min-w-0">
                <span className="block text-xs text-zinc-500">Email</span>
                <span className="block truncate text-sm text-zinc-200">
                  {personal.email}
                </span>
              </span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-4 transition-colors hover:border-accent/50"
            >
              <GithubIcon className="h-5 w-5 text-accent" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-zinc-500">GitHub</span>
                <span className="block truncate text-sm text-zinc-200">
                  @MUHAMMADAMIN100
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-accent" />
            </a>

            {personal.phone.map((number) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-4 transition-colors hover:border-accent/50"
              >
                <PhoneIcon className="h-5 w-5 text-accent" />
                <span>
                  <span className="block text-xs text-zinc-500">Phone</span>
                  <span className="block text-sm text-zinc-200">{number}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
