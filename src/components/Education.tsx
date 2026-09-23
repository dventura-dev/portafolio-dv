'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Cpu, Database, Briefcase, Code, ChevronUp, ChevronDown, LucideIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

// 1. Interfaz unificada
interface FormacionItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: LucideIcon;
  image?: string; 
  tag?: string;   
}

// 2. Datos de Educación (Títulos y Becas)
const educationData: FormacionItem[] = [
  {
    id: 'esfe',
    title: 'Técnico en Ingeniería de Software',
    issuer: 'ESFE-AGAPE',
    date: '2025 - Presente',
    icon: Code,
    image: '/logoesfe.png', 
    tag: 'En Curso',
    description: 'Formación técnica enfocada en arquitectura de software (.NET / C#), desarrollo móvil con React Native, bases de datos SQL Server y desarrollo web.'
  },
  {
    id: 'kriete',
    title: 'Beca de Estudios Superiores',
    issuer: 'Programa Oportunidades - Gloria Kriete',
    date: 'Enero 2025',
    icon: Award,
    image: '/certificado1.jpg', 
    tag: 'Beca de Excelencia',
    description: 'Galardón a la excelencia académica. Formación integral enfocada en el desarrollo de competencias digitales, idioma inglés y liderazgo.'
  },
  {
    id: 'pestalozzi',
    title: 'Bachiller General',
    issuer: 'C.E. Juan Enrique Pestalozzi',
    date: 'Diciembre 2024',
    icon: BookOpen,
    image: '/certificado5.jpg',
    description: 'Educación media completada con éxito, estableciendo bases sólidas en ciencias, lógica matemática y trabajo colaborativo.'
  }
];

// 3. Datos de Certificaciones
const certificationsData: FormacionItem[] = [
  {
    id: 'frontend',
    title: 'Desarrollador Front-end',
    issuer: 'Fundación Carlos Slim',
    date: 'Septiembre 2025',
    icon: Cpu,
    image: '/curso1.png',
    description: 'Certificación intensiva enfocada en la construcción de interfaces de usuario (UI) responsivas, asegurando una experiencia fluida.'
  },
  {
    id: 'database',
    title: 'Administrador de Bases de Datos',
    issuer: 'Fundación Carlos Slim',
    date: 'Agosto 2025',
    icon: Database,
    image: '/curso2.png',
    description: 'Especialización en el diseño, optimización y mantenimiento de bases de datos relacionales, garantizando la seguridad de la información.'
  },
  {
    id: 'workeys',
    title: 'Certificación Empleabilidad Workeys',
    issuer: 'USAID & Fundación Gloria Kriete',
    date: 'Diciembre 2025',
    icon: Briefcase,
    image: '/certificado4.jpg',
    description: 'Acreditación en competencias laborales, resolución de conflictos, ética profesional y adaptación a entornos corporativos de alta exigencia.'
  },
  {
    id: 'csharp',
    title: 'Programador en C#',
    issuer: 'Capacítate para el Empleo',
    date: 'Marzo 2025',
    icon: Code,
    image: '/curso4.png',
    tag: 'En Curso',
    description: 'Formación en programación orientada a objetos con C#, estructurando lógica de backend y desarrollo de aplicaciones robustas.'
  },
  {
    id: 'soporte',
    title: 'Instalación y Reparación de Cómputo',
    issuer: 'Capacítate para el Empleo',
    date: 'Febrero 2025',
    icon: Cpu,
    image: '/curso3.png',
    tag: 'En Curso',
    description: 'Mantenimiento de infraestructura de hardware y diagnóstico de fallos en equipos de cómputo para asegurar su operatividad.'
  },
  {
    id: 'gestion',
    title: 'Gestión Documental y Estructuración',
    issuer: 'Fundación Carlos Slim',
    date: 'Mayo 2023',
    icon: BookOpen,
    image: '/curso5.png',
    description: 'Aplicado en soporte administrativo. Competencias en redacción técnica, investigación estructurada y control de formatos.'
  },

    {
    id: 'grad-oportunidades',
    title: 'Graduación Centro de Capacitación',
    issuer: 'Programa Oportunidades / USAID & F. Gloria Kriete',
    date: 'Enero 2025',
    icon: Award,
    image: '/certificado2.jpg', // <--- Pon aquí el nombre exacto de tu imagen
    tag: 'Logro Destacado',
    description: 'Completación exitosa del programa de formación integral en el Centro de Capacitación Sonsonate, consolidando habilidades técnicas y de liderazgo.'
  },

  {
    id: 'ciudadania',
    title: 'Curso de Ciudadanía y Liderazgo',
    issuer: 'FUSADES / CREO & USAID',
    date: 'Julio 2023',
    icon: BookOpen,
    image: '/certificado3.jpg', // <--- Pon aquí el nombre exacto de tu imagen
    description: 'Formación en valores cívicos, participación social y desarrollo de proyectos comunitarios colaborativos.'
  }

];

