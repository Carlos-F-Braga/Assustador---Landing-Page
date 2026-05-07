import { useMemo } from 'react'

export default function CardBloodDrips({ seed = 0, count = 7 }) {
  const drips = useMemo(() => {
    const step = 88 / (count - 1)
    return Array.from({ length: count }, (_, i) => {
      const s = (seed * 7 + i * 13) % 17
      return {
        x: 6 + i * step + (s % 4) - 2,
        h: 10 + (s * 6 % 22),
        w: 2 + (i % 2),
        ds: 5 + (s % 4),
        dur: 3.0 + (s % 5) * 0.4,
        delay: (i * 0.5 + (s % 3) * 0.3),
      }
    })
  }, [seed, count])

  return (
    <div
      className="relative w-full overflow-visible pointer-events-none"
      style={{ height: 1 }}
    >
      {drips.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: 0,
            width: d.ds + 4,
            marginLeft: -(d.ds + 4) / 2,
          }}
        >
          <div style={{
            width: d.w * 2,
            height: 4,
            background: '#5a0000',
            borderRadius: '0 0 4px 4px',
            margin: '0 auto',
          }} />
          <div style={{
            '--drip-h': `${d.h}px`,
            width: d.w,
            height: 0,
            background: 'linear-gradient(to bottom, #6b0000, #b01000)',
            borderRadius: '0 0 2px 2px',
            margin: '0 auto',
            animation: `drip-trail ${d.dur}s ${d.delay}s ease-in infinite`,
          }} />
          <div style={{
            width: d.ds,
            height: Math.round(d.ds * 1.3),
            background: '#a00e00',
            borderRadius: '50% 50% 56% 56% / 40% 40% 60% 60%',
            margin: '0 auto',
            marginTop: -1,
            animation: `drip-drop ${d.dur}s ${d.delay}s ease-in infinite`,
          }} />
        </div>
      ))}
    </div>
  )
}
