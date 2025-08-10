"use client";
// frontend/src/components/sections/RinconSection.tsx
import { useState } from 'react';
import ArticleCard from '../ui/ArticleCard'; 
import { articles } from '@/lib/articles';

export default function RinconSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  // Obtenemos las categorías dinámicamente de los datos
  const categories = ['Todos', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = activeFilter === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  return (
    <section id="rincon" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow-lg">
            El Rincón del Detective
          </h2>
          <p className="text-lg text-slate-300">
            Tu dosis de misterio, conocimiento y prevención. Explora nuestros análisis y guías para mantenerte un paso por delante.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === category 
                  ? 'bg-amber-500 text-slate-900' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
}
