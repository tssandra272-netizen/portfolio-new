
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="absolute top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

        <a href="#home" className="text-2xl font-bold text-[#F97316]">
          LOGO.
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href='/about'
              className="text-[#252525] hover:text-[#F97316] transition"
            >
              {link}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:block bg-[#F97316] px-6 py-2 rounded text-white hover:bg-[#EA580C] transition">
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#F97316]"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-orange-100 p-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[#252525] hover:text-[#F97316] transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
