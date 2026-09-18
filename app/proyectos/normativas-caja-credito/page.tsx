'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, ExternalLink, Code2 } from 'lucide-react';

export default function ProyectoNormativas() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        <div className="mb-12">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Repositorio Institucional <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">Caja de Crédito</span>
          </motion.h1>
          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Plataforma empresarial de alta seguridad diseñada para centralizar, auditar y gestionar las normativas internas de la Caja de Crédito Izalco. Desarrollada bajo una arquitectura N-Capas, incluye control de versiones de documentos (vigente/derogada), bitácoras de auditoría estrictas y un despliegue en red local (Intranet) utilizando contenedores Docker.
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
            {['C#', '.NET 10', 'ASP.NET Core MVC', 'PostgreSQL', 'Docker', 'Entity Framework Core', 'BCrypt (Seguridad)', 'Arquitectura N-Capas'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm text-zinc-300">{tech}</span>
            ))}
          </div>
        </div>

        {/* Galería de 5 Fotos */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Interfaz y Arquitectura</h3>
          <div className="w-full h-[400px] md:h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">
            [Foto 1: Dashboard y Módulo de Autenticación]
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 2: Visor de PDF Integrado]</div>
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 3: Tabla de Auditoría y Bitácora]</div>
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 4: Gestión de Roles y Usuarios]</div>
            <div className="w-full h-[250px] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm">[Foto 5: Diagrama de Arquitectura / Docker]</div>
          </div>
        </div>
      </div>
    </main>
  );
}