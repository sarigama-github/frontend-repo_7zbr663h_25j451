import { motion } from 'framer-motion'

export default function BrandAssets(){
  return (
    <section id="brand" className="relative py-20 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Brand & Assets</h2>
          <p className="mt-2 text-white/70">Drop in your logo, palette, and preferred typefaces — we’ll apply them site‑wide.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-medium">Logo</p>
            <div className="mt-4 aspect-[4/1] rounded-xl bg-gradient-to-br from-purple-900/40 via-fuchsia-900/20 to-sky-900/40 grid place-items-center text-white/70">Upload SVG/PNG</div>
          </motion.div>
          <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-medium">Colors</p>
            <div className="mt-4 flex items-center gap-3">
              {["#050507","#6D28D9","#0EA5E9","#F0E7FF"].map(c=> (
                <div key={c} className="h-10 w-10 rounded-lg border border-white/10" style={{background:c}} />
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-medium">Typography</p>
            <p className="mt-3 text-white/80 text-sm">We default to Inter/Geist. Share your preferred font for headings and body, and we’ll integrate it.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
