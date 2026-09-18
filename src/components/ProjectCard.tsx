'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  linkUrl: string;
}

export const ProjectCard = ({ title, description, techStack, linkUrl }: ProjectCardProps) => (
  <motion.a 
    href={linkUrl}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative block p-1 rounded-2xl bg-gradient-to-b from-lime-500/20 via-cyan-500/20 to-transparent hover:from-lime-400/40 hover:via-cyan-400/40 transition-all duration-500"
  >
    <div className="relative h-full bg-zinc-950 rounded-xl p-6 border border-zinc-800 group-hover:border-cyan-500/50 transition-colors flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-lime-400 transition-colors" />
      </div>
      <p className="text-zinc-400 mb-6 leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {techStack.map(tag => (
          <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-900/50 group-hover:border-lime-500/30 group-hover:text-lime-300 transition-all">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);