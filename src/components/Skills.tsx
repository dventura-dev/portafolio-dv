'use client';

import { Smartphone, Server, Database, Wrench, Users, LucideIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { motion, type Variants } from 'framer-motion';

// 1. Tipado expandido con colores únicos para cada bloque
type ColorTheme = 'cyan' | 'lime' | 'amber' | 'emerald' | 'purple';

type SkillCategory = {
  id: string;
  title: string;
  Icon: LucideIcon;
  colorTheme: ColorTheme;
  skills: string[];
  note?: string;
  isFullWidth?: boolean;
};

const skillCategories: SkillCategory[] = [
  { 
    id: 'frontend',
    title: 'Frontend & Móvil', 
    Icon: Smartphone, 
    colorTheme: 'cyan',
    skills: ['React', 'Next.js', 'TailwindCSS', 'React Native', 'Expo', 'HTML5/CSS3'] 
  },
  { 
    id: 'backend',
    title: 'Backend', 
    Icon: Server, 
    colorTheme: 'lime',
    skills: ['C#', '.NET Core', 'ASP.NET MVC', 'Java', 'Python', 'Node.js'] 
  }, 
  { 
    id: 'database',
    title: 'Bases de Datos', 
    Icon: Database, 
    colorTheme: 'amber',
    skills: ['SQL Server', 'Entity Framework', 'PostgreSQL', 'MySQL', 'Firebase'] 
  },
  { 
    id: 'tools',
    title: 'Herramientas', 
    Icon: Wrench, 
    colorTheme: 'emerald',
    skills: ['Git & GitHub', 'Azure DevOps', 'Docker', 'Metodologías Ágiles', 'Clean Code', 'Gestión de Proyectos'],
    note: 'Enfoque en calidad de código, escalabilidad y entrega continua (CI/CD).'
  },
  {
    id: 'soft-skills',
    title: 'Habilidades Blandas & Profesionales',
    Icon: Users,
    colorTheme: 'purple',
    isFullWidth: true,
    skills: [
      'Comunicación Efectiva',
      'Oratoria & Scripting',
      'Resolución Lógica de Problemas',
      'Trabajo en Equipo',
      'Análisis de Requerimientos',
      'Autogestión & Adaptabilidad'
    ],
    note: 'Competencias clave para la presentación de proyectos, documentación y trabajo colaborativo.'
  }
];

// 2. Mapeo explícito de clases de Tailwind para evitar fallos de compilación en Vercel
const themeStyles: Record<ColorTheme, { 
  text: string; 
  bg: string; 
  borderHover: string; 
  glow: string; 
  topLine: string;
  badgeHover: string;
}> = {
  cyan: { 
    text: 'text-cyan-400', 
    bg: 'bg-cyan-500/10 border-cyan-500/30', 
    borderHover: 'group-hover:border-cyan-400/80', 
    glow: 'group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]',
    topLine: 'from-transparent via-cyan-400 to-transparent',
    badgeHover: 'hover:border-cyan-500/50 hover:text-cyan-200'
  },
  lime: { 
    text: 'text-lime-400', 
    bg: 'bg-lime-500/10 border-lime-500/30', 
    borderHover: 'group-hover:border-lime-400/80', 
    glow: 'group-hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]',
    topLine: 'from-transparent via-lime-400 to-transparent',
    badgeHover: 'hover:border-lime-500/50 hover:text-lime-200'
  },
  amber: { 
    text: 'text-amber-400', 
    bg: 'bg-amber-500/10 border-amber-500/30', 
    borderHover: 'group-hover:border-amber-400/80', 
    glow: 'group-hover:shadow-[0_0_25px_rgba(251,191,36,0.25)]',
    topLine: 'from-transparent via-amber-400 to-transparent',
    badgeHover: 'hover:border-amber-500/50 hover:text-amber-200'
  },
  emerald: { 
    text: 'text-emerald-400', 
    bg: 'bg-emerald-500/10 border-emerald-500/30', 
    borderHover: 'group-hover:border-emerald-400/80', 
    glow: 'group-hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]',
    topLine: 'from-transparent via-emerald-400 to-transparent',
    badgeHover: 'hover:border-emerald-500/50 hover:text-emerald-200'
  },
  purple: { 
    text: 'text-purple-400', 
    bg: 'bg-purple-500/10 border-purple-500/30', 
    borderHover: 'group-hover:border-purple-400/80', 
    glow: 'group-hover:shadow-[0_0_25px_rgba(192,132,252,0.25)]',
    topLine: 'from-transparent via-purple-400 to-transparent',
    badgeHover: 'hover:border-purple-500/50 hover:text-purple-200'
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const theme = themeStyles[category.colorTheme];
  const Icon = category.Icon;

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 transition-all duration-300 ${theme.borderHover} ${theme.glow} ${
        category.isFullWidth ? 'md:col-span-2 lg:col-span-4' : ''
      }`}
    >
      {/* Línea Neón Superior */}
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${theme.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} />

      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className={`p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 group-hover:bg-zinc-800 transition-all duration-300`}>
            <Icon className={`w-6 h-6 ${theme.text} transition-transform duration-300 group-hover:scale-110`} aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
            {category.title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span 
              key={skill} 
              className={`px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 transition-all duration-300 ${theme.badgeHover} cursor-default`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {category.note && (
        <p className="text-[11px] text-zinc-400 mt-5 pt-4 border-t border-zinc-800/80 font-mono leading-relaxed">
          <span className={theme.text}>✦</span> {category.note}
        </p>
      )}
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="habilidades" className="py-24 px-6 relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-amber-400">Mis Habilidades & Competencias</span> 
        </SectionHeading>

        <p className="text-zinc-400 text-center max-w-2xl mx-auto -mt-6 mb-12 text-sm sm:text-base">
          Integración de arquitectura de software, gestión de bases de datos y habilidades interpersonales orientadas al desarrollo de proyectos de alto impacto.
        </p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};