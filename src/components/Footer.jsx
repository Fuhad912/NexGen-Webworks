import { motion as Motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Footer() {
  const reduceMotion = useReducedMotion()
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-neutral-800 bg-neutral-950">
      <Motion.div
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={reduceMotion ? undefined : { duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
          Let&apos;s build something worth sharing.
        </h2>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <a href={`mailto:${profile.contact.email}`} className="btn-primary">
            {profile.contact.email}
          </a>
          <a href={profile.contact.github} target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
            LinkedIn
          </a>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-6 text-sm text-neutral-400">
          <p>
            {profile.footerNote} · © {year} {profile.name}
          </p>
        </div>
      </Motion.div>
    </footer>
  )
}
