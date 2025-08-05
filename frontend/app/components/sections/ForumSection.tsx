// frontend/src/components/sections/ForumSection.tsx
import { Users } from 'lucide-react';
import ChannelCard from '../ui/ChannelCard';
import { forumChannels } from '../../data/forumChannels';

export default function ForumSection() {
  return (
    <section id="comunidad" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Users className="w-16 h-16 mx-auto mb-4 text-amber-500"/>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow-lg">
            Únete a la Comunidad
          </h2>
          <p className="text-lg text-slate-300">
            Un espacio para conectar, debatir y apoyarnos. Aquí, tu voz y tu experiencia son importantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Lógica para posicionar las tarjetas como en el diseño original */}
          <div className="lg:col-start-2">
             <ChannelCard channel={forumChannels.find(c => c.isSpecial)!} />
          </div>
          <div className="lg:col-start-1 lg:row-start-1">
             <ChannelCard channel={forumChannels.find(c => c.title.includes('Debate'))!} />
          </div>
          <div className="lg:col-start-3 lg:row-start-1">
            <ChannelCard channel={forumChannels.find(c => c.title.includes('Ficción'))!} />
          </div>
        </div>

      </div>
    </section>
  );
}
