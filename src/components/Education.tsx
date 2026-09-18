'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  desc: string;
  tag?: string;
}

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

const educationData: EducationItem[] = [
  {
    id: 'esfe',
    title: 'Técnico en Ingeniería y Desarrollo de Software',
    institution: 'ESFE-AGAPE, Sonsonate',
    year: '2025 - Presente',
    desc: 'Formación técnica enfocada en arquitectura de software (.NET / C#), desarrollo móvil con React Native, bases de datos SQL Server y desarrollo web.',
    tag: 'En Curso'
  },
  {
    id: 'kriete',
    title: 'Becado - Programa Oportunidades',
    institution: 'Fundación Gloria de Kriete / USAID',
    year: '2023 - 2024',
    desc: 'Programa de alto rendimiento enfocado en desarrollo de competencias digitales, idioma inglés, liderazgo y pensamiento crítico.',
    tag: 'Beca de Excelencia'
  },
  {
    id: 'pestalozzi',
    title: 'Bachillerato General',
    institution: 'Complejo Educativo Juan Enrique Pestalozzi',
    year: '2023 - 2024',
    desc: 'Educación media completada con éxito, fortaleciendo habilidades académicas y de trabajo colaborativo.'
  }
];

const certificationsData: CertificationItem[] = [
  {
    id: 'google-ti',
    title: 'Programa Soporte en Tecnologías de la Información (TI)',
    issuer: 'Google / Coursera',
    year: '2025',
    link: 'https://coursera.org'
  },
  {
    id: 'informes',
    title: 'Curso de Informes Ejecutivos y Redacción Técnica',
    issuer: 'Capacítate para el Empleo / Fundación Carlos Slim',
    year: '2025'
  },
  {
    id: 'comercio-digital',
    title: 'Curso de Comercio Digital',
    issuer: 'Capacítate para el Empleo',
    year: '2025'
  }
];

export const Education = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

  return (
    <section id="educacion" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-yellow-400">
            Formación
          </span>{' '}
          y Educación
        </SectionHeading>

        {/* Botones para alternar entre Educación y Certificaciones */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Educación
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === 'certifications'
                ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
            }`}
          >
            <Award className="w-4 h-4" /> Certificaciones
          </button>
        </div>

        {/* Contenido dinámico */}
        <AnimatePresence mode="wait">
          {activeTab === 'education' ? (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="flex gap-4 p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center border border-lime-500/20 group-hover:scale-110 group-hover:bg-lime-500/20 transition-all">
                    <GraduationCap className="w-6 h-6 text-lime-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-lime-400 transition-colors">
                          {edu.title}
                        </h3>
                        {edu.tag && (
                          <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-lime-500/10 text-lime-400 border border-lime-500/20">
                            {edu.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-lime-400 bg-lime-950/40 px-2 py-0.5 rounded border border-lime-900/50 w-fit">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-zinc-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-lime-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-zinc-100 text-base">{cert.title}</h4>
                      <span className="text-xs font-mono text-lime-400 bg-lime-950/40 px-2 py-0.5 rounded border border-lime-900/50">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm flex items-center gap-1.5 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-lime-400" /> {cert.issuer}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium mt-2 transition-colors"
                    >
                      Ver credencial <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};