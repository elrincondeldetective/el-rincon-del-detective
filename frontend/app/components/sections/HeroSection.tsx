// frontend/src/components/sections/HeroSection.tsx
import { ShieldCheck, Users, Search } from 'lucide-react';

// Importamos el componente de UI que crearemos más adelante.
// Este componente es necesario para que HeroSection funcione correctamente.
import FeatureIcon from '../ui/FeatureIcon';

// Definimos el componente funcional HeroSection
export default function HeroSection() {
  return (
    // Contenedor de la sección con su ID para la navegación y estilos de fondo
    <section 
      id="servicios" 
      className="relative py-20 md:py-32 text-center bg-cover bg-center" 
      style={{backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 1)), url('https://placehold.co/1920x1080/0f172a/1e293b?text=...')"}}
    >
      <div className="container mx-auto px-6 z-10">
        {/* Título principal de la sección */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow-lg">
          ¿Fuiste Víctima de una Estafa en Línea?
        </h1>
        
        {/* Párrafo descriptivo */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          No estás solo. Somos investigadores privados expertos en rastreo digital. Te ayudamos a encontrar respuestas y a trazar un plan de acción.
        </p>
        
        {/* Botón principal de llamada a la acción */}
        <a 
          href="#servicios" 
          className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Evaluar mi Caso AHORA
        </a>
        
        {/* Contenedor para las características destacadas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Usamos el componente FeatureIcon tres veces para mostrar las características */}
          <FeatureIcon icon={<ShieldCheck className="w-6 h-6 text-sky-400"/>}>
            Análisis Profesional
          </FeatureIcon>
          <FeatureIcon icon={<Users className="w-6 h-6 text-sky-400"/>}>
            Soporte a Víctimas
          </FeatureIcon>
          <FeatureIcon icon={<Search className="w-6 h-6 text-sky-400"/>}>
            Investigación Digital
          </FeatureIcon>
        </div>
      </div>
    </section>
  );
}
