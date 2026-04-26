import { useEffect, useState, lazy, Suspense } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import useDarkMode from './hooks/useDarkMode'

const Portfolio = lazy(() => import('./components/Portfolio'))

function App() {
  const [darkMode, setDarkMode] = useDarkMode()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) {
      AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    }
  }, [loaded])

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      <div className={darkMode ? 'dark' : ''}>
        <div
          className={`bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.4s ease' }}
        >
          <ScrollProgress />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <About />
            <Services />
            <Process />
            <Suspense fallback={
              <div className="py-24 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
              </div>
            }>
              <Portfolio />
            </Suspense>
            <TechStack />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  )
}

export default App
