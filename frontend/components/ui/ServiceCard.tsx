// src/components/ui/ServiceCard.tsx
import { CheckCircle } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  priceModel: string;
  description: string;
  idealFor: string[];
  buttonText: string;
};

export default function ServiceCard({ icon, title, priceModel, description, idealFor, buttonText }: ServiceCardProps) {
  return (
    <div className="bg-slate-800/60 p-8 rounded-xl shadow-lg ring-1 ring-slate-700 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex-grow">
        <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-slate-700/50 ring-1 ring-amber-500/50 mx-auto">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-center mb-2 text-white">{title}</h3>
        <p className="text-amber-400 text-center font-semibold mb-6">{priceModel}</p>
        <p className="text-slate-300 mb-6 text-center">{description}</p>
        
        <div className="mb-8">
          <p className="font-semibold text-white mb-3 text-center">Ideal para:</p>
          <ul className="space-y-2 text-slate-400">
            {idealFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-auto">
         <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 shadow-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
