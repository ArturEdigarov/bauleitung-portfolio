import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const [isDark, toggle] = useTheme()

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'}
      onClick={toggle}
      className="relative flex h-8 w-[3.75rem] shrink-0 items-center rounded-full border border-line bg-panel px-1 hover:border-brass"
    >
      <span
        className={`absolute h-6 w-6 rounded-full bg-brass shadow-sm ${
          isDark ? 'translate-x-[1.875rem]' : 'translate-x-0'
        }`}
        style={{ transitionProperty: 'transform', transitionDuration: '300ms' }}
      />
      <Sun className="relative z-10 h-3.5 w-3.5 text-parchment" strokeWidth={1.75} />
      <Moon className="relative z-10 ml-auto h-3.5 w-3.5 text-parchment" strokeWidth={1.75} />
    </button>
  )
}
