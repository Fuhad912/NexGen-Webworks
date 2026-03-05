export default function SectionHeading({ title, description }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-neutral-300 sm:text-lg">{description}</p> : null}
    </div>
  )
}
