'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Code2, ExternalLink, MessageSquare, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-yellow-400">¿Tienes un proyecto enmente</span>?
          </h2>
          
          <p className="text-zinc-400 text-lg mb-6 max-w-xl mx-auto">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
          </p>

          {/* Teléfono de contacto visible */}
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full text-zinc-300 font-mono text-sm">
            <Phone className="w-4 h-4 text-lime-400" />
            <span>+503 7746-8115</span>
          </div>
          
          {/* Botones principales (Correo y WhatsApp) */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:danielantonioventuraramos41@gmail.com" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(163,230,53,0.4)] hover:shadow-[0_0_40px_rgba(163,230,53,0.6)] hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" /> Envíame un correo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://wa.me/50377468115?text=Hola%20Daniel,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-lime-400 text-zinc-200 hover:text-lime-400 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5 text-lime-400" /> Escríbeme al WhatsApp
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com/dventura-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-lime-400 hover:border-lime-400 hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-all duration-300 hover:-translate-y-1" aria-label="GitHub">
              <Code2 className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/dventura-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-lime-400 hover:border-lime-400 hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
              <ExternalLink className="w-6 h-6" />
            </a>
            <a href="mailto:danielantonioventuraramos41@gmail.com" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-lime-400 hover:border-lime-400 hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-all duration-300 hover:-translate-y-1" aria-label="Correo">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};