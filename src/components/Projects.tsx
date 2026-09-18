'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

const projectsData = [
  // TUS 4 PROYECTOS ORIGINALES
  {
    title: "Tempisque Comunidad",
    description: "App móvil multiplataforma para notificación ciudadana sobre cortes de servicios públicos en tiempo real.",
    techStack: ["React Native", "Expo", "Firebase"],
    linkUrl: "/proyectos/tempisque"
  },
  {
    title: "Biblioteca Pestalozzi",
    description: "Sistema web institucional para la gestión y control de inventario bibliotecario y préstamos estudiantiles.",
    techStack: ["C#", "ASP.NET Core", "SQL Server"],
    linkUrl: "/proyectos/biblioteca-pestalozzi"
  },
  {
    title: "Invitación Web 15 Años",
    description: "Plataforma interactiva con componentes multimedia personalizados y animaciones 3D para evento especial.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    linkUrl: "/proyectos/invitacion-15"
  },
  {
    title: "Repositorio de Normativas",
    description: "Sistema documental centralizado para la organización, búsqueda avanzada y consulta de normativas internas.",
    techStack: ["C#", "SQL Server", "MVC"],
    linkUrl: "/proyectos/normativas-caja-credito"
  },
  // LOS PROYECTOS EXTRA AÑADIDOS
  {
    title: "AlfaGym",
    description: "Sistema integral para la administración de gimnasios, control de membresías, asistencias y accesos.",
    techStack: ["Java SE", "Spring Boot", "MySQL"],
    linkUrl: "/proyectos/alfagym"
  },
  {
    title: "LogiMoto (Gestión de Envíos)",
    description: "Aplicación móvil para el seguimiento de rutas, asignación de pedidos y control de entregas en tiempo real.",
    techStack: ["React Native", "Node.js", "Firebase"],
    linkUrl: "/proyectos/logimoto"
  }
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Mostramos solo 4 al inicio, o todos si showAll es true
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="proyectos" className="relative max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <SectionHeading>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-yellow-400">Sistemas</span> Destacados
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: showAll && idx >= 4 ? (idx - 4) * 0.1 : 0 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Botón Ver Más / Ver Menos */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-lime-500/50 text-zinc-300 hover:text-lime-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.15)]"
          >
            {showAll ? (
              <>Ver menos proyectos <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
            ) : (
              <>Ver más proyectos <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};