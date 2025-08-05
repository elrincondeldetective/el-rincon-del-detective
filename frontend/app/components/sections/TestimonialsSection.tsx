// frontend/src/components/sections/TestimonialsSection.tsx

// Este componente importará la tarjeta de testimonio que crearemos después.
// Asegúrate de que la ruta de importación sea correcta según tu estructura.
import TestimonialCard from '../ui/TestimonialCard';

// Definimos el componente funcional TestimonialsSection
export default function TestimonialsSection() {
  return (
    // Contenedor de la sección con su ID para la navegación y estilos de fondo
    <section id="nosotros" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
            {/* Título principal de la sección */}
            <h2 className="text-3xl font-bold text-center mb-12">La Confianza es Nuestra Principal Pista</h2>
            
            {/* Contenedor tipo grid para alinear las tarjetas de testimonio */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Aquí usamos el componente TestimonialCard. 
                  Pasamos la cita, el autor y el rol como props a cada tarjeta.
                */}
                <TestimonialCard 
                    quote="Después de ser estafado, me sentía perdido y avergonzado. El equipo me dio un plan claro y me ayudó a entender mis opciones. Su profesionalismo fue increíble."
                    author="J. Pérez"
                    role="Cliente Verificado"
                />
                <TestimonialCard 
                    quote="El análisis de viabilidad fue la mejor inversión. Rápido, honesto y directo. Me ahorró tiempo y me dio la tranquilidad que necesitaba para actuar."
                    author="Ana G."
                    role="Cliente Verificado"
                />
                <TestimonialCard 
                    quote="Como aficionado al 'true crime', los artículos del blog son de lo mejor que he leído. Bien investigados y fascinantes. ¡Y su guía anti-estafas es oro puro!"
                    author="Carlos R."
                    role="Lector del Blog"
                />
            </div>
        </div>
    </section>
  );
}