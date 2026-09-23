'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Code2, Database, ShieldCheck, Smartphone, Users, LayoutDashboard, KeyRound } from 'lucide-react';

export default function Invitacion15Page() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 selection:bg-amber-400 selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de Retorno */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        {/* Encabezado Principal */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600"> Invitación Web XV</span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Plataforma web interactiva de experiencia móvil con enlaces únicos de acceso por invitado, panel de control administrativo para gestión de pases y confirmación de asistencia en tiempo real.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4">

           <a 
              href="https://xv-invitation-ten.vercel.app/invitation/daniel-ventura" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-amber-500 rounded-xl text-white hover:text-amber-400 transition-all font-medium text-sm shadow-lg"
            >
              <Smartphone className="w-5 h-5 text-amber-400" /> Ver Demo en Vivo (Vercel)
            </a>
            <a 
              href="https://github.com/dventura-dev/xv-invitation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-amber-500 rounded-xl text-white hover:text-amber-400 transition-all font-medium text-sm shadow-lg"
            >
              <GitBranch className="w-5 h-5 text-amber-400" /> Ver Repositorio Privado
            </a>
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="mb-16 bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-zinc-200">
            <Code2 className="w-5 h-5 text-amber-400" /> Stack y Tecnologías
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Node.js', 'Express', 'JavaScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Git & GitHub'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-mono text-amber-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Arquitectura y Características Clave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-yellow-400" /> Enlaces Únicos y Seguridad
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Cada familia o invitado recibe un enlace cifrado personalizado. El sistema valida el token en la base de datos de Supabase para renderizar la invitación con su nombre exacto y cantidad de pases reservados, manejando de forma limpia los accesos no válidos o restringidos[cite: 16].
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-amber-500" /> Panel de Control Administrativo
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Un dashboard completo para los organizadores que permite monitorear grupos totales, boletos confirmados y pendientes[cite: 12], agregar invitados, reiniciar accesos y enviar invitaciones directamente vía WhatsApp con un solo clic[cite: 12].
            </p>
          </div>
        </div>

        {/* Galería de Pantallas (Las capturas analizadas) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Módulos y Experiencia de Usuario
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pantalla 1: Panel de Control */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-amber-500/40 transition-all md:col-span-2">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-amber-400" />
                <h4 className="font-semibold text-white text-sm">1. Panel de Control Administrativo</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/xv-invitation/panel_control.png" 
                  alt="Panel de Control XV" 
                  className="max-h-[500px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Vista general de administración con métricas de grupos, boletos confirmados, enlaces pendientes y tabla interactiva de invitados con acciones de WhatsApp, edición y control de estados[cite: 12].
              </div>
            </div>

            {/* Pantalla 2: Invitación Móvil (Sobre con Sello) */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-yellow-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-yellow-400" />
                <h4 className="font-semibold text-white text-sm">2. Experiencia Móvil (Sobre Interactivo)</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/xv-invitation/invitacion_movil.jpg" 
                  alt="Invitación Móvil XV" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Diseño mobile-first que simula la apertura de un sobre de lujo con sello de cera, mostrando la personalización directa para la familia y los pases asignados[cite: 13].
              </div>
            </div>

            {/* Pantalla 3: Detalle del Evento */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-amber-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                <h4 className="font-semibold text-white text-sm">3. Detalle y Fecha del Evento</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/xv-invitation/detalle_evento.jpg" 
                  alt="Detalle Evento XV" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Pantalla principal con tipografía elegante, fecha, hora y mensaje de bienvenida personalizado según el token del invitado[cite: 14].
              </div>
            </div>

            {/* Pantalla 4: Confirmación (RSVP) */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-yellow-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                <h4 className="font-semibold text-white text-sm">4. Módulo de Confirmación (RSVP)</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/xv-invitation/confirmacion.jpg" 
                  alt="Confirmación Asistencia XV" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Interfaz interactiva para que el invitado confirme su asistencia con retroalimentación visual inmediata conectada al backend de Supabase[cite: 15].
              </div>
            </div>

            {/* Pantalla 5: Acceso Restringido */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-amber-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-amber-400" />
                <h4 className="font-semibold text-white text-sm">5. Manejo de Accesos y Enlaces Únicos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/xv-invitation/acceso_restringido.png" 
                  alt="Acceso Restringido XV" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Vista de seguridad ante enlaces no válidos o expirados, garantizando la privacidad y exclusividad del evento[cite: 16].
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}