import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'

export default function CaseCard({ item }) {
  return (
    <Link
      to={`/projekte/${item.id}`}
      className="group block border border-line/60 hover:-translate-y-1 hover:border-brass hover:shadow-[0_0_0_1px_rgb(var(--color-brass)_/_0.3)]"
    >
      <div className="overflow-hidden">
        <SmartImage
          src={item.coverImage}
          alt={item.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <p className="font-body text-xs text-brass-light">{item.category}</p>
          <h3 className="mt-2 font-display text-xl text-parchment">{item.title}</h3>
          <p className="mt-1 font-body text-xs text-muted">
            {item.location} · {item.year}
          </p>
        </div>
        <span className="mt-1 font-display text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-brass-light">
          ›
        </span>
      </div>
    </Link>
  )
}
