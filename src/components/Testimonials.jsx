import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Rizky Aditya',
    role: 'CEO',
    company: 'Nuvora Fintech',
    avatar: 'RA',
    color: 'from-violet-500 to-purple-600',
    quote: 'Lumina Creative mengubah cara kami berkomunikasi dengan pengguna. Dashboard yang mereka rancang tidak hanya cantik, tapi konversi onboarding kami naik 40% dalam sebulan pertama.',
    stars: 5,
  },
  {
    name: 'Sarah Wijaya',
    role: 'Head of Marketing',
    company: 'Bloom Retail',
    avatar: 'SW',
    color: 'from-pink-500 to-rose-600',
    quote: 'Tim Lumina benar-benar memahami brand kami. Social media kit yang mereka buat langsung bisa kami pakai tanpa revisi berarti. Sangat profesional dan responsif!',
    stars: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Founder',
    company: 'Nexora Group',
    avatar: 'BS',
    color: 'from-blue-500 to-cyan-600',
    quote: 'Website korporat kami yang baru mendapat pujian dari investor dan mitra bisnis. PageSpeed 98, desain premium, dan selesai tepat waktu. Tidak ada yang kami sesali.',
    stars: 5,
  },
  {
    name: 'Dewi Lestari',
    role: 'Product Manager',
    company: 'Kita App',
    avatar: 'DL',
    color: 'from-emerald-500 to-teal-600',
    quote: 'Proses kolaborasi yang sangat menyenangkan. Mereka selalu terbuka dengan feedback dan hasilnya melampaui ekspektasi kami. Aplikasi mobile kami kini rating 4.9 di App Store.',
    stars: 5,
  },
  {
    name: 'Andi Firmansyah',
    role: 'Creative Director',
    company: 'Aurra Studio',
    avatar: 'AF',
    color: 'from-orange-500 to-amber-600',
    quote: 'Sebagai sesama praktisi kreatif, saya sangat demanding soal kualitas. Lumina tidak hanya memenuhi standar kami — mereka melampaui standar industri. Truly world-class work.',
    stars: 5,
  },
]

function StarIcon({ filled }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5"
      className="text-amber-400">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => {
    setPaused(true)
    setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setPaused(true)
    setActive(a => (a + 1) % testimonials.length)
  }

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Apa Kata Mereka?
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 text-lg">
            Kepercayaan mereka adalah pencapaian terbesar kami.
          </p>
        </div>

        {/* Main testimonial */}
        <div data-aos="fade-up" data-aos-delay="150" className="max-w-3xl mx-auto">
          <div className="relative bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-10 shadow-lg shadow-gray-200/50 dark:shadow-none">

            {/* Quote icon */}
            <div className="absolute -top-4 left-10 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < t.stars} />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role} · {t.company}</p>
              </div>

              {/* Nav arrows */}
              <div className="ml-auto flex gap-2">
                <button onClick={prev} aria-label="Previous"
                  className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button onClick={next} aria-label="Next"
                  className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); setActive(i) }}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-6 h-2 bg-primary-500'
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos strip */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-16 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-6">
            Dipercaya oleh
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 dark:opacity-20">
            {['Nuvora', 'Bloom', 'Nexora', 'Kita App', 'Aurra'].map(name => (
              <span key={name} className="text-gray-500 dark:text-gray-400 font-bold text-lg tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
