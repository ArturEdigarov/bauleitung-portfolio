import { useState } from 'react'

// Показывает фото, если оно физически существует в /public.
// Если файла ещё нет (ты пока не добавил фото), рисует декоративную
// заглушку в стиле сайта — вместо сломанной иконки картинки.
export default function SmartImage({ src, alt, className = '', label }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(var(--ph-1))] via-[rgb(var(--ph-2))] to-[rgb(var(--ph-3))] ${className}`}
      >
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(135deg,transparent_48%,rgb(var(--color-brass))_49%,rgb(var(--color-brass))_51%,transparent_52%)] [background-size:22px_22px]" />
        <span className="relative font-display text-sm tracking-wide text-muted">
          {label || 'Foto folgt'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  )
}
