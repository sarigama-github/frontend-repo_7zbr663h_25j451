import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In this version, we just simulate success
    setTimeout(() => setStatus('Thanks! We will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-20 bg-[#07070A]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[48rem] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-600 to-sky-600" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something bold</h2>
            <p className="mt-3 text-white/70">Tell us about your project and we’ll reply within 24 hours.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>• Deep black and onion purple, all the way</li>
              <li>• Fast response and clear communication</li>
              <li>• Fixed-price or hourly — your choice</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input required className="w-full rounded-lg bg-[#0B0B0E] text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-purple-500/50" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" required className="w-full rounded-lg bg-[#0B0B0E] text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-sky-500/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1">Project Type</label>
                <select className="w-full rounded-lg bg-[#0B0B0E] text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none">
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>Game</option>
                  <option>Software</option>
                  <option>Branding / Graphics</option>
                  <option>Video / Motion</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX</option>
                  <option>E-commerce</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1">Message</label>
                <textarea rows={4} className="w-full rounded-lg bg-[#0B0B0E] text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none" placeholder="Share a few details about your idea..." />
              </div>
            </div>
            <button className="mt-4 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-sky-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition">Send Message</button>
            {status && <p className="mt-3 text-sm text-white/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
