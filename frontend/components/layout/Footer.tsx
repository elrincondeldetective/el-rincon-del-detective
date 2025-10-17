// frontend/src/components/layout/Footer.tsx
export default function Footer() {
  // Obtenemos el año actual dinámicamente para el aviso de copyright
  const currentYear = new Date().getFullYear();

  return (
    // El elemento footer sirve como contenedor principal del pie de página
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-400">
        {/* Párrafo de copyright con el año actual */}
        <p>
          &copy; {currentYear} ElRinconDelDetective®. Todos los derechos
          reservados.
        </p>

        {/* Lema o eslogan del sitio */}
        <p className="text-sm mt-2">
          Un espacio para la verdad y la justicia en la era digital.
        </p>
      </div>
    </footer>
  );
}
