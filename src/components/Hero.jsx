import { profile } from '../data/profile'
import SmartImage from './SmartImage'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <Reveal
      as="section"
      className="relative overflow-hidden border-b border-line/60 pt-28 sm:pt-36 lg:pt-40"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 sm:px-10 sm:pb-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-8 lg:pb-0">
        <div>
          <p className="font-body text-sm text-brass-light">{profile.location}</p>
          <h1 className="mt-4 font-display text-[2.75rem] font-medium leading-[1.02] text-parchment sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-lg text-muted sm:text-xl lg:text-2xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted">
            {profile.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#portfolio"
              className="border border-brass px-6 py-3 font-body text-sm text-parchment hover:-translate-y-0.5 hover:bg-brass hover:text-ink"
            >
              Projekte ansehen
            </a>
            <div className="font-display leading-none">
              <span className="text-3xl text-brass-light">{profile.heroStat.value}</span>
              <span className="ml-2 font-body text-xs text-muted">{profile.heroStat.label}</span>
            </div>
          </div>
        </div>

        <SmartImage
          src="/cases/face.png"
          alt={profile.name}
          label="Porträt / Projektfoto folgt"
          className="h-72 w-full object-cover lg:h-[26rem] rounded-lg border border-none"
        />
      </div>
    </Reveal>
  )
}
