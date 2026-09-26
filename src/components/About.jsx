import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <Reveal as="section" id="about" className="border-b border-line/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
              Über mich
            </h2>
            <p className="mt-6 max-w-prose font-body text-[15px] leading-relaxed text-muted">
              {profile.about}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default border border-line px-3 py-1.5 font-body text-xs text-muted hover:-translate-y-0.5 hover:border-brass hover:text-brass-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-line/60 sm:grid-cols-1">
            {profile.competencies.map((item, i) => (
              <div
                key={item.title}
                className={`border-l-2 border-l-transparent bg-panel/70 p-8 hover:border-l-brass hover:bg-panel ${
                  i !== 0 ? 'border-t border-t-line/60' : ''
                }`}
              >
                <h3 className="font-display text-xl text-parchment">{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
