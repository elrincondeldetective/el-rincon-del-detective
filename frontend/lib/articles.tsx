// frontend/src/data/articles.ts
import { ShieldAlert, Landmark, FlaskConical, BookMarked } from 'lucide-react';

// Exportamos los datos para poder importarlos desde cualquier componente.
export const articles = [
  {
    category: 'Guía Anti-Estafas',
    title: '5 Señales de Alerta para Detectar una Tienda Online Falsa',
    excerpt: 'Antes de hacer clic en "comprar", aprende a identificar los indicios de un sitio fraudulento y protege tu dinero.',
    image: 'https://placehold.co/600x400/1e293b/amber-500?text=Alerta',
    icon: <ShieldAlert className="w-5 h-5 mr-2" />,
  },
  {
    category: 'Casos Reales',
    title: 'El Misterio del Ladrón Fantasma de Bogotá: ¿Quién fue "El Chucho" Valderrama?',
    excerpt: 'Analizamos la historia y las técnicas de uno de los estafadores más notorios de la historia de Colombia.',
    image: 'https://placehold.co/600x400/1e293b/amber-500?text=Caso+Real',
    icon: <Landmark className="w-5 h-5 mr-2" />,
  },
  {
    category: 'Laboratorio Forense',
    title: 'Introducción a OSINT: Cómo los Detectives Usan Información Pública para Rastrear Pistas',
    excerpt: 'Descubre las herramientas y metodologías de la Inteligencia de Fuentes Abiertas (OSINT) que usamos en nuestras investigaciones.',
    image: 'https://placehold.co/600x400/1e293b/amber-500?text=OSINT',
    icon: <FlaskConical className="w-5 h-5 mr-2" />,
  },
  {
    category: 'Guía Anti-Estafas',
    title: 'Estafas por WhatsApp: Cómo Proteger a tus Familiares Mayores',
    excerpt: 'Una guía paso a paso para educar y proteger a los más vulnerables de los engaños más comunes en mensajería.',
    image: 'https://placehold.co/600x400/1e293b/amber-500?text=WhatsApp',
    icon: <ShieldAlert className="w-5 h-5 mr-2" />,
  },
  {
    category: 'Biblioteca del Detective',
    title: 'Reseña: "El silencio de los corderos" - Más Allá del Terror',
    excerpt: 'Analizamos las técnicas de perfilación criminal y la psicología forense presentes en este clásico de la literatura y el cine.',
    image: 'https://placehold.co/600x400/1e293b/amber-500?text=Reseña',
    icon: <BookMarked className="w-5 h-5 mr-2" />,
  },
  {
    category: 'Casos Reales',
    title: 'La Estafa del "Romance Scam": Cuando el Amor Cuesta una Fortuna',
    excerpt: 'Exploramos las tácticas de manipulación emocional utilizadas por los estafadores sentimentales y cómo evitar caer en sus redes.',
    image: 'https://placehold.co/600x400/1e293b/amber-500?text=Romance',
    icon: <Landmark className="w-5 h-5 mr-2" />,
  },
];
