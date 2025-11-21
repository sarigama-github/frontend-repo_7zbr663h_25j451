import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden bg-[#050507]">
      {/* Aurora gradient field */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_10%_-10%,rgba(147,51,234,0.28),transparent),radial-gradient(1200px_700px_at_90%_110%,rgba(56,189,248,0.26),transparent)]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* Upgraded Spline 3D scene */}
      <div className="absolute inset-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/8XQxJX8tw1n5QkLr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Floating glow orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          className="absolute h-40 w-40 rounded-full bg-purple-600/20 blur-3xl -left-10 top-32"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute h-48 w-48 rounded-full bg-sky-500/20 blur-3xl -right-10 bottom-20"
          animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-sky-500" />
            Future-ready software partner
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-sky-200">
            Jarvis Studio
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            We build high-impact websites, apps, and brands with immersive 3D and motion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-sky-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition">Start a Project</a>
            <a href="#services" className="px-5 py-3 rounded-xl bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition">Explore Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
