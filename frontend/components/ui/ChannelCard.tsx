// frontend/src/components/ui/ChannelCard.tsx
import React from 'react';

// Definimos los tipos para las props que el componente recibirá.
type Channel = {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string;
  posts: string;
  isSpecial: boolean;
};

type ChannelCardProps = {
  channel: Channel;
};

export default function ChannelCard({ channel }: ChannelCardProps) {
  // Clases dinámicas para la tarjeta basadas en si es un canal especial.
  const cardClasses = `
    p-8 rounded-xl shadow-lg flex flex-col h-full 
    transform transition-all duration-300 hover:-translate-y-2
    ${channel.isSpecial 
      ? 'bg-amber-900/20 ring-2 ring-amber-500' 
      : 'bg-slate-800/60 ring-1 ring-slate-700'
    }
  `;

  return (
    <div className={cardClasses}>
      <div className="flex-grow">
        <div className="mb-6 flex items-center space-x-4">
          <div className={`flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0 ${channel.isSpecial ? 'bg-amber-500/10' : 'bg-slate-700/50'}`}>
            {channel.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{channel.title}</h3>
          </div>
        </div>
        <p className="text-slate-300 mb-6">{channel.description}</p>
      </div>
      <div className="mt-auto pt-6 border-t border-slate-700 flex justify-between items-center text-slate-400 font-semibold">
        <div className="text-center">
          <p className="text-white text-lg">{channel.topics}</p>
          <p className="text-sm">Temas</p>
        </div>
        <div className="text-center">
          <p className="text-white text-lg">{channel.posts}</p>
          <p className="text-sm">Publicaciones</p>
        </div>
        <button className={`font-bold py-2 px-4 rounded-lg transition-colors ${channel.isSpecial ? 'bg-amber-500 text-slate-900 hover:bg-amber-600' : 'bg-sky-500 text-white hover:bg-sky-600'}`}>
          Entrar
        </button>
      </div>
    </div>
  );
};
