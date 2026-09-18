'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image'; // Para optimizar las imágenes

export default function ProyectoAlfaGym() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de regreso */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Volver al portafolio
        </Link>

        {/* Cabecera del Proyecto */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            AlfaGym <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">System</span>
          </motion.h1>
          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Sistema integral desarrollado para la administración de gimnasios. Permite el control eficiente de membresías, registro de asistencia mediante validación rápida, y gestión de accesos, optimizando las operaciones diarias del establecimiento físico.
          </p>

          {/* Botones de Acción (GitHub y Demo) */}
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/tu-usuario/alfagym" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-lime-500 rounded-lg text-white hover:text-lime-400 transition-all">
             <GitBranch className="w-5 h-5" />
              Ver Repositorio
            </a>
            {/* Si tienes link en vivo o demo de video, déjalo. Si no, puedes borrar este 2do botón */}
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-lime-500 hover:bg-lime-400 rounded-lg text-black font-semibold transition-all">
              <ExternalLink className="w-5 h-5" />
              Ver Demo Funcional
            </a>
          </div>
        </div>

        {/* Herramientas Utilizadas */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" /> Stack Tecnológico
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Java SE', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'Figma (UI/UX)'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Galería de 5 Fotos (1 Principal + 4 Secundarias) */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Capturas de Pantalla & UI</h3>
          
          {/* Foto Principal (Dashboard / Login) */}
          <div className="w-full h-[400px] md:h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden relative group">
            {/* Reemplaza la ruta del src con la ruta real de tu imagen en la carpeta public/img/ */}
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
               [Imagen Principal: Dashboard General]
               {/* <Image src="/img/alfagym-1.png" alt="Dashboard" fill className="object-cover" /> */}
            </div>
          </div>

          {/* Grid de 4 Fotos Secundarias */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[2, 3, 4, 5].map((num) => (
              <div key={num} className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm">
                  [Captura {num}: Funcionalidad Secundaria]
                  {/* <Image src={`/img/alfagym-${num}.png`} alt={`Captura ${num}`} fill className="object-cover" /> */}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}