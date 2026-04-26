import { useState, useEffect, useRef } from 'react'

export default function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const numeric = parseInt(target.replace(/\D/g, ''), 10)
          const suffix = target.replace(/[0-9]/g, '')
          let start = 0
          const step = numeric / (duration / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= numeric) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start) + suffix)
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
