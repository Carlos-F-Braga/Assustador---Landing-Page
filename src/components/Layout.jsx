import { NavLink } from 'react-router-dom'
import FloatingParticles from './FloatingParticles'
import BloodDrips from './BloodDrips'

const navLinks = [
  { label: 'Cursed Plans', to: '/plans' },
  { label: 'Dark Features', to: '/features' },
  { label: 'Testimonials from the Void', to: '/testimonials' },
]

export default function Layout({ children }) {
  return (
    <div className="scanlines vignette min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <FloatingParticles />
      <BloodDrips />

      {/* background blood pools */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[15%] -left-32 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(100,0,0,0.18)' }} />
        <div className="absolute top-[55%] -right-24 w-80 h-80 rounded-full blur-[100px]" style={{ background: 'rgba(80,0,0,0.15)' }} />
        <div className="absolute top-[80%] left-[30%] w-[500px] h-64 rounded-full blur-[120px]" style={{ background: 'rgba(90,0,0,0.12)' }} />
        <div className="absolute top-[35%] left-[45%] w-72 h-72 rounded-full blur-[90px]" style={{ background: 'rgba(70,0,0,0.10)' }} />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-red-950/60">
        <NavLink
          to="/"
          className="text-2xl text-red-600 animate-flicker hover:text-red-400 transition-colors"
          style={{ fontFamily: "'Creepster', cursive", letterSpacing: '0.15em' }}
        >
          💀 ASSUSTADOR
        </NavLink>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'text-red-500 border-b border-red-700 pb-0.5'
                  : 'text-gray-500 hover:text-red-500 transition-colors duration-200'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button className="px-5 py-2 bg-red-900 hover:bg-red-700 text-white text-sm uppercase tracking-widest rounded border border-red-800 transition-all duration-200 hover:shadow-[0_0_12px_rgba(220,38,38,0.6)]">
          Enter if you dare
        </button>
      </nav>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-red-950/40 py-8 px-6 text-center text-gray-700 text-xs uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Assustador. All souls reserved. No refunds after possession.</p>
      </footer>
    </div>
  )
}
