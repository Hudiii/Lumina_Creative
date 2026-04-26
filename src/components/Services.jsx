const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h4M7 11h2" />
        <rect x="13" y="8" width="4" height="4" rx="1" />
      </svg>
    ),
    title: 'UI/UX Design',
    description:
      'Kami merancang antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan. Dari wireframe hingga prototipe interaktif yang siap dikembangkan.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design System'],
    delay: '0',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
    title: 'Web Development',
    description:
      'Membangun website dan aplikasi web yang cepat, aman, dan scalable menggunakan teknologi modern. Dari landing page hingga platform enterprise.',
    features: ['React / Next.js', 'Performance Optimized', 'SEO Ready', 'Mobile First'],
    delay: '150',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Digital Branding',
    description:
      'Membangun identitas brand yang kuat dan konsisten di seluruh platform digital. Logo, panduan brand, dan strategi komunikasi visual.',
    features: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Social Media Kit'],
    delay: '300',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            What We Do
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Our Services
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 text-lg"
          >
            Solusi digital lengkap untuk membawa bisnis Anda ke level berikutnya.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="group relative bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-500/10 dark:bg-primary-500/10 text-primary-500 dark:text-primary-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-primary-500 to-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