export const Education = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');
  const [showAllCerts, setShowAllCerts] = useState(false);

  const currentData = activeTab === 'education' 
    ? educationData 
    : (showAllCerts ? certificationsData : certificationsData.slice(0, 3));

  return (
    <section id="educacion" className="py-24 px-6 relative border-t border-zinc-900 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-lime-900/10 via-black to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-amber-400">
            Formación y Educación
          </span>{' '}
        
        </SectionHeading>

        <p className="text-zinc-400 text-center max-w-2xl mx-auto -mt-6 mb-10 text-sm sm:text-base">
          Respaldo académico, formación técnica continua y reconocimientos a la excelencia que avalan mi compromiso profesional.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-lime-500/20 text-lime-400 border border-lime-500/50 shadow-[0_0_15px_rgba(163,230,53,0.2)]'
                : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Educación Académica
          </button>
          <button
            onClick={() => {
              setActiveTab('certifications');
              setShowAllCerts(false);
            }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            <Award className="w-4 h-4" /> Certificaciones Técnicas
          </button>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {currentData.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative h-[450px] flex flex-col bg-zinc-950 rounded-2xl border border-zinc-800/80 overflow-hidden hover:border-lime-500/30 hover:shadow-[0_0_20px_rgba(163,230,53,0.1)] transition-all duration-500"
                >
                  {/* Etiqueta Flotante */}
                  {item.tag && (
                    <div className="absolute top-3 right-3 z-30">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-lime-400 border border-lime-500/30">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* 1. Imagen Grande por defecto (Se encoge un poco al hacer hover para dar espacio) */}
                  <div className="relative w-full h-[calc(100%-40px)] group-hover:h-[45%] transition-all duration-500 z-10 flex items-center justify-center p-2">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={`Certificado ${item.title}`}
                        className="w-full h-full object-contain object-top transition-all duration-500 rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center rounded-xl">
                        <Icon className="w-16 h-16 text-zinc-800" />
                      </div>
                    )}
                  </div>

                  {/* 2. Panel de Texto (Oculto abajo por defecto, sube al hacer hover) */}
                  <div className="absolute bottom-0 w-full h-[55%] bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800/80 translate-y-[calc(100%-40px)] group-hover:translate-y-0 transition-transform duration-500 z-20 flex flex-col justify-between">
                    
                    {/* Pestaña superior con flecha indicadora cuando está cerrado */}
                    <div className="absolute top-0 left-0 w-full h-[40px] flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <ChevronUp className="w-5 h-5 text-lime-400 animate-bounce" />
                      <span className="text-xs text-lime-400 font-bold ml-2 tracking-widest uppercase">Ver Información</span>
                    </div>

                    {/* Información completa (Aparece al subir el panel) */}
                    <div className="p-5 flex flex-col flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full pt-10">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className={`w-4 h-4 ${activeTab === 'education' ? 'text-lime-400' : 'text-cyan-400'}`} />
                        <span className="text-xs text-zinc-400 font-mono">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-100 mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 mb-3 font-bold uppercase tracking-widest">
                        {item.issuer}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-auto">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {activeTab === 'certifications' && certificationsData.length > 3 && (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-zinc-900/50 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              {showAllCerts ? (
                <>
                  Ver menos cursos <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver más cursos ({certificationsData.length - 3}) <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};