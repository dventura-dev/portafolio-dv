'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

const sections = [
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'educacion', label: 'Educación' },
  { id: 'contacto', label: 'Contacto' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre-mi');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition && (el.offsetTop + el.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-lime-500/10 shadow-[0_0_15px_rgba(163,230,53,0.1)]' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-lime-500/10 border border-lime-500/30 group-hover:border-lime-400 transition-colors">
            <Code2 className="w-6 h-6 text-lime-400 group-hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.8)] transition-all" />
          </div>
          <span className="font-mono font-bold text-xl text-white tracking-tight">DV<span className="text-lime-400">.dev</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <Link key={section.id} href={`/#${section.id}`} className="relative group">
              <span className={`text-sm font-medium transition-colors duration-300 ${activeSection === section.id ? 'text-lime-400' : 'text-zinc-400 group-hover:text-white'}`}>
                {section.label}
              </span>
              {activeSection === section.id && (
                <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime-400 shadow-[0_0_10px_#a3e635]" />
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <button className="md:hidden text-zinc-300 hover:text-lime-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-lime-500/20">
            <div className="flex flex-col p-6 gap-4">
              {sections.map((section) => (
                <Link key={section.id} href={`/#${section.id}`} onClick={() => setIsOpen(false)} className={`text-lg font-medium py-2 border-l-2 pl-4 transition-all ${activeSection === section.id ? 'border-lime-400 text-lime-400 bg-lime-400/5' : 'border-transparent text-zinc-400 hover:text-white'}`}>
                  {section.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};