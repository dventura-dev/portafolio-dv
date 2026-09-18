'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const educationData = [
  { title: 'Ingeniería en Sistemas / Desarrollo Web', institution: 'Universidad Tecnológica', year: '2008 - 2012', desc: 'Fundamentos sólidos en arquitectura de software, algoritmos y diseño de sistemas escalables.' },
  { title: 'Certificación en Arquitectura Cloud', institution: 'Google Cloud / AWS', year: '2020', desc: 'Diseño e implementación de infraestructuras seguras, serverless y de alta disponibilidad.' },
  { title: 'Diseño UX/UI Avanzado', institution: 'Coursera / Google', year: '2022', desc: 'Especialización en creación de experiencias de usuario centradas en la accesibilidad y el impacto visual.' }
];

export const Education = () => {
  return (
    <section id="educacion" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-yellow-400">Formación</span> y Educación
        </SectionHeading>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ staggerChildren: 0.15 }} className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-4 p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/30 transition-all group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center border border-lime-500/20 group-hover:scale-110 group-hover:bg-lime-500/20 transition-all">
                <GraduationCap className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-lime-400 transition-colors">{edu.title}</h3>
                  <span className="text-xs font-mono text-lime-400 bg-lime-950/40 px-2 py-0.5 rounded border border-lime-900/50 w-fit">{edu.year}</span>
                </div>
                <p className="text-zinc-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};