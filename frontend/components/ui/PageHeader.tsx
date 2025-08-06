// frontend/src/components/ui/PageHeader.tsx
import React from 'react';

// Definimos los tipos para las props que el componente recibirá.
// 'title' es el encabezado principal.
// 'children' será el párrafo de descripción que se pasa al componente.
type PageHeaderProps = {
  title: string;
  children: React.ReactNode;
};

// Definimos el componente funcional PageHeader.
export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    // Contenedor principal que centra el contenido y establece un margen inferior.
    <div className="text-center max-w-3xl mx-auto mb-16">
      {/* Título principal de la página o sección */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow-lg">
        {title}
      </h1>
      {/* Párrafo descriptivo. El contenido viene de lo que se ponga dentro del componente. */}
      <p className="text-lg text-slate-300">
        {children}
      </p>
    </div>
  );
}
