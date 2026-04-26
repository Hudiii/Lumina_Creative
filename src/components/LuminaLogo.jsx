export function LuminaIcon({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Inner glow circle */}
      <circle cx="16" cy="16" r="5" fill="white" opacity="0.95"/>
      {/* 8 light rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 16 + 7 * Math.cos(rad)
        const y1 = 16 + 7 * Math.sin(rad)
        const x2 = 16 + (i % 2 === 0 ? 13 : 11) * Math.cos(rad)
        const y2 = 16 + (i % 2 === 0 ? 13 : 11) * Math.sin(rad)
        return (
          <line
            key={deg}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="white"
            strokeWidth={i % 2 === 0 ? 2 : 1.5}
            strokeLinecap="round"
            opacity={i % 2 === 0 ? 1 : 0.7}
          />
        )
      })}
    </svg>
  )
}

export function LuminaWordmark({ darkBg = false, className = '' }) {
  const textColor = darkBg ? 'text-white' : 'text-gray-900 dark:text-white'
  return (
    <span className={`inline-flex items-center gap-2 font-bold text-xl tracking-tight ${className}`}>
      <span className="w-8 h-8 rounded-xl bg-primary-500 flex items-center justify-center shadow-md shadow-primary-500/30 flex-shrink-0">
        <LuminaIcon size={20} />
      </span>
      <span>
        <span className="text-primary-500">Lumina</span>{' '}
        <span className={textColor}>Creative</span>
      </span>
    </span>
  )
}
