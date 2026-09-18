import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-lime-400 selection:text-black">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}