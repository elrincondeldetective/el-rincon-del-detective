// frontend/src/components/ui/FeatureIcon.tsx
import React from 'react';

// Definimos los tipos de las props que el componente recibirá.
// 'icon' y 'children' pueden ser cualquier elemento válido de React.
type FeatureIconProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

// Definimos el componente funcional FeatureIcon, usando los tipos definidos.
export default function FeatureIcon({ icon, children }: FeatureIconProps) {
  return (
    // Contenedor principal que alinea el ícono y el texto horizontalmente.
    <div className="flex items-center space-x-2 text-slate-300">
      {/* El 'icon' se renderiza aquí. Puede ser un SVG o un componente de ícono. */}
      {icon}
      {/* El 'children' (generalmente el texto) se renderiza dentro de un span. */}
      <span>{children}</span>
    </div>
  );
}
