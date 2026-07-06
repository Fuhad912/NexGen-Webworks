export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-neutral-300 sm:text-lg">{description}</p> : null}
    </div>
  )
}
