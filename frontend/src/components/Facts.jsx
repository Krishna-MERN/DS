import { useEffect, useRef, useState } from "react"
import "../styles/Facts.css"

export default function Facts() {
  const sectionRef = useRef(null)
  const [start, setStart] = useState(false)

  const stats = [
    { label: "Projects Completed", value: 120 },
    { label: "Happy Clients", value: 85 },
    { label: "Skilled Experts", value: 20 },
    { label: "Years of Experience", value: 5 }
  ]

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="facts" ref={sectionRef}>
      <div className="facts-container">
        {stats.map((stat, index) => (
          <FactItem
            key={index}
            label={stat.label}
            value={stat.value}
            start={start}
          />
        ))}
      </div>
    </section>
  )
}

/* Single Counter */
function FactItem({ label, value, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let current = 0
    const increment = Math.ceil(value / 60)

    const interval = setInterval(() => {
      current += increment
      if (current >= value) {
        current = value
        clearInterval(interval)
      }
      setCount(current)
    }, 25)

    return () => clearInterval(interval)
  }, [start, value])

  return (
    <div className="fact-card">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  )
}
