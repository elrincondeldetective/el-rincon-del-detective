
import { Quote } from 'lucide-react';

// Definimos los tipos para las props que el componente espera recibir.
// Esto asegura que siempre se le pasen los datos correctos (cita, autor y rol).
type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

// Definimos el componente funcional TestimonialCard.
// Recibe las props 'quote', 'author', y 'role' para mostrar la información.
export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    // Contenedor principal de la tarjeta con estilos de fondo, padding, bordes redondeados y sombra.
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg ring-1 ring-slate-700">
      {/* Ícono de comillas que añade un toque visual a la cita. */}
      <Quote className="w-8 h-8 text-amber-500 mb-4" />
      
      {/* El texto de la cita, en itálica para diferenciarlo. */}
      <p className="text-slate-300 mb-4 italic">&ldquo;{quote}&rdquo;</p>
      
      {/* Contenedor para la información del autor, alineado a la derecha. */}
      <div className="text-right">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-amber-400">{role}</p>
      </div>
    </div>
  );
}
