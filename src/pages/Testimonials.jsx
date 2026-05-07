import { useState } from 'react'
import CardBloodDrips from '../components/CardBloodDrips'

const testimonials = [
  {
    quote: "I haven't slept since we deployed Assustador. Production has never been more stable. These things are unrelated, I think.",
    author: 'Morticia V.',
    role: 'CTO, Darkness Inc.',
    avatar: '🧛',
    stars: 5,
    tag: 'Enterprise',
  },
  {
    quote: "Our conversion rate tripled. We don't know why. We've stopped asking. The quarterly review was... unsettling.",
    author: 'Count D.',
    role: 'Head of Growth, Shadowcorp',
    avatar: '🦇',
    stars: 5,
    tag: 'Growth',
  },
  {
    quote: "Migrated from our old stack in one weekend. The migration script ran at exactly 3am without being scheduled. We're choosing not to investigate.",
    author: 'Igor M.',
    role: 'Staff Engineer, Crypt Systems',
    avatar: '💀',
    stars: 5,
    tag: 'Engineering',
  },
  {
    quote: "Support responded before I finished typing my question. When I asked how, they said 'we know.' 10/10 would be haunted again.",
    author: 'Lilith K.',
    role: 'Product Manager, The Void Co.',
    avatar: '🕷️',
    stars: 5,
    tag: 'Support',
  },
  {
    quote: "The analytics dashboard showed me data from next quarter. I made decisions accordingly. They were correct. I do not feel in control of my own company.",
    author: 'Victor F.',
    role: 'CEO, Abyss Ventures',
    avatar: '🔮',
    stars: 5,
    tag: 'Enterprise',
  },
  {
    quote: "We tried to cancel our subscription. The cancel button doesn't exist. After three days we realized we didn't want to cancel anymore. Everything is fine.",
    author: 'Cassandra B.',
    role: 'COO, Grimoire Health',
    avatar: '🩸',
    stars: 5,
    tag: 'Growth',
  },
  {
    quote: "Our on-call incidents dropped by 94%. The remaining 6% are incidents that our on-call engineers refuse to describe. Metrics look great overall.",
    author: 'Damien H.',
    role: 'VP Engineering, Necro Cloud',
    avatar: '🕸️',
    stars: 5,
    tag: 'Engineering',
  },
  {
    quote: "I recommended Assustador to my CEO in a quarterly review. By the end of the meeting, he was the one recommending it to me. I don't remember how that happened.",
    author: 'Ophelia R.',
    role: 'Senior Architect, Shadow SaaS',
    avatar: '👁️',
    stars: 5,
    tag: 'Enterprise',
  },
]

const tags = ['All', 'Enterprise', 'Growth', 'Engineering', 'Support']

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-red-600 text-sm">★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="border border-gray-800 bg-gray-900/40 rounded-xl p-6 hover:border-red-900 hover:bg-gray-900/60 transition-all duration-300">
      <Stars count={t.stars} />
      <p className="text-gray-300 italic leading-relaxed mb-6">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{t.avatar}</span>
        <div>
          <p className="text-white text-sm font-semibold">{t.author}</p>
          <p className="text-gray-600 text-xs">{t.role}</p>
        </div>
        <span className="ml-auto text-xs uppercase tracking-widest text-red-900 border border-red-900/50 px-2 py-0.5 rounded">
          {t.tag}
        </span>
      </div>
      <CardBloodDrips seed={t.author.length} count={5} />
    </div>
  )
}

export default function Testimonials() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? testimonials
    : testimonials.filter((t) => t.tag === activeTag)

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-red-700 uppercase tracking-[0.4em] text-xs mb-4">
          ☠ &nbsp; they tried to leave. they stayed. &nbsp; ☠
        </p>
        <h1
          className="text-center text-6xl text-white mb-4"
          style={{ fontFamily: "'Creepster', cursive", textShadow: '0 0 30px rgba(139,0,0,0.5)' }}
        >
          Testimonials from the Void
        </h1>
        <p className="text-center text-gray-500 mb-10 leading-relaxed">
          Real words from real customers. All accounts are still active. They are all fine.
        </p>

        {/* filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded border text-xs uppercase tracking-widest transition-all duration-200
                ${activeTag === tag
                  ? 'border-red-700 bg-red-950/40 text-red-400'
                  : 'border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((t) => (
            <TestimonialCard key={t.author} t={t} />
          ))}
        </div>

        {/* bottom CTA */}
        <div className="mt-20 text-center border-t border-gray-900 pt-16">
          <h2
            className="text-4xl text-white mb-4"
            style={{ fontFamily: "'Creepster', cursive" }}
          >
            Join them.
          </h2>
          <p className="text-gray-500 mb-8">
            Thousands have already surrendered. Your turn is overdue.
          </p>
          <button className="px-8 py-4 bg-red-900 hover:bg-red-700 text-white font-semibold rounded border border-red-700 transition-all duration-200 hover:shadow-[0_0_24px_rgba(220,38,38,0.7)] hover:scale-105 active:scale-95">
            🩸 Start your free nightmare
          </button>
        </div>
      </div>
    </section>
  )
}
