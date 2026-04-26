/* ─── Tool Icons ──────────────────────────────────────────────── */

const icons = {
  Figma: ({ color }) => (
    <svg viewBox="0 0 38 57" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
    </svg>
  ),
  React: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.05" fill={color}/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke={color} strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke={color} strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke={color} strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  'Next.js': ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#000"/>
      <path d="M7 17V8l10 12h-2.5L7 11v6H7z" fill="white"/>
      <path d="M14.5 8h2.5v6l-2.5-3V8z" fill="white"/>
    </svg>
  ),
  Tailwind: ({ color }) => (
    <svg viewBox="0 0 54 33" width="24" height="14" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 16 40.5 16c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.328 33.692 0 27 0zM13.5 16.8C6.3 16.8 1.8 20.4 0 27.6c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.472 20.308 32.8 27 32.8c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 20.128 20.192 16.8 13.5 16.8z"
        fill={color}/>
    </svg>
  ),
  TypeScript: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill={color}/>
      <path d="M13.5 12.5H11v5H9.5v-5H7V11h6.5v1.5z" fill="white"/>
      <path d="M14 16.5c.3.2.8.4 1.3.4.6 0 .9-.25.9-.6 0-.35-.2-.55-.85-.8-.95-.35-1.55-.85-1.55-1.7 0-.95.8-1.65 2-1.65.6 0 1.05.12 1.35.28l-.25 1.02c-.2-.1-.6-.25-1.1-.25-.55 0-.8.25-.8.55 0 .35.23.5.95.8 1 .38 1.45.9 1.45 1.72 0 .93-.7 1.7-2.1 1.7-.6 0-1.15-.15-1.5-.35l.22-1.11z" fill="white"/>
    </svg>
  ),
  Vite: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="viteGrad" x1="6" y1="2" x2="18" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BD34FE"/>
          <stop offset="1" stopColor="#FF914D"/>
        </linearGradient>
      </defs>
      <path d="M21 3L12.5 20 9 13.5 15 3H21z" fill="url(#viteGrad)"/>
      <path d="M3 3l9.5 17L9 13.5 3 3z" fill="#BD34FE" opacity="0.7"/>
      <path d="M9 3l3.5 6.5L9 13.5 6 8 9 3z" fill="url(#viteGrad)" opacity="0.9"/>
    </svg>
  ),
  Framer: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 0h16v8H4zM4 8h8l8 8H4zM4 16h8v8z" fill={color}/>
    </svg>
  ),
  'Node.js': ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.5L2 7v10l10 5.5L22 17V7L12 1.5z" fill={color} opacity="0.15"/>
      <path d="M12 1.5L2 7v10l10 5.5L22 17V7L12 1.5z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <text x="12" y="14.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill={color} fontFamily="monospace">Node</text>
    </svg>
  ),
  Webflow: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 5L13 13.5 10.5 8 7 19 4.5 12H2M22 5l-4.5 14-3-7.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  WordPress: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M3 12c0 4.8 2.8 9 7 10.7L3.8 8.7A9 9 0 0 0 3 12z" fill={color} opacity="0.3"/>
      <path d="M16.8 11.4c.5-1 .7-1.7.7-2.4 0-1-.3-1.6-.6-2.1A9 9 0 0 1 21 12c0 3.3-1.8 6.2-4.4 7.8l3.1-9.4h-.9z" fill={color} opacity="0.3"/>
      <path d="M12 21a9 9 0 0 0 5.2-1.6l-3.3-9.1-2.8 8.2c.3 0 .6.1.9.1.3 0 .7 0 1-.1l-3.4 9A9 9 0 0 0 12 21z" fill={color} opacity="0.5"/>
      <path d="M9.5 7.5l-3.2 9.6A9 9 0 0 0 12 21l-2.5-13.5z" fill={color}/>
    </svg>
  ),
  Illustrator: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#300"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill={color} fontFamily="serif">Ai</text>
    </svg>
  ),
  Photoshop: ({ color }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#001e36"/>
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill={color} fontFamily="serif">Ps</text>
    </svg>
  ),
}

const row1 = [
  { name: 'Figma',       color: '#F24E1E' },
  { name: 'React',       color: '#61DAFB' },
  { name: 'Next.js',     color: '#ffffff' },
  { name: 'Tailwind',    color: '#38BDF8' },
  { name: 'TypeScript',  color: '#3178C6' },
  { name: 'Vite',        color: '#BD34FE' },
]

const row2 = [
  { name: 'Framer',      color: '#0055FF' },
  { name: 'Node.js',     color: '#68A063' },
  { name: 'Webflow',     color: '#4353FF' },
  { name: 'WordPress',   color: '#21759B' },
  { name: 'Illustrator', color: '#FF9A00' },
  { name: 'Photoshop',   color: '#31A8FF' },
]

function ToolCard({ name, color }) {
  const Icon = icons[name]
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm mx-3 select-none"
      style={{ minWidth: 'max-content' }}
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50 dark:bg-gray-900">
        {Icon ? <Icon color={color} /> : (
          <span className="font-extrabold text-xs" style={{ color }}>{name.slice(0, 2)}</span>
        )}
      </div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 pr-1">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />
      <div
        className="flex"
        style={{
          animation: `marquee${reverse ? 'Reverse' : ''} 28s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((tool, i) => (
          <ToolCard key={`${tool.name}-${i}`} {...tool} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="techstack" className="py-14 md:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 mb-12">
        <div className="text-center">
          <p data-aos="fade-up" className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Tools & Tech
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Dibangun dengan Tools Terbaik
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-md mx-auto text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            Tools pilihan industri untuk menghasilkan output yang luar biasa.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeReverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
