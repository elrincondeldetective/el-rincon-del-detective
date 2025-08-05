// frontend/src/data/forumChannels.tsx
import { BrainCircuit, Film, ShieldQuestion } from 'lucide-react';

// Exportamos los datos para que puedan ser utilizados en la sección del foro.
export const forumChannels = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-sky-400" />,
    title: 'Debate de Casos Reales',
    description: 'Analiza y comparte tus teorías sobre los misterios y crímenes que exploramos en el blog.',
    topics: '138 Temas',
    posts: '1.2k Publicaciones',
    isSpecial: false,
  },
  {
    icon: <Film className="w-8 h-8 text-sky-400" />,
    title: 'Ficción y Cultura Pop',
    description: 'Reseñas y recomendaciones de libros, series y películas del género detectivesco y de misterio.',
    topics: '72 Temas',
    posts: '845 Publicaciones',
    isSpecial: false,
  },
  {
    icon: <ShieldQuestion className="w-8 h-8 text-amber-400" />,
    title: 'Canal de Apoyo Anónimo',
    description: 'Un espacio seguro y confidencial para compartir experiencias sobre estafas y recibir apoyo de la comunidad.',
    topics: '215 Temas',
    posts: '2.5k Publicaciones',
    isSpecial: true,
  }
];