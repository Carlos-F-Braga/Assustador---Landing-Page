import { useState, useEffect } from 'react'

function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-4xl font-bold text-red-500 animate-flicker"
        style={{ fontFamily: "'Creepster', cursive" }}
      >
        {value}
      </span>
      <span className="text-gray-400 text-sm uppercase tracking-widest mt-1">{label}</span>
    </div>
  )
}

export default function Home() {
  const [typedText, setTypedText] = useState('')
  const headline = 'Welcome to the Darkness'

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setTypedText(headline.slice(0, i + 1))
      i++
      if (i === headline.length) clearInterval(id)
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <p className="text-red-700 uppercase tracking-[0.4em] text-xs mb-6 animate-fade-in">
          ☠ &nbsp; the most terrifying SaaS in existence &nbsp; ☠
        </p>

        <h1
          className="glitch text-6xl md:text-8xl text-white mb-6 leading-tight"
          data-text={typedText}
          style={{ fontFamily: "'Creepster', cursive", textShadow: '0 0 40px rgba(139,0,0,0.6)' }}
        >
          {typedText}
          <span className="animate-flicker">|</span>
        </h1>

        <p className="max-w-2xl text-gray-400 text-lg mb-10 animate-fade-in leading-relaxed">
          Your competitors are already afraid. Built for the brave, the damned, and anyone who
          refuses to ship boring products. Embrace the terror — embrace{' '}
          <span className="text-red-500">Assustador</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <button className="px-8 py-4 bg-red-800 hover:bg-red-600 text-white text-lg font-semibold rounded border border-red-700 transition-all duration-200 hover:shadow-[0_0_24px_rgba(220,38,38,0.7)] hover:scale-105 active:scale-95">
            🩸 Start your free nightmare
          </button>
          <button className="px-8 py-4 bg-transparent hover:bg-gray-900 text-gray-300 text-lg border border-gray-700 rounded transition-all duration-200 hover:border-gray-500">
            Watch a demo (if you can handle it)
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-gray-700 text-xs uppercase tracking-widest animate-bounce">
          <span>Scroll deeper</span>
          <span>↓</span>
        </div>
      </section>

      {/* stats */}
      <section className="border-y border-gray-900 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat value="666k+" label="Souls Captured" />
          <Stat value="99.9%" label="Uptime in Hell" />
          <Stat value="∞" label="Sleepless Nights" />
          <Stat value="0" label="Mercy Given" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center border-t border-gray-900">
        <h2
          className="text-5xl md:text-7xl text-red-600 mb-6 animate-flicker"
          style={{ fontFamily: "'Creepster', cursive" }}
        >
          Your fate is sealed.
        </h2>
        <p className="text-gray-500 mb-10 text-lg max-w-xl mx-auto">
          There is no going back. Join the thousands who have already surrendered to the dark.
        </p>
        <button className="px-10 py-5 bg-red-900 hover:bg-red-700 text-white text-xl font-bold rounded border border-red-700 transition-all duration-200 hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105 active:scale-95 blood-drip relative inline-block">
          💀 Surrender now — it's free
        </button>
      </section>
    </>
  )
}
