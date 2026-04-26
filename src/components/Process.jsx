const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'Kami menggali dalam — memahami bisnis, target audiens, kompetitor, dan tujuan Anda. Tidak ada asumsi, hanya riset nyata.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    tags: ['Brief & Goals', 'Market Research', 'User Persona'],
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Dari wireframe ke prototipe interaktif. Setiap piksel dirancang dengan tujuan — estetis sekaligus fungsional.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    tags: ['Wireframing', 'UI Design', 'Prototyping'],
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Desain diwujudkan dengan kode yang bersih, cepat, dan scalable. Setiap komponen dibangun untuk performa optimal.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tags: ['Frontend Dev', 'QA Testing', 'Performance'],
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'Go live dengan percaya diri. Kami memastikan semua berjalan sempurna dan siap mendampingi Anda pasca-launch.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    tags: ['Deployment', 'Handover', 'Support'],
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p data-aos="fade-up" className="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Proses Kami
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl mx-auto text-gray-400 text-lg">
            Transparan, terstruktur, dan selalu selaras dengan tujuan bisnis Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-aos="fade-up"
                data-aos-delay={`${i * 120}`}
                className="relative group"
              >
                {/* Number circle */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-primary-500/50 flex flex-col items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary-500/10 mx-auto lg:mx-0">
                  <span className="text-primary-500 font-bold text-xs mb-1">{step.number}</span>
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow connector (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-2 text-primary-500/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="text-center mt-16">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5">
            Mulai Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
