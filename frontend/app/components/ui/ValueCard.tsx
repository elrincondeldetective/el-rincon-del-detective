// frontend/src/components/ui/ValueCard.tsx
import React from 'react';

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

export default function ValueCard({ icon, title, children }: ValueCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/50 ring-1 ring-slate-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{children}</p>
    </div>
  );
}
