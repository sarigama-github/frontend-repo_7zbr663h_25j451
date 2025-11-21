import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Aurora Commerce',
    tags: ['E‑commerce', 'Next.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Nebula UI Kit',
    tags: ['Design System', 'Figma'],
    image: 'https://images.unsplash.com/photo-1705600349541-def79541efae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBVSSUyMEtpdHxlbnwwfDB8fHwxNzYzNzI4OTY4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#'
  },
  {
    title: 'Pulse Analytics',
    tags: ['Dashboard', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Orbit Mobile',
    tags: ['iOS', 'Android', 'React Native'],
    image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1200&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Quantum Brand',
    tags: ['Branding', 'Motion'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Zenify App',
    tags: ['Wellness', 'Product'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    url: '#'
  },
]

export default function Showcase(){
  return (
    <section id="work" className="relative py-20 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent Work</h2>
          <p className="mt-2 text-white/70">A glimpse of quality, polish, and performance.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-white/90 font-medium">{p.title}</p>
                <p className="text-white/60 text-sm">{p.tags.join(' • ')}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
