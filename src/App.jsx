import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import BrandAssets from './components/BrandAssets'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Pricing />
      <FAQ />
      <BrandAssets />
      <Contact />
      <footer className="border-t border-white/10 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Jarvis Studio. All rights reserved.</p>
          <div className="text-white/60 text-sm">Made with passion for design and code.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
