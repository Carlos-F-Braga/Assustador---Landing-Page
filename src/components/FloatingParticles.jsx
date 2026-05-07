import { useState, useEffect } from 'react'

const SKULLS = ['💀', '👻', '🕷️', '🦇', '🕸️', '🩸']

export default function FloatingParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        symbol: SKULLS[i % SKULLS.length],
        style: {
          left: `${Math.random() * 95}%`,
          top: `${Math.random() * 90}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 3}s`,
          fontSize: `${1 + Math.random() * 1.5}rem`,
        },
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none pointer-events-none animate-float opacity-20"
          style={p.style}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
