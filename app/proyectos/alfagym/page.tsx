'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Code2, Database, Layers, Cpu, ShieldCheck, Dumbbell, Users, CreditCard, ClipboardList } from 'lucide-react';

export default function AlfaGymPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de Retorno */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        {/* Encabezado Principal */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">AlfaGym Sistema de Gestión</span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Plataforma web integral orientada a la administración de centros de acondicionamiento físico, control de membresías, caja e historial de pagos, control de accesos por documento y gestión de inventario y entrenadores.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/CarlosMoran12/sistema-gimnasio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 rounded-xl text-white hover:text-emerald-400 transition-all font-medium text-sm shadow-lg"
            >
              <GitBranch className="w-5 h-5 text-emerald-400" /> Ver Repositorio en GitHub
            </a>
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="mb-16 bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-zinc-200">
            <Code2 className="w-5 h-5 text-emerald-400" /> Stack Tecnológico y Arquitectura
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Java', 'Spring Boot', 'Spring Data JPA', 'Maven', 'Jakarta Validation', 'PostgreSQL', 'HTML/CSS/JS'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-mono text-emerald-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Arquitectura y Roles del Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-400" /> Arquitectura por Capas (DAL / Dominio)
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
              Estructura estrictamente modular separando <strong className="text-zinc-200">Controladores → Servicios → Repositorios (JPA) → Base de Datos</strong>, manteniendo las entidades de dominio limpias y validadas mediante Jakarta Validation.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" /> Contribución en el Equipo
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
              Participación directa en el diseño y refactorización del <strong className="text-zinc-200">Dominio y las Entidades</strong> del sistema, asegurando la consistencia relacional con Spring Data JPA y la correcta integración con las capas de servicio y persistencia.
            </p>
          </div>
        </div>

        {/* Galería de Pantallas (Las 7 capturas analizadas) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Módulos del Sistema y Paneles Operativos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pantalla 1: Login */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-emerald-500/40 transition-all md:col-span-2">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <h4 className="font-semibold text-white text-sm">1. Acceso y Autenticación Segura</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/alfagym/login.jpg" 
                  alt="Login AlfaGym" 
                  className="max-h-[500px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Pantalla de inicio de sesión institucional con diseño corporativo y control de credenciales administrativas para el acceso al sistema.
              </div>
            </div>

            {/* Pantalla 2: Dashboard General */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-teal-500/40 transition-all md:col-span-2">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-teal-400" />
                <h4 className="font-semibold text-white text-sm">2. Centro de Control y Dashboard Operativo</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/alfagym/dashboard.jpg" 
                  alt="Dashboard AlfaGym" 
                  className="max-h-[500px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Panel con métricas en tiempo real de clientes activos e inactivos, membresías vigentes y vencidas, pagos registrados, estado de equipos y accesos rápidos a operaciones frecuentes.
              </div>
            </div>

            {/* Pantalla 3: Detalle del Cliente */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <h4 className="font-semibold text-white text-sm">3. Ficha Integral y Detalle del Cliente</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/alfagym/detalle_cliente.png" 
                  alt="Detalle Cliente AlfaGym" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Vista detallada del perfil del cliente, estado de membresía, historial de pagos, entrenador asignado y registro cronológico de accesos y entradas.
              </div>
            </div>

            {/* Pantalla 4: Historial de Pagos */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-emerald-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <h4 className="font-semibold text-white text-sm">4. Gestión de Caja e Historial de Pagos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/alfagym/pagos.png" 
                  alt="Pagos AlfaGym" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Módulo de control financiero para el registro de renovaciones de membresías, montos, métodos de pago y trazabilidad de fechas de vencimiento.
              </div>
            </div>

            {/* Pantalla 5: Control de Accesos */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-teal-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-teal-400" />
                <h4 className="font-semibold text-white text-sm">5. Validación y Control de Accesos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/alfagym/accesos.png" 
                  alt="Accesos AlfaGym" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Punto de control en recepción para validar la entrada mediante el documento del cliente, autorizando el acceso únicamente si cuenta con membresía vigente.
              </div>
            </div>

            {/* Pantalla 6: Centro de Reportes */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-cyan-400" />
                <h4 className="font-semibold text-white text-sm">6. Centro de Reportes Operativos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/alfagym/reportes.png" 
                  alt="Reportes AlfaGym" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Módulo analítico en línea para consultar estados de clientes, ingresos totales por rango de fechas e inventario operativo actual.
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
} 