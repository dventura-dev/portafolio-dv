'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Rocket, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="relative max-w-5xl mx-auto px-6 py-24 border-t border-zinc-900 overflow-hidden">
      {/* Efectos de brillo ambiental de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Título con acento neón */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className="w-1.5 h-8 bg-lime-400 rounded-full shadow-[0_0_10px_#a3e635]" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">Mí</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Columna de Texto Principal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg"
          >
            <p>
              Soy un desarrollador de software con base en <span className="text-lime-400 font-semibold">El Salvador</span>, cursando actualmente una carrera técnica en ingeniería y desarrollo de software. Me apasiona transformar procesos operativos complejos en soluciones digitales eficientes, escalables y con una experiencia de usuario impecable.
            </p>
            <p>
              Mi enfoque principal se concentra en el ecosistema <span className="text-cyan-400 font-semibold">.NET (C#, ASP.NET Core, SQL Server)</span> para arquitecturas de backend sólidas, así como en el desarrollo de aplicaciones móviles multiplataforma de alto rendimiento utilizando <span className="text-cyan-400 font-semibold">React Native y Expo</span>.
            </p>
            <p>
              A lo largo de mi formación y trayectoria, he combinado la disciplina y el esfuerzo constante con el rigor técnico, impulsando proyectos reales orientados a optimizar la gestión institucional y comunitaria. Mi visión a futuro es consolidar una <span className="text-white font-medium border-b border-dashed border-lime-500/50">empresa de desarrollo tecnológico</span> que ofrezca soluciones de alto nivel.
            </p>
          </motion.div>
          
          {/* Tarjeta de Perfil Rápido (Estilo IDE Premium) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-b from-lime-500/50 via-cyan-500/50 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl space-y-5 font-mono text-sm shadow-2xl">
              <div className="flex items-center gap-2 text-lime-400 font-bold border-b border-zinc-800 pb-3 mb-2">
                <Terminal className="w-4 h-4" />
                <span>perfil_rapido.ts</span>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-lime-500/30 transition-colors">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs block uppercase tracking-wider mb-0.5">Ubicación</span>
                    <span className="text-zinc-200 font-medium">El Salvador 🇸🇻</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-lime-500/30 transition-colors">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs block uppercase tracking-wider mb-0.5">Formación</span>
                    <span className="text-zinc-200 font-medium">Ing. y Desarrollo de Software</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-lime-500/30 transition-colors">
                    <Code2 className="w-4 h-4 text-lime-400" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs block uppercase tracking-wider mb-0.5">Stack Principal</span>
                    <span className="text-zinc-200 font-medium">.NET, C#, React Native, SQL</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-lime-500/30 transition-colors">
                    <Rocket className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs block uppercase tracking-wider mb-0.5">Objetivo</span>
                    <span className="text-zinc-200 font-medium">Fundar empresa de software</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}