import { cases } from '../data/cases'
import CaseCard from './CaseCard'
import Reveal from './Reveal'

export default function PortfolioGrid() {
  return (
    <Reveal as="section" id="portfolio" className="border-b border-line/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            Projekte
          </h2>
          <p className="hidden font-body text-sm text-muted sm:block">
            {/* {cases.length}  */}
            realisierte Objekte
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
