import { useEffect, useState } from 'react'
import { LuminaIcon } from './LuminaLogo'

export default function Preloader({ onDone }) {
  const [fade, setFade] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1800
    let animId
    const tick = (now) => {
      const pct = Math.min(((now - start) / duration) * 100, 100)
      setProgress(Math.floor(pct))
      if (pct < 100) animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)
    const t1 = setTimeout(() => setFade(true), 1800)
    const t2 = setTimeout(() => onDone(), 2300)
    return () => { cancelAnimationFrame(animId); clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`fixed inset-0 z-[200] bg-gray-950 flex flex-col items-center justify-center transition-opacity duration-500 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Logo mark */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-2xl bg-primary-500 flex items-center justify-center shadow-2xl shadow-primary-500/50">
          <LuminaIcon size={40} />
        </div>
        {/* Glow ring */}
        <div className="absolute -inset-2 rounded-3xl bg-primary-500/20 blur-xl" />
      </div>

      {/* Brand name */}
      <p className="text-white font-bold text-xl tracking-tight mb-8">
        <span className="text-primary-400">Lumina</span> Creative
      </p>

      {/* Progress bar */}
      <div className="w-40 h-0.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-gray-600 text-xs mt-3 tabular-nums">{progress}%</p>
    </div>
  )
}
