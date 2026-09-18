'use client';

import { motion, Variants } from 'framer-motion';
import { FileText, Code2, ExternalLink, Mail } from 'lucide-react';

// 1. Datos de enlaces de acción con 2 temas lima y 2 cian
const ACTION_LINKS = [
  { href: '/cv.pdf', label: 'Ver CV', icon: FileText, theme: 'lime', external: true },
  { href: 'https://github.com/dventura-dev', label: 'GitHub', icon: Code2, theme: 'cyan', external: true },
  { href: 'https://linkedin.com/in/dventura-dev', label: 'LinkedIn', icon: ExternalLink, theme: 'cyan', external: true },
  { href: 'mailto:danielantonioventuraramos41@gmail.com', label: 'Contactar', icon: Mail, theme: 'lime', external: false }
];

// 2. Variantes de animación tipadas correctamente para evitar errores de TS
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
  }
};

export const Hero = () => {
  return (
    <section id="sobre-mi" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-black">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/15 via-zinc-950 to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Texto y CTA */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left"
          >
            {/* Badge de disponibilidad */}
            <motion.div variants={itemVariants} className="inline-flex items-center mb-8 px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-xs sm:text-sm font-mono tracking-wider uppercase">
              <span className="relative flex h-2 w-2 mr-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              Disponible para nuevos retos
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(163,230,53,0.2)]">
              Hola, soy Daniel Antonio
            </motion.h1>
            
            {/* Descripción integral abarcando Web, Backend, Bases de Datos y Apps Móviles */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
             Desarrollador de Software Full Stack | Creando aplicaciones web y móviles de extremo a extremo, desde el diseño de APIs y bases de datos hasta la interfaz de usuario.
            </motion.p>

            {/* Grid de botones (2 verdes y 2 azules) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              {ACTION_LINKS.map((link, index) => {
                const Icon = link.icon;
                const isCyan = link.theme === 'cyan';

                // Clases dinámicas divididas en 2 temas (Cyan/Azul y Lime/Verde)
                const hoverClasses = isCyan 
                  ? 'hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] focus-visible:ring-cyan-500'
                  : 'hover:border-lime-500/50 hover:text-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] focus-visible:ring-lime-500';

                const iconColor = isCyan ? 'text-cyan-400' : 'text-lime-400';

                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`group relative flex items-center justify-center sm:justify-start gap-3 px-5 py-3.5 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 text-zinc-300 font-medium rounded-xl transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${hoverClasses}`}
                  >
                    <Icon className={`w-5 h-5 ${iconColor} transition-transform duration-300 group-hover:scale-110`} aria-hidden="true" />
                    <span>{link.label}</span>
                    {link.external && <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Imagen con flotación */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-lime-500/10 via-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl -z-10" />
            
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-[2rem] p-[2px] bg-gradient-to-b from-lime-500/40 via-zinc-800 to-cyan-500/40 shadow-2xl shadow-lime-900/20"
            >
              <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 pointer-events-none" />
                
    <img 
  src="/yo.jpg"
  alt="Retrato de Daniel Antonio Ventura Ramos, Desarrollador de Software"
  className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
  loading="eager"
/>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};