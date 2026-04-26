const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Kreatif & Inovatif',
    desc: 'Kami tidak mengejar tren — kami menciptakannya. Setiap solusi dirancang segar, unik, dan relevan untuk brand Anda.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Tepat Waktu',
    desc: 'Deadline bukan sekadar tanggal — ini komitmen kami. Proyek selesai sesuai jadwal tanpa mengorbankan kualitas.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Kolaboratif',
    desc: 'Kami bekerja sebagai ekstensi tim Anda — transparan, responsif, dan selalu selaras dengan visi bisnis Anda.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Data-Driven',
    desc: 'Keputusan desain dan strategi kami didukung data nyata — bukan asumsi. Hasil yang terukur, bukan sekadar estetika.',
  },
]

const stats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '30+', label: 'Klien Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '98%', label: 'Tingkat Kepuasan' },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">

        {/* Top: heading + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">

          {/* Left text */}
          <div>
            <p data-aos="fade-up" className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5">
              Kami membantu brand<br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                bicara lebih keras.
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Lumina Creative adalah agensi digital yang berdedikasi membangun pengalaman digital yang tidak hanya indah, tapi juga bekerja keras untuk bisnis Anda. Kami percaya bahwa desain terbaik adalah desain yang memecahkan masalah nyata.
            </p>
            <p data-aos="fade-up" data-aos-delay="250" className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Dari startup yang baru tumbuh hingga enterprise berskala nasional, kami telah membantu puluhan brand menemukan suara visual mereka dan memenangkan pasar digital.
            </p>
            <div data-aos="fade-up" data-aos-delay="300">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5">
                Kenali Kami Lebih Jauh
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: stat cards */}
          <div data-aos="fade-left" data-aos-delay="150" className="relative">
            {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {stats.map((stat, i) => (
                <div key={stat.label}
                  className={`bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 ${i === 1 ? 'mt-6' : ''} ${i === 3 ? 'mt-6' : ''}`}>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <div className="mt-3 w-8 h-1 rounded-full bg-primary-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Why Us values */}
        <div>
          <div className="text-center mb-10">
            <p data-aos="fade-up" className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-2">
              Why Choose Us
            </p>
            <h3 data-aos="fade-up" data-aos-delay="100" className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Apa yang membedakan kami
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-500/40 bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-900 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 dark:text-primary-400 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
