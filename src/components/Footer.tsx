export const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-900 text-center bg-black">
      <p className="text-zinc-600 text-sm font-mono">
        © {new Date().getFullYear()} Daniel Antonio Ventura Ramos. Construido con <span className="text-lime-400">Next.js</span> y <span className="text-cyan-400">Tailwind CSS</span>.
      </p>
    </footer>
  );
};