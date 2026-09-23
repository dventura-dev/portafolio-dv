'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Code2, Database, ShieldCheck, Smartphone, Users, QrCode, Wrench, Clock, Activity } from 'lucide-react';

export default function MotoCarePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 selection:bg-orange-500 selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de Retorno */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        {/* Encabezado Principal */}
        <div className="mb-12">
          <div className="inline-block font-mono text-xs text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full mb-4">
            🚧 Proyecto en Fase de Desarrollo Activo
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Moto<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Care</span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Sistema móvil integral para el registro, control de mantenimientos e historial técnico de motocicletas, diseñado con una experiencia de usuario nativa y respaldado por una arquitectura de API REST y base de datos relacional.
          </p>

          {/* Badge de Estado / Sin GitHub */}
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 font-medium text-sm">
              <Activity className="w-5 h-5 text-orange-400" /> App Móvil Multi-rol + API Backend
            </span>
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="mb-16 bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-zinc-200">
            <Code2 className="w-5 h-5 text-orange-400" /> Stack Tecnológico y Arquitectura
          </h3>
          <div className="flex flex-wrap gap-3">
            {['C# / Java', 'API REST', 'SQL Server', 'DBML v3.1', 'App Móvil UX/UI', 'Arquitectura por Capas'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-mono text-orange-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Enfoque y Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-400" /> Gestión Multi-rol (Cliente y Mecánico)
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              La plataforma unifica en una sola aplicación móvil accesos diferenciados para <strong className="text-zinc-200">Clientes/Bikers</strong> (seguimiento de sus motos, kilometraje, próximos mantenimientos) y <strong className="text-zinc-200">Mecánicos/Talleres</strong> (diagnósticos técnicos, control de servicios y fichas de taller).
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <QrCode className="w-5 h-5 text-amber-400" /> Identificación por Código QR
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Cada motocicleta cuenta con un identificador QR asociado para agilizar el reconocimiento en talleres mecánicos y consultar de forma inmediata su historial técnico oficial en la plataforma.
            </p>
          </div>
        </div>

        {/* Galería de Wireframes (Las 3 imágenes .jpg) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Prototipado y Wireframes de la App Móvil
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Wireframe 1: Login Multi-rol */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-orange-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <h4 className="font-semibold text-white text-sm">1. Login con Selector de Rol</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/motocare/login_rol.png" 
                  alt="Login MotoCare" 
                  className="max-h-[480px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Pantalla de autenticación unificada con selector superior de perfil (<strong className="text-zinc-200">Usuario ↔ Mecánico</strong>), ingreso biométrico y verificación de estado de servidores.
              </div>
            </div>

            {/* Wireframe 2: Dashboard del Usuario / Biker */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-orange-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <h4 className="font-semibold text-white text-sm">2. Panel Principal del Biker</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/motocare/dashboard_biker.png" 
                  alt="Dashboard Biker MotoCare" 
                  className="max-h-[480px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Vista optimizada móvil para el propietario con estado de sus motocicletas activas, kilometraje actual, diagnósticos y alertas de próximos mantenimientos preventivos.
              </div>
            </div>

            {/* Wireframe 3: Perfil del Taller / Mecánico */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-orange-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-orange-400" />
                <h4 className="font-semibold text-white text-sm">3. Vista Operativa del Taller</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/motocare/perfil_taller.png" 
                  alt="Perfil Taller MotoCare" 
                  className="max-h-[480px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Panel de control para mecánicos con resumen de actividad mensual, servicios más solicitados, listado de clientes frecuentes y acceso rápido al escáner QR central.
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}