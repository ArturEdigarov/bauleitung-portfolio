import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <Reveal as="footer" id="kontakt" className="py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
              Lassen Sie uns ins Gespräch kommen
            </h2>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-muted">
              Mit fundierter Erfahrung im gehobenen Wohnsegment stehe ich ab sofort für neue berufliche Möglichkeiten und spannende Positionen zur Verfügung.
            </p>
          </div>
          <div className="space-y-2 font-body text-sm">
            <a
              href={`mailto:${profile.contact.email}`}
              className="block text-parchment hover:text-brass-light"
            >
              {profile.contact.email}
            </a>
            <p className="text-muted">{profile.contact.phone}</p>
            <p className="text-muted">{profile.contact.city}</p>
          </div>
        </div>
        <p className="mt-16 border-t border-line/60 pt-6 font-body text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </Reveal>
  )
}
