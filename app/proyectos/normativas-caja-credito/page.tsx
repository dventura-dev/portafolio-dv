'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Code2, Database, ShieldCheck, Server, FileText, Users, Lock } from 'lucide-react';

export default function NormativasCajaCreditoPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6 selection:bg-blue-600 selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de Retorno */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        {/* Encabezado Principal */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"> Repositorio de Normativas</span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8">
            Sistema web institucional desarrollado para la Caja de Crédito de Izalco (Prácticas Profesionales ESFE-ÁGAPE) destinado a centralizar, catalogar y asegurar la consulta de normativas, políticas y manuales internos.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/dventura-dev/normativas-institucionales" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-blue-500 rounded-xl text-white hover:text-blue-400 transition-all font-medium text-sm shadow-lg"
            >
              <GitBranch className="w-5 h-5 text-blue-400" /> Ver Repositorio en GitHub
            </a>
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="mb-16 bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-zinc-200">
            <Code2 className="w-5 h-5 text-blue-400" /> Stack Tecnológico y Arquitectura
          </h3>
          <div className="flex flex-wrap gap-3">
            {['C#', 'ASP.NET Core MVC', '.NET 10', 'Entity Framework Core', 'PostgreSQL', 'BCrypt', 'Docker', 'Bootstrap'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-mono text-blue-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Arquitectura y Decisiones de Negocio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" /> Autonomía de Seguridad y Roles
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
              Se descartó ASP.NET Core Identity para implementar un sistema de autenticación personalizado basado en Cookies y Claims, asegurando un control estricto mediante <code className="text-blue-300 font-mono">BCrypt</code> y restricción de cupo máximo de <strong className="text-zinc-200">2 Administradores</strong>.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" /> Despliegue Local con Docker
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
              Optimizado para la infraestructura interna de la institución mediante contenedores <code className="text-blue-300 font-mono">Docker</code>, permitiendo un acceso fluido en red local (LAN) para los empleados sin requerir configuraciones complejas en cada equipo.
            </p>
          </div>
        </div>

        {/* Galería de Pantallas (Las 7 capturas analizadas) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Módulos del Sistema y Paneles Institucionales
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pantalla 1: Portal de Bienvenida */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-blue-500/40 transition-all md:col-span-2">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <h4 className="font-semibold text-white text-sm">1. Portal Institucional de Documentación</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/normativas-caja-credito/portal_bienvenida.jpg" 
                  alt="Portal de Bienvenida Repositorio" 
                  className="max-h-[500px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Página de inicio corporativa con acceso restringido, estado general del repositorio y categorización visual por áreas (Recursos Humanos, Procedimientos Operativos, Gobierno y Cumplimiento)[cite: 18].
              </div>
            </div>

            {/* Pantalla 2: Gestión de Documentos */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-indigo-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-400" />
                <h4 className="font-semibold text-white text-sm">2. Gestión y Catálogo de Documentos</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/normativas-caja-credito/gestion_documentos.png" 
                  alt="Gestión de Documentos" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Panel administrativo para control de normativas con filtros avanzados por código, título, categoría, estado (vigente, borrador, derogado) y permisos de descarga[cite: 19].
              </div>
            </div>

            {/* Pantalla 3: Crear Nuevo Documento */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <h4 className="font-semibold text-white text-sm">3. Carga y Configuración de Normativas</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/normativas-caja-credito/crear_documento.png" 
                  alt="Crear Documento" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Formulario de registro con metadatos avanzados (fechas de emisión, publicación, vigencia), palabras clave, adjunto PDF y control de permisos de descarga por archivo[cite: 22].
              </div>
            </div>

            {/* Pantalla 4: Gestión Institucional de Usuarios */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-blue-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <h4 className="font-semibold text-white text-sm">4. Administración de Cuentas y 2 Admins</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/normativas-caja-credito/gestion_usuarios.png" 
                  alt="Gestión de Usuarios" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Control de pases y cuentas del personal, con indicador en tiempo real del límite estricto de administradores permitidos (1/2 cupos ocupados)[cite: 20].
              </div>
            </div>

            {/* Pantalla 5: Auditoría de Accesos y Seguridad */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-indigo-500/40 transition-all">
              <div className="p-4 bg-zinc-900/50 border-b border-zinc-900 flex items-center gap-2">
                <Lock className="w-4 h-4 text-indigo-400" />
                <h4 className="font-semibold text-white text-sm">5. Trazabilidad y Auditoría de Seguridad</h4>
              </div>
              <div className="p-6 flex justify-center bg-black/40">
                <img 
                  src="/normativas-caja-credito/auditoria.png" 
                  alt="Auditoría de Accesos" 
                  className="max-h-[450px] object-contain rounded-xl border border-zinc-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-xs text-zinc-400 border-t border-zinc-900">
                Registro detallado de eventos de seguridad (logins exitosos, intentos fallidos con contraseña incorrecta, direcciones IP, cambios de contraseña y trazabilidad de acciones)[cite: 21].
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}