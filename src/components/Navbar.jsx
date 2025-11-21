import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#07070A]/70 backdrop-blur supports-[backdrop-filter]:bg-[#07070A]/60 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 via-fuchsia-500 to-sky-500 ring-1 ring-white/10 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition" />
          <span className="text-white font-semibold tracking-wide">Jarvis Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-white/80 hover:text-white transition">Services</a>
          <a href="#work" className="text-sm text-white/80 hover:text-white transition">Work</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
          <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition">Get a Quote</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white/80" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#07070A]/95">
          <div className="px-4 py-4 space-y-3">
            <a href="#services" className="block text-white/90" onClick={() => setOpen(false)}>Services</a>
            <a href="#work" className="block text-white/90" onClick={() => setOpen(false)}>Work</a>
            <a href="#contact" className="block text-white/90" onClick={() => setOpen(false)}>Contact</a>
            <a href="#contact" className="inline-flex mt-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-sky-600 text-white">Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
