import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'Über mich' },
  { href: '#portfolio', label: 'Projekte' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-line/60 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg tracking-tight text-parchment hover:text-brass-light"
        >
          {profile.name}
        </Link>

        <div className="flex items-center gap-6">
          {isHome && (
            <nav className="hidden gap-8 font-body text-sm text-muted sm:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-parchment">
                  {l.label}
                </a>
              ))}
            </nav>
          )}

          {!isHome && (
            <Link to="/" className="font-body text-sm text-muted hover:text-parchment">
              ← Alle Projekte
            </Link>
          )}

          <ThemeToggle />

          {isHome && (
            <button
              type="button"
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
            >
              <span
                className={`block h-px w-5 bg-parchment ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`block h-px w-5 bg-parchment ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
              />
            </button>
          )}
        </div>
      </div>

      {isHome && open && (
        <nav className="flex flex-col gap-1 border-t border-line/60 bg-ink px-6 py-4 font-body text-sm sm:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-muted hover:text-parchment"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
