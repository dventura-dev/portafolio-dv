'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Code2, Database, Layers, FileSpreadsheet, Cpu, BookOpen, Users, ShieldAlert, BarChart3 } from 'lucide-react';

export default function BibliotecaPestalozziPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de Retorno */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-indigo-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        {/* Encabezado Principal */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Biblioteca Pestalozzi</span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Sistema web institucional robusto para la gestión integral de inventario bibliotecario, control avanzado de préstamos polimórficos, aprobación de cuentas y análisis de datos en tiempo real.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/dventura-dev/biblioteca-pestalozzi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-indigo-500 rounded-xl text-white hover:text-indigo-400 transition-all font-medium text-sm shadow-lg"
            >
              <GitBranch className="w-5 h-5 text-indigo-400" /> Ver Repositorio en GitHub
            </a>
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="mb-16 bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-zinc-200">
            <Code2 className="w-5 h-5 text-indigo-400" /> Stack y Tecnologías Principales
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Python', 'Flask', 'PostgreSQL', 'psycopg2', 'Pandas & BytesIO', 'HTML/CSS/JS (Jinja2)', 'AJAX / Fetch API'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-mono text-indigo-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Arquitectura y Decisiones Técnicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" /> Refactorización y Arquitectura
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Evolucionó desde un monolito inicial en un único archivo <code className="text-indigo-300 font-mono">app.py</code> de más de 800 líneas hacia una arquitectura limpia y modular basada en capas:
            </p>
            <ul className="text-xs text-zinc-400 space-y-2 font-mono bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
              <li>📁 <strong className="text-zinc-200">Controllers:</strong> Gestión de rutas y solicitudes HTTP (Blueprints).</li>
              <li>📁 <strong className="text-zinc-200">Services:</strong> Lógica de negocio pura (cálculo de plazos y moras).</li>
              <li>📁 <strong className="text-zinc-200">Repositories:</strong> Conexión directa y ejecución optimizada de SQL con <code className="text-indigo-300">psycopg2</code>.</li>
            </ul>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-pink-400" /> Reglas de Negocio & Reportes
            </h3>
            <ul className="text-sm text-zinc-400 space-y-3 leading-relaxed">
              <li>🎓 <strong className="text-zinc-200">Préstamos Polimórficos:</strong> Reglas diferenciadas para Alumnos (3 libros / 25 días), Profesores (10 libros / 35 días) y Aulas (hasta 40 libros / mismo día).</li>
              <li>📊 <strong className="text-zinc-200">Exportación Dinámica:</strong> Generación de reportes institucionales en Excel al vuelo utilizando <code className="text-indigo-300">Pandas</code> y <code className="text-indigo-300">BytesIO</code> en memoria.</li>
              <li>🔥 <strong className="text-zinc-200">Mapa de Calor:</strong> Visualización analítica del flujo y rotación de estantes de libros.</li>
            </ul>
          </div>
        </div>

        {/* Galería de Pantallas (Las 5 capturas .png) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Módulos del Sistema y Paneles de Control
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pantalla 1: Dashboard General */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-indigo-500/40 transition-all md:col-span-2">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-400" />
                <h4 className="font-semibold text-white text-sm">1. Centro de Control y Dashboard General</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/biblioteca-pestalozzi/dashboard_general.png" 
                  alt="Dashboard General Biblioteca Pestalozzi" 
                  className="max-h-[500px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Panel principal con métricas consolidadas en tiempo real (libros registrados, activos, vencidos, valor total del inventario), accesos a reportes ejecutivos mensuales y mapa de calor de estantes.
              </div>
            </div>

            {/* Pantalla 2: Inventario Global */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <h4 className="font-semibold text-white text-sm">2. Módulo de Inventario Global</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/biblioteca-pestalozzi/inventario_global.png" 
                  alt="Inventario Global Biblioteca" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Administración completa de libros con formulario lateral de registro, códigos secuenciales autogenerados, búsqueda avanzada y paginación sobre más de 768 volúmenes.
              </div>
            </div>

            {/* Pantalla 3: Nuevo Préstamo */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-pink-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" />
                <h4 className="font-semibold text-white text-sm">3. Sistema Polimórfico de Préstamos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/biblioteca-pestalozzi/nuevo_prestamo.png" 
                  alt="Nuevo Préstamo Biblioteca" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Interfaz interactiva para procesar préstamos múltiples mediante AJAX/Fetch, aplicando automáticamente restricciones según el tipo de prestatario (Alumno, Profesor, Aula).
              </div>
            </div>

            {/* Pantalla 4: Dashboard Cuentas Pendientes */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-indigo-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-indigo-400" />
                <h4 className="font-semibold text-white text-sm">4. Gestión de Cuentas Pendientes</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/biblioteca-pestalozzi/dashboard_cuentas.jpg" 
                  alt="Cuentas Pendientes Biblioteca" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Módulo de seguridad para la revisión, asignación de roles (Consulta, Bibliotecario, Administrador) y aprobación o rechazo de accesos de nuevos usuarios al sistema.
              </div>
            </div>

            {/* Pantalla 5: Dashboard Analíticas */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-400" />
                <h4 className="font-semibold text-white text-sm">5. Analíticas y Mapa de Calor</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/biblioteca-pestalozzi/dashboard_analiticas.jpg" 
                  alt="Analíticas Biblioteca" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Visualización de indicadores de rendimiento, control de libros inactivos por más de un año y monitoreo de ocupación por estanterías.
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}