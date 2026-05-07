import { useState } from 'react'
import CardBloodDrips from '../components/CardBloodDrips'

const plans = [
  {
    name: 'Phantom',
    price: { monthly: 0, yearly: 0 },
    tagline: 'For the freshly damned',
    icon: '👻',
    color: 'border-gray-700',
    highlight: false,
    cta: 'Begin your haunting',
    features: [
      'Up to 3 cursed projects',
      '1,000 souls/month',
      'Community séance support',
      'Basic analytics (what we let you see)',
      'Dark mode only',
      '1 wraith per workspace',
    ],
    missing: ['Advanced AI prophecy', 'Custom rituals', 'Priority exorcism', 'On-premise deployment'],
  },
  {
    name: 'Specter',
    price: { monthly: 66, yearly: 49 },
    tagline: 'For those who have committed',
    icon: '💀',
    color: 'border-red-700',
    highlight: true,
    cta: 'Seal the pact',
    badge: 'Most Feared',
    features: [
      'Unlimited cursed projects',
      '100,000 souls/month',
      'Priority wraith support (< 4 min)',
      'Full analytics suite',
      'AI prophecy engine',
      'Custom ritual builder',
      '10 wraiths per workspace',
      'Webhook automation',
      'SSO with dark providers',
    ],
    missing: ['On-premise deployment', 'Custom SLA covenant'],
  },
  {
    name: 'Overlord',
    price: { monthly: 666, yearly: 499 },
    tagline: 'For those who rule empires of darkness',
    icon: '🔮',
    color: 'border-purple-900',
    highlight: false,
    cta: 'Claim your dominion',
    features: [
      'Everything in Specter',
      'Unlimited souls',
      'Dedicated success wraith',
      'On-premise dark deployment',
      'Custom SLA by blood covenant',
      'Air-gapped infrastructure',
      'Unlimited wraiths',
      'White-label cursed branding',
      'Advanced AI fine-tuning',
      'Quarterly ritual consultations',
    ],
    missing: [],
  },
]

function PlanCard({ plan, yearly }) {
  const price = yearly ? plan.price.yearly : plan.price.monthly
  const isFree = price === 0

  return (
    <div
      className={`relative flex flex-col border rounded-xl p-8 transition-all duration-300
        ${plan.highlight
          ? 'border-red-700 bg-red-950/20 shadow-[0_0_40px_rgba(139,0,0,0.3)] scale-105'
          : `${plan.color} bg-gray-900/40 hover:bg-gray-900/60`}`}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-800 text-white text-xs uppercase tracking-widest rounded-full border border-red-600">
          {plan.badge}
        </div>
      )}

      <div className="text-4xl mb-3">{plan.icon}</div>
      <h2
        className={`text-3xl mb-1 ${plan.highlight ? 'text-red-400' : 'text-white'}`}
        style={{ fontFamily: "'Creepster', cursive" }}
      >
        {plan.name}
      </h2>
      <p className="text-gray-500 text-sm mb-6">{plan.tagline}</p>

      <div className="mb-8">
        {isFree ? (
          <span
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "'Creepster', cursive" }}
          >
            Free
          </span>
        ) : (
          <div className="flex items-end gap-2">
            <span
              className="text-5xl font-bold text-white"
              style={{ fontFamily: "'Creepster', cursive" }}
            >
              ${price}
            </span>
            <span className="text-gray-500 mb-2 text-sm">/mo {yearly && <span className="text-green-700">billed yearly</span>}</span>
          </div>
        )}
        {yearly && !isFree && (
          <p className="text-green-800 text-xs mt-1 uppercase tracking-widest">
            Save ${(plan.price.monthly - plan.price.yearly) * 12}/yr
          </p>
        )}
      </div>

      <button
        className={`w-full py-3 rounded border text-sm uppercase tracking-widest font-semibold transition-all duration-200 mb-8
          ${plan.highlight
            ? 'bg-red-800 hover:bg-red-600 border-red-700 text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]'
            : 'bg-transparent hover:bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500'}`}
      >
        {plan.cta}
      </button>

      <ul className="space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
            <span className="text-red-600 mt-0.5 shrink-0">✓</span>
            {f}
          </li>
        ))}
        {plan.missing.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-gray-600 line-through">
            <span className="text-gray-700 mt-0.5 shrink-0">✗</span>
            {f}
          </li>
        ))}
      </ul>

      <CardBloodDrips seed={plan.name.length} count={8} />
    </div>
  )
}

export default function CursedPlans() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-red-700 uppercase tracking-[0.4em] text-xs mb-4">
          ☠ &nbsp; choose your damnation &nbsp; ☠
        </p>
        <h1
          className="text-center text-6xl text-white mb-4"
          style={{ fontFamily: "'Creepster', cursive", textShadow: '0 0 30px rgba(139,0,0,0.5)' }}
        >
          Cursed Plans
        </h1>
        <p className="text-center text-gray-500 mb-10 leading-relaxed">
          No hidden fees. Just a soul, willingly surrendered.
        </p>

        {/* billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm uppercase tracking-widest ${!yearly ? 'text-white' : 'text-gray-600'}`}>Monthly</span>
          <button
            onClick={() => setYearly((v) => !v)}
            className={`relative w-14 h-7 rounded-full border transition-all duration-300
              ${yearly ? 'bg-red-900 border-red-700' : 'bg-gray-800 border-gray-700'}`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300
                ${yearly ? 'left-8' : 'left-1'}`}
            />
          </button>
          <span className={`text-sm uppercase tracking-widest ${yearly ? 'text-white' : 'text-gray-600'}`}>
            Yearly
            <span className="ml-2 text-green-700 text-xs">(save ~25%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} />
          ))}
        </div>

        <p className="text-center text-gray-700 text-xs mt-12 uppercase tracking-widest">
          All plans include a 14-day free trial. No credit card required. One soul required.
        </p>
      </div>
    </section>
  )
}
