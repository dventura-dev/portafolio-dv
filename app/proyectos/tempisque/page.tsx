'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Code2 } from 'lucide-react';

export default function TempisquePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        <div className="mb-12">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Tempisque <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">Comunidad</span>
          </motion.h1>
          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Aplicación móvil diseñada para alertar y gestionar reportes comunitarios sobre cortes de servicios públicos en tiempo real.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-lime-500 rounded-lg text-white hover:text-lime-400 transition-all">
              <GitBranch className="w-5 h-5" /> Ver Repositorio
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" /> Stack y Tecnologías
          </h3>
          <div className="flex flex-wrap gap-3">
            {['React Native', 'Expo', 'Firebase', 'Tailwind CSS'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm text-zinc-300">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}