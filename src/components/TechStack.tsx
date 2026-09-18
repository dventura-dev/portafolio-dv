'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, Layout, Server, Terminal, Wrench } from 'lucide-react';

const technologies = [
  {
    category: "Backend & Base de Datos",
    icon: Server,
    color: "text-lime-400",
    borderHover: "group-hover:border-lime-500/50",
    items: ["C#", ".NET Core", "ASP.NET MVC", "Entity Framework", "SQL Server", "Java (Spring Boot)"]
  },
  {
    category: "Frontend & Móvil",
    icon: Layout,
    color: "text-cyan-400",
    borderHover: "group-hover:border-cyan-500/50",
    items: ["React Native", "Expo", "Next.js", "Blazor", "Tailwind CSS", "TypeScript"]
  },
  {
    category: "Herramientas & DevOps",
    icon: Wrench,
    color: "text-yellow-400",
    borderHover: "group-hover:border-yellow-500/50",
    items: ["Git", "GitHub", "Azure DevOps", "Docker", "Docker Compose", "IntelliJ IDEA"]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative max-w-5xl mx-auto px-6 py-24 border-t border-zinc-900">
      <div className="relative z-10 space-y-12">
        
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className="w-1.5 h-8 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">Stack</span>
          </h2>
        </motion.div>

        {/* Grid de Tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group bg-zinc-950/80 border border-zinc-800 p-6 rounded-2xl transition-all duration-300 ${tech.borderHover}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                    <Icon className={`w-5 h-5 ${tech.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech.category}</h3>
                </div>

                <ul className="space-y-2 font-mono text-sm text-zinc-400">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}