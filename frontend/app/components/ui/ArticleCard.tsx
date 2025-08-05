// frontend/src/components/ui/ArticleCard.tsx
import { ArrowRight } from 'lucide-react';

// Definimos los tipos para las props que el componente recibirá.
// Esto nos ayuda a asegurar que siempre pasamos los datos correctos.
type Article = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  icon: React.ReactNode;
};

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:-translate-y-2">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-amber-400 text-sm font-semibold mb-2">
          {article.icon}
          <span>{article.category.toUpperCase()}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 h-24">{article.title}</h3>
        <p className="text-slate-400 mb-4 h-20">{article.excerpt}</p>
        <a href="#" className="font-bold text-sky-400 flex items-center group-hover:text-sky-300 transition-colors">
          Leer más <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
