import { useParams, Link, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SmartImage from '../components/SmartImage'
import Reveal from '../components/Reveal'
import { cases } from '../data/cases'

export default function CaseDetail() {
  const { id } = useParams()
  const item = cases.find((c) => c.id === id)
  const index = cases.findIndex((c) => c.id === id)

  if (!item) return <Navigate to="/" replace />

  const prev = cases[(index - 1 + cases.length) % cases.length]
  const next = cases[(index + 1) % cases.length]

  return (
    <>
      <Navbar />
      <article className="pt-32 sm:pt-40">
        <Reveal as="div" className="mx-auto max-w-6xl px-6 sm:px-10">
          <p className="font-body text-sm text-brass-light">{item.category}</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium text-parchment sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-3 font-body text-sm text-muted">
            {item.location} · {item.year}
          </p>
        </Reveal>

        <Reveal as="div" className="mx-auto mt-10 max-w-6xl px-6 sm:px-10">
          <SmartImage
            src={item.coverImage}
            alt={item.title}
            className="h-[22rem] w-full object-cover sm:h-[34rem]"
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-6xl px-6 sm:px-10">
          <Reveal as="div" className="grid gap-12 lg:grid-cols-[1fr_0.6fr] lg:gap-20">
            <div>
              <h2 className="font-display text-2xl text-parchment">Über das Projekt</h2>
              <p className="mt-5 max-w-prose font-body text-[15px] leading-relaxed text-muted">
                {item.fullDescription}
              </p>
            </div>
            <div className="border-t border-line/60 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <h3 className="font-display text-lg text-parchment">Eckdaten</h3>
              <dl className="mt-5 space-y-4">
                {item.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between border-b border-line/60 pb-3 font-body text-sm hover:border-brass"
                  >
                    <dt className="text-muted">{spec.label}</dt>
                    <dd className="text-parchment">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {item.images?.length > 0 && (
            <Reveal as="div" className="mt-16 grid gap-4 sm:grid-cols-2">
              {item.images.map((src, i) => (
                <SmartImage
                  key={src + i}
                  src={src}
                  alt={`${item.title} — Foto ${i + 1}`}
                  className="h-72 w-full object-cover hover:scale-[1.02]"
                />
              ))}
            </Reveal>
          )}
        </div>

        <div className="mx-auto mt-20 max-w-6xl border-t border-line/60 px-6 py-8 sm:px-10">
          <div className="flex items-center justify-between font-body text-sm">
            <Link to={`/projekte/${prev.id}`} className="group flex items-center gap-1.5 text-muted hover:text-brass-light">
              <span className="group-hover:-translate-x-1">←</span> {prev.title}
            </Link>
            <Link to={`/projekte/${next.id}`} className="group flex items-center gap-1.5 text-muted hover:text-brass-light">
              {next.title} <span className="group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
