'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Code2 } from 'lucide-react';



export default function tempisque() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        <div className="mb-12">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Trabajos<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">Express</span>
          </motion.h1>
          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Marketplace digital diseñado para conectar clientes, empresas y profesionales independientes. Construido sobre una sólida separación de responsabilidades (EN, DAL, BL, UI), el sistema implementa dashboards dinámicos según el rol del usuario, asegurando el acceso mediante Cookies, encriptación SHA256 y manejo avanzado de Claims.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-lime-500 rounded-lg text-white hover:text-lime-400 transition-all">
              <GitBranch className="w-5 h-5" /> Ver Repositorio
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" /> Stack y Arquitectura
          </h3>
          <div className="flex flex-wrap gap-3">
            {['ASP.NET Core MVC', '.NET 10', 'SQL Server', 'Entity Framework Core', 'N-Capas', 'Seguridad SHA256', 'ClaimTypes.Role'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm text-zinc-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Capturas del Sistema</h3>
          <div className="w-full h-[400px] md:h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">[Foto 1: Interfaz Principal del Marketplace]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 2: Dashboard Dinámico (Vista Cliente)]</div>
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 3: Dashboard Dinámico (Vista Freelancer)]</div>
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 4: Gestión de Base de Datos SQL]</div>
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 5: Código de Controladores / BL]</div>
          </div>
        </div>
      </div>
    </main>



  );
}