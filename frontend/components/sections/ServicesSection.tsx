// frontend/src/components/sections/ServicesSection.tsx
import { FileText, SearchCode, Handshake } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import PageHeader from '../ui/PageHeader';

// Separamos los datos de la lógica de renderizado para mantener el código limpio.
const servicesData = [
  {
    icon: <SearchCode className="w-8 h-8 text-sky-400" />,
    title: "Análisis de Viabilidad",
    priceModel: "Tarifa Fija y Baja",
    description: "Realizamos un análisis preliminar para evaluar la trazabilidad y probabilidad de éxito, entregándote un plan de acción inicial.",
    idealFor: [
      "Quienes necesitan una primera orientación profesional sin un gran desembolso.",
      "Casos de montos pequeños donde una investigación completa no es rentable.",
      "Personas que desean gestionar el caso por sí mismas pero con una guía experta."
    ],
    buttonText: "Solicitar Análisis"
  },
  {
    icon: <FileText className="w-8 h-8 text-sky-400" />,
    title: "Investigación y Dossier",
    priceModel: "Tarifa Fija por Complejidad",
    description: "Llevamos a cabo una investigación digital exhaustiva y compilamos un dossier de pruebas profesional, listo para ser presentado ante autoridades.",
    idealFor: [
      "Víctimas que necesitan pruebas sólidas para una denuncia formal.",
      "Casos donde se requiere identificar la huella digital del estafador.",
      "Aquellos que buscan un fundamento técnico para acciones legales o bancarias."
    ],
    buttonText: "Iniciar Investigación"
  },
  {
    icon: <Handshake className="w-8 h-8 text-sky-400" />,
    title: "Gestión de Recuperación",
    priceModel: "Híbrido: Fijo + Comisión de Éxito",
    description: "Gestionamos todo el proceso: investigamos, coordinamos la acción legal con abogados asociados y negociamos con entidades.",
    idealFor: [
      "Casos de estafas con montos significativos.",
      "Clientes que prefieren delegar todo el proceso en manos de expertos.",
      "Situaciones complejas que requieren una estrategia legal y de investigación integrada."
    ],
    buttonText: "Más Información"
  }
];

// Definimos el componente funcional para la sección de servicios.
export default function ServicesSection() {
  return (
    // Es MUY IMPORTANTE añadir el id="servicios" aquí para que el enlace del menú funcione.
    <section id="servicios" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        {/* Usamos el componente reutilizable PageHeader para el título y la descripción. */}
        <PageHeader title="Nuestros Servicios de Justicia Digital">
          Transformamos la incertidumbre en un plan de acción claro. Investigamos para darte las herramientas y la tranquilidad que necesitas.
        </PageHeader>

        {/* Creamos un grid para mostrar las tarjetas de servicio. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Mapeamos los datos de los servicios para crear una ServiceCard por cada uno. */}
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
