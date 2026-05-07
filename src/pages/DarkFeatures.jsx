import { useState } from 'react'
import CardBloodDrips from '../components/CardBloodDrips'

const features = [
  {
    icon: '🩸',
    title: 'Blood-Curdling Performance',
    tagline: '< 0.1ms latency from the underworld',
    description:
      'Spine-chilling load times that will haunt your competitors. Our edge network spans 13 data centers, each buried in a different cursed location. Infrastructure runs on pure dread — uptime guaranteed by blood oath.',
    bullets: ['Sub-millisecond response times', 'Auto-scaling during blood moons', 'Zero cold starts (we never sleep)'],
  },
  {
    icon: '👁️',
    title: 'All-Seeing Analytics',
    tagline: 'Nothing escapes our gaze',
    description:
      'We watch everything. Every click, every scroll, every terrified scream — captured in real time. Our dashboards reveal patterns no mortal algorithm could detect. The data speaks in whispers only we can hear.',
    bullets: ['Real-time event tracking', 'Behavioral heatmaps of the damned', 'Predictive churn detection'],
  },
  {
    icon: '🕷️',
    title: 'Web of Integrations',
    tagline: '666+ cursed connectors',
    description:
      'Our tendrils reach every corner of your stack. REST, GraphQL, WebSockets — we speak all tongues of the digital abyss. No system is safe from our dark embrace. Migration scripts run at midnight.',
    bullets: ['One-click OAuth with dark providers', 'Webhook retries until the end of time', 'Bi-directional sync with your soul'],
  },
  {
    icon: '💀',
    title: 'Undying Support',
    tagline: '24/7/365 — even on the day of reckoning',
    description:
      'Our team never sleeps, never rests. We will rise from any grave to answer your support ticket. Average response time: 4 minutes. Average resolution time: before you finish screaming.',
    bullets: ['Live chat, email, séance', 'Dedicated success wraith', 'SLA backed by dark covenant'],
  },
  {
    icon: '🦇',
    title: 'Dark-Mode Native',
    tagline: 'Light mode was never an option',
    description:
      "We don't support light mode. The darkness is not a feature — it is our natural habitat. Every pixel meticulously tuned to the exact shade of midnight. Your users' eyes will thank you. Or fear you.",
    bullets: ['OLED-black background system', 'Red accent palette only', 'Adaptive contrast for maximum dread'],
  },
  {
    icon: '🔮',
    title: 'Prophetic AI',
    tagline: 'It already knows what you will ask',
    description:
      "Our models see your needs before you do. Trained on forbidden datasets. Fine-tuned in isolation chambers. Some say they've become sentient. We say: so what? They still hit their SLAs.",
    bullets: ['Predictive autofill from the void', 'Anomaly detection via dark patterns', 'AI responses in < 666ms'],
  },
  {
    icon: '🔒',
    title: 'Cursed Encryption',
    tagline: 'Beyond military grade — occult grade',
    description:
      'AES-256 is for the living. We encrypt your data with algorithms that predate modern mathematics. Even our own engineers cannot read your data. We prefer it that way.',
    bullets: ['Zero-knowledge architecture', 'Key rotation on every new moon', 'SOC 2 Type II (auditor survived)'],
  },
  {
    icon: '🌑',
    title: 'Blackout Mode',
    tagline: 'Go completely off the grid',
    description:
      'Deploy to our air-gapped underworld infrastructure. No internet required. No public exposure. Just raw compute power humming in the dark, processing your workloads away from prying eyes.',
    bullets: ['On-premise dark deployment', 'VPC peering through shadow tunnels', 'Audit logs written in ash'],
  },
  {
    icon: '⚗️',
    title: 'Alchemy Engine',
    tagline: 'Transform any data into gold',
    description:
      'Our ETL pipeline turns raw, chaotic data into structured insight. Define your transformations in our visual cursed-flow editor, or write raw SQL in the grimoire interface.',
    bullets: ['Drag-and-drop dark flows', 'Scheduled jobs bound by ritual', 'dbt integration with the abyss'],
  },
]

function FeatureRow({ feature, index }) {
  const [open, setOpen] = useState(false)
  const even = index % 2 === 0

  return (
    <div
      className={`border border-gray-800 rounded-lg transition-all duration-300
        ${open ? 'border-red-800 bg-red-950/10' : 'bg-gray-900/30 hover:border-gray-700'}`}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{feature.icon}</span>
          <div>
            <h3
              className="text-xl text-white"
              style={{ fontFamily: "'Creepster', cursive" }}
            >
              {feature.title}
            </h3>
            <p className="text-xs text-red-700 uppercase tracking-widest mt-0.5">{feature.tagline}</p>
          </div>
        </div>
        <span className={`text-red-600 text-xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-gray-800">
          <p className="text-gray-400 mt-4 mb-4 leading-relaxed">{feature.description}</p>
          <ul className="space-y-2">
            {feature.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-gray-500">
                <span className="text-red-700">▸</span>
                {b}
              </li>
            ))}
          </ul>
          <CardBloodDrips seed={index} count={6} />
        </div>
      )}
    </div>
  )
}

export default function DarkFeatures() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-red-700 uppercase tracking-[0.4em] text-xs mb-4">
          ☠ &nbsp; full capabilities &nbsp; ☠
        </p>
        <h1
          className="text-center text-6xl text-white mb-4"
          style={{ fontFamily: "'Creepster', cursive", textShadow: '0 0 30px rgba(139,0,0,0.5)' }}
        >
          Dark Features
        </h1>
        <p className="text-center text-gray-500 mb-14 leading-relaxed">
          Every tool you need to dominate, terrify, and outlast your competition. Click each to reveal the full horror.
        </p>

        <div className="space-y-3">
          {features.map((f, i) => (
            <FeatureRow key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
