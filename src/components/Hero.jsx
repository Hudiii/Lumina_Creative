import useCountUp from '../hooks/useCountUp'

function StatItem({ value, label }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{count || '0'}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary-500/10 dark:bg-primary-500/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary-400/10 dark:bg-primary-400/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(to right, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
          Creative Digital Agency
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight mb-5 text-gray-900 dark:text-white"
        >
          We Turn Ideas{' '}
          <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
            into Digital
          </span>
          <br />
          Reality.
        </h1>

        {/* Sub-headline */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-8"
        >
          Kami membantu brand Anda tampil lebih kuat di dunia digital — dari desain UI/UX
          yang intuitif hingga strategi branding yang berkesan.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400 font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-14 grid grid-cols-3 gap-4 max-w-xs sm:max-w-lg mx-auto"
        >
          <StatItem value="50+" label="Projects Done" />
          <StatItem value="30+" label="Happy Clients" />
          <StatItem value="5+" label="Years Experience" />
        </div>
      </div>

      {/* Scroll indicator — hide on small screens */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 dark:from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
