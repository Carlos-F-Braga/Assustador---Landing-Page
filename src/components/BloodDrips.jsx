import { useMemo } from 'react'

const DRIP_DATA = [
  { x: 2,  h: 55,  w: 3, ds: 8,  dur: 4.2, delay: 0   },
  { x: 7,  h: 90,  w: 2, ds: 6,  dur: 3.5, delay: 1.1 },
  { x: 13, h: 40,  w: 4, ds: 10, dur: 5.0, delay: 0.4 },
  { x: 19, h: 75,  w: 2, ds: 7,  dur: 4.8, delay: 2.3 },
  { x: 25, h: 110, w: 3, ds: 9,  dur: 3.8, delay: 0.8 },
  { x: 31, h: 50,  w: 2, ds: 6,  dur: 4.5, delay: 1.7 },
  { x: 38, h: 85,  w: 4, ds: 11, dur: 3.2, delay: 0.2 },
  { x: 44, h: 60,  w: 2, ds: 7,  dur: 5.2, delay: 2.9 },
  { x: 50, h: 130, w: 3, ds: 10, dur: 4.0, delay: 0.6 },
  { x: 56, h: 45,  w: 2, ds: 6,  dur: 3.7, delay: 1.4 },
  { x: 63, h: 95,  w: 4, ds: 12, dur: 4.9, delay: 0.0 },
  { x: 69, h: 65,  w: 2, ds: 7,  dur: 3.4, delay: 2.1 },
  { x: 75, h: 80,  w: 3, ds: 9,  dur: 5.1, delay: 0.9 },
  { x: 82, h: 50,  w: 2, ds: 6,  dur: 4.3, delay: 1.6 },
  { x: 88, h: 105, w: 4, ds: 11, dur: 3.6, delay: 0.3 },
  { x: 94, h: 70,  w: 2, ds: 8,  dur: 4.7, delay: 2.5 },
]

export default function BloodDrips() {
  return (
    <div className="fixed top-0 left-0 right-0 pointer-events-none z-30 overflow-visible">
      {DRIP_DATA.map((d, i) => (
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
          {/* source blob stuck to top */}
          <div style={{
            width: d.w * 2.5,
            height: 6,
            background: '#5a0000',
            borderRadius: '0 0 6px 6px',
            margin: '0 auto',
          }} />
          {/* trail grows downward */}
          <div style={{
            '--drip-h': `${d.h}px`,
            width: d.w,
            height: 0,
            background: `linear-gradient(to bottom, #6b0000, #c01000)`,
            borderRadius: '0 0 3px 3px',
            margin: '0 auto',
            animation: `drip-trail ${d.dur}s ${d.delay}s ease-in infinite`,
          }} />
          {/* drop at tip of trail, falls off */}
          <div style={{
            width: d.ds,
            height: Math.round(d.ds * 1.35),
            background: '#b00e00',
            borderRadius: '50% 50% 56% 56% / 40% 40% 60% 60%',
            margin: '0 auto',
            marginTop: -2,
            animation: `drip-drop ${d.dur}s ${d.delay}s ease-in infinite`,
          }} />
        </div>
      ))}
    </div>
  )
}
