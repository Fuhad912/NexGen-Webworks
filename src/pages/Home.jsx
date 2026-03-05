import { Link } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { faqs, profile, skills, testimonials } from '../data/profile'
import { featuredProjectIds, projects } from '../data/projects'

const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean)

export default function Home() {
  const reduceMotion = useReducedMotion()

  const heroContainer = reduceMotion
    ? undefined
    : {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.14, delayChildren: 0.1 },
        },
      }

  const heroItem = reduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 34, rotateX: 10, rotateZ: -1.2, filter: 'blur(8px)' },
        show: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateZ: 0,
          filter: 'blur(0px)',
          transition: { type: 'spring', damping: 20, stiffness: 140, mass: 1 },
        },
      }

  return (
    <>
      <section className="border-b border-neutral-800">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <Motion.div
            variants={heroContainer}
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
            className="order-2 max-w-2xl lg:order-1"
          >
            <Motion.h1
              variants={heroItem}
              className="mt-4 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl"
            >
              {profile.headline}
            </Motion.h1>

            <Motion.p
              variants={heroItem}
              className="mt-3 text-sm font-extrabold tracking-[0.02em] text-neutral-100 sm:text-base"
            >
              {profile.shortAbout}
            </Motion.p>

            <Motion.p variants={heroItem} className="mt-5 text-base text-neutral-300 sm:text-xl">
              {profile.heroSubtitle}
            </Motion.p>

            <Motion.p variants={heroItem} className="mt-4 text-sm text-neutral-400 sm:text-base">
              {profile.role}
            </Motion.p>

            <Motion.div variants={heroItem} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <MagneticButton href="#contact" className="w-full sm:w-auto">
                Let&apos;s Work Together
              </MagneticButton>
              <Link to="/projects" className="btn-secondary w-full sm:w-auto">
                View all my projects
              </Link>
            </Motion.div>
          </Motion.div>

          <Motion.figure
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 24, rotateZ: -2 }}
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    scale: 1,
                    rotateZ: 0,
                    y: [0, -4, 0],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
                    scale: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
                    rotateZ: { duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
                    y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                  }
            }
            className="order-1 w-full justify-self-center lg:order-2 lg:justify-self-end"
          >
            <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-full border border-neutral-700 bg-neutral-900 p-2.5 shadow-[0_24px_54px_-32px_rgba(255,255,255,0.25)] sm:h-[280px] sm:w-[280px]">
              <img
                src={profile.avatar.src}
                alt={profile.avatar.alt}
                loading="eager"
                decoding="async"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </Motion.figure>
        </div>
      </section>

      <section className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              title="Featured Projects"
              description="A focused selection of five projects from my portfolio."
            />
          </Reveal>

          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} showTags={false} showLinks={false} />
            ))}
          </div>

          <Reveal className="mt-10 flex justify-start sm:mt-12">
            <Link to="/projects" className="btn-primary w-full sm:w-auto">
              View all my projects
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              title="My Skills"
              description="Practical services designed to launch, improve, and scale web products."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Reveal
                key={skill.title}
                delay={index * 0.04}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-neutral-100">{skill.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">{skill.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              title="What My Clients Say"
              description="Feedback from business owners and founders I have worked with."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.05}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-neutral-100">{item.name}</h3>
                <p className="mt-1 text-sm text-neutral-400">{item.role}</p>
                <p className="mt-4 text-sm leading-6 text-neutral-300">&quot;{item.quote}&quot;</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              title="Frequently Asked Questions"
              description="Clear answers to common questions about process, timelines, and support."
            />
          </Reveal>

          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.03}>
                <details className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                  <summary className="list-none cursor-pointer pr-8 text-base font-semibold text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
