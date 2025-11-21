import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most websites launch in 2–6 weeks depending on scope. Larger apps or ecommerce builds can range from 6–12+ weeks.'
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes. We offer monthly care plans for updates, analytics, security, content changes, and optimization.'
  },
  {
    q: 'Can you work with my existing brand or team?',
    a: 'Absolutely. We can collaborate with your designers, developers, or stakeholders and use your brand guidelines.'
  },
  {
    q: 'What are your payment terms?',
    a: 'We typically do 50% to start, 25% mid-project, and 25% at launch. For enterprise, we can invoice per milestone.'
  },
]

export default function FAQ(){
  return (
    <section id="faqs" className="relative py-24 bg-[#07070A]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[48rem] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-600 to-sky-600" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQs</h2>
          <p className="mt-2 text-white/70">Answers to common questions about timelines, process, and collaboration.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-white font-medium">{f.q}</p>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
