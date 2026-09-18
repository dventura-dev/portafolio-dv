'use client';

import { motion } from 'framer-motion';
import { Smartphone, Server, Database, Settings, LucideIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

// 1. Tipado y estructura de datos refinada
type SkillCategory = {
  title: string;
  Icon: LucideIcon;
  colorTheme: 'cyan' | 'lime' | 'amber';
  skills: string[];
  note?: string;
};

const skillCategories: SkillCategory[] = [
  { 
    title: 'Frontend & Móvil', 
    Icon: Smartphone, 
    colorTheme: 'cyan',
    skills: ['React', 'Next.js', 'TailwindCSS', 'React Native', 'Expo', 'HTML5/CSS3'] 
  },
  { 
    title: 'Backend', 
    Icon: Server, 
    colorTheme: 'lime',
    skills: ['C#', '.NET Core', 'ASP.NET MVC', 'Java', 'Python', 'Node.js'] 
  }, 
  { 
    title: 'Bases de Datos', 
    Icon: Database, 
    colorTheme: 'amber',
    skills: ['SQL Server', 'Entity Framework', 'PostgreSQL', 'MySQL', 'Firebase'] 
  },
  { 
    // 2. Renombrado y enfoque profesional: de "Blandas" a prácticas de ingeniería
    title: 'Herramientas', 
    Icon: Settings, 
    colorTheme: 'lime', // Unificado con el color principal de tu marca
    skills: ['Git & GitHub', 'Azure DevOps', 'Docker', 'Metodologías Ágiles', 'Clean Code', 'Gestión de Proyectos'],
    note: 'Enfoque en calidad de código, escalabilidad y entrega continua (CI/CD).'
  }
];

// 3. Paleta de colores unificada y armoniosa
const themeStyles = {
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', glow: 'group-hover:shadow-cyan-500/10' },
  lime: { text: 'text-lime-400', bg: 'bg-lime-500/10', border: 'border-lime-500/30', glow: 'group-hover:shadow-lime-500/10' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', glow: 'group-hover:shadow-amber-500/10' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const theme = themeStyles[category.colorTheme];
  const Icon = category.Icon;

  return (
    <motion.div 
      variants={itemVariants}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/60 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl ${theme.glow}`}
    >
      {/* Indicador de brillo superior en hover */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-${category.colorTheme}-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className={`p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 group-hover:border-${category.colorTheme}-500/30 group-hover:bg-${category.colorTheme}-500/10 transition-all duration-300`}>
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
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-800 hover:text-zinc-200 hover:border-zinc-600 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {category.note && (
        <p className="text-[11px] text-zinc-500 mt-5 pt-4 border-t border-zinc-800/80 font-mono leading-relaxed">
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
        {/* 4. Título limpio: eliminado "& Blandas" */}
        <SectionHeading>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-amber-400">Habilidades Técnicas</span> 
        </SectionHeading>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};