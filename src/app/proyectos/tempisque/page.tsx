import Link from 'next/link';

export default function TempisqueProject() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Botón de retorno */}
        <Link href="/#proyectos" className="text-zinc-400 hover:text-green-400 text-sm font-mono transition-colors">
          ← Volver al inicio
        </Link>

        {/* Encabezado */}
        <div className="space-y-3">
          <span className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-green-400 px-3 py-1 rounded">
            Aplicación Móvil / Multiplataforma
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Tempisque Comunidad</h1>
          <p className="text-lg text-zinc-400">
            Sistema de notificación ciudadana en tiempo real sobre cortes imprevistos y mantenimiento de servicios públicos.
          </p>
        </div>

        {/* Mockup / Imagen Principal (Espacio reservado) */}
        <div className="w-full h-72 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 font-mono text-sm">
          [Captura de pantalla principal de la App]
        </div>

        {/* Contexto y Problema */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-900 pt-8">
          <div>
            <h3 className="font-bold text-white mb-2">El Problema</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              La falta de comunicación centralizada generaba desinformación en la comunidad local ante interrupciones de servicios esenciales, retrasando la respuesta ciudadana.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">La Solución</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Desarrollo de una interfaz móvil fluida con alertas push automatizadas y panel de control basado en la nube para reportes oficiales.
            </p>
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="border-t border-zinc-900 pt-8">
          <h3 className="font-bold text-white mb-4">Herramientas y Tecnologías</h3>
          <div className="flex flex-wrap gap-2">
            {["React Native", "Expo", "Firebase Auth", "Firestore", "Tailwind CSS"].map((tech, i) => (
              <span key={i} className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-green-400 px-3 py-1.5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Enlace al Repositorio */}
        <div className="border-t border-zinc-900 pt-8 flex gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
          >
            Ver Repositorio en GitHub ↗
          </a>
        </div>

      </div>
    </main>
  );
}