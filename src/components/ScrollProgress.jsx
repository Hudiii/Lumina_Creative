import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setWidth(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[60] h-[2px] w-full bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400"
        style={{ width: `${width}%`, transition: 'width 0.05s linear' }}
      />
    </div>
  )
}
