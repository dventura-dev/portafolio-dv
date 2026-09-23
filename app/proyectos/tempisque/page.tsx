'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Code2, FileText, Download, Smartphone, Bell, Calendar, ShieldCheck, Users } from 'lucide-react';

export default function TempisquePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 selection:bg-lime-500 selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de Retorno */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        {/* Encabezado Principal */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">Tempisque Comunidad</span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Aplicación móvil multiplataforma orientada a la ADESCO de Salcoatitán, diseñada para centralizar la comunicación comunitaria, la publicación de avisos y el reporte de incidencias en tiempo real.
          </p>

          {/* Botones de Acción (GitHub y Manual) */}
          <div className="flex flex-wrap gap-4">
           
            
            <a 
              href="/tempisque/manual-tempisque.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900/80 border border-zinc-700 hover:border-cyan-500 rounded-xl text-white hover:text-cyan-400 transition-all font-medium text-sm"
            >
              <FileText className="w-5 h-5 text-cyan-400" /> Ver Manual de Usuario (PDF)
            </a>

            <a 
              href="/tempisque/manual-tempisque.pdf" 
              download="Manual_Tempisque_Comunidad.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 rounded-xl text-cyan-400 transition-all font-medium text-sm"
            >
              <Download className="w-4 h-4" /> Descargar PDF
            </a>
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="mb-16 bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-zinc-200">
            <Code2 className="w-5 h-5 text-cyan-400" /> Stack y Tecnologías
          </h3>
          <div className="flex flex-wrap gap-3">
            {['React Native', 'Expo', 'Firebase', 'JavaScript', 'Tailwind CSS'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-mono text-lime-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* El Problema y la Solución */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-lime-400" /> Contexto y Enfoque
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              La información en comunidades rurales y urbanas suele dispersarse en chats informales o avisos impresos. Tempisque Comunidad centraliza la gestión operativa de la ADESCO de Salcoatitán, permitiendo una vía de comunicación directa, ordenada y eficiente con los habitantes.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" /> Arquitectura sin Carga de Imágenes
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Diseñado con un enfoque ágil y optimizado mediante Firebase, centrado puramente en la transmisión de texto estructurado, avisos prioritarios y control de estados de incidencias sin requerir almacenamiento pesado de archivos multimedia.
            </p>
          </div>
        </div>

        {/* Galería de Pantallas (Las 4 imágenes .jpg) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Interfaz y Módulos del Sistema
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pantalla 1: Panel Admin */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-lime-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Bell className="w-4 h-4 text-lime-400" />
                <h4 className="font-semibold text-white text-sm">1. Panel Administrativo (ADESCO)</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/tempisque/paneladmin.jpg" 
                  alt="Panel Administrativo Tempisque" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Vista de control directivo con contadores en tiempo real (usuarios notificados, avisos pendientes y alertas urgentes) y accesos directos para la creación de comunicados.
              </div>
            </div>

            {/* Pantalla 2: Crear Aviso */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-lime-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <h4 className="font-semibold text-white text-sm">2. Módulo de Creación de Avisos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/tempisque/crearaviso.jpg" 
                  alt="Crear Aviso Tempisque" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Formulario estructurado para clasificar avisos por categoría (Servicio de Agua, Electricidad o Eventos), especificando títulos, descripciones y selector de prioridad urgente.
              </div>
            </div>

            {/* Pantalla 3: Panel Usuario */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-lime-400" />
                <h4 className="font-semibold text-white text-sm">3. Vista del Habitante (Mi Comunidad)</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/tempisque/panelusuario.jpg" 
                  alt="Panel Usuario Tempisque" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Interfaz principal para los residentes de Salcoatitán, con filtros rápidos por categoría, historial de avisos recientes y opciones para reportar fallas comunitarias.
              </div>
            </div>

            {/* Pantalla 4: Próximos Eventos */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <h4 className="font-semibold text-white text-sm">4. Calendario y Próximos Eventos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/tempisque/proximoevento.jpg" 
                  alt="Próximos Eventos Tempisque" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Módulo de organización de actividades cívicas y comunitarias (asambleas, jornadas de limpieza) con detalle de horarios, ubicaciones y confirmación de asistencia.
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}