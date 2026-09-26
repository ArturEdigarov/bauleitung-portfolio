import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Timeline() {
  return (
    <Reveal as="section" className="border-b border-line/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
          Werdegang
        </h2>

        <div className="mt-12 border-t border-line/60">
          {profile.timeline.map((item) => (
            <div
              key={item.period + item.title}
              className="group grid gap-2 border-b border-line/60 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <p className="font-body text-sm text-brass-light group-hover:translate-x-0.5">
                {item.period}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg text-parchment">{item.title}</h3>
                  <span className="font-body text-xs text-muted">{item.place}</span>
                </div>
                <p className="mt-1 max-w-prose font-body text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-parchment">Ausbildung</h3>
            <ul className="mt-5 space-y-5">
              {profile.education.map((ed) => (
                <li
                  key={ed.degree}
                  className="border-l border-line pl-4 hover:translate-x-0.5 hover:border-brass"
                >
                  <p className="font-body text-sm text-parchment">{ed.degree}</p>
                  <p className="mt-1 font-body text-xs text-muted">
                    {ed.school}, {ed.place}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl text-parchment">Sprachen</h3>
            <ul className="mt-5 space-y-3">
              {profile.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between border-b border-line/60 pb-3 font-body text-sm hover:border-brass"
                >
                  <span className="text-parchment">{lang.name}</span>
                  <span className="text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
