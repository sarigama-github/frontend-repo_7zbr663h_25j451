import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$999',
    blurb: 'Perfect for early ideas and quick launches',
    features: [
      'Single-page or 3–5 sections',
      'Custom design in your brand style',
      'Basic animations + smooth scrolling',
      'Mobile responsive & SEO-ready',
      'Launch support',
    ],
    cta: 'Get Starter',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$2,999',
    blurb: 'End-to-end build with advanced visuals',
    features: [
      'Multi-page website or app screens',
      '3D/interactive hero or motion graphics',
      'Component library & CMS-ready',
      'Performance optimization',
      'Priority support',
    ],
    cta: 'Start Professional',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Scalable solutions for complex products',
    features: [
      'Custom software or e‑commerce',
      'API integrations & dashboards',
      'Design systems & documentation',
      'Ongoing optimization sprints',
      'Dedicated success manager',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
]

export default function Pricing(){
  return (
    <section id="pricing" className="relative py-24 bg-[#050507]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/4 h-80 w-[40rem] rounded-full blur-3xl opacity-25 bg-gradient-to-r from-purple-600 to-sky-600" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-[40rem] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that fits your scope. We can also tailor a custom package to your goals.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-purple-400/30' : 'border-white/10'} bg-white/5 p-6 backdrop-blur overflow-hidden`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-purple-600/30 to-sky-600/30 blur-2xl" />
              {t.highlight && (
                <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 to-sky-600 text-white/95">Most popular</span>
              )}
              <h3 className="text-white text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-white/70 text-sm">{t.blurb}</p>
              <p className="mt-5 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-sky-200">{t.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {t.features.map(f => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-sky-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-sky-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition">
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
