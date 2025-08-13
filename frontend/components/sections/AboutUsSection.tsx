// frontend/src/components/sections/AboutUsSection.tsx
import Image from 'next/image';
import { Target, Shield, HeartHandshake, Lightbulb } from 'lucide-react';
import ValueCard from '../ui/ValueCard';

export default function AboutUsSection() {

  return (
    // Es MUY IMPORTANTE añadir un nuevo id, "sobre-nosotros", para el enlace del menú.
    <section id="sobre-nosotros" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-6">

        {/* --- TÍTULO Y MISIÓN --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Target className="w-16 h-16 mx-auto mb-4 text-amber-500" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow-lg">
            Nuestra Misión
          </h2>
          <p className="text-xl italic text-slate-300">
            &ldquo;Creemos que nadie debería enfrentar la injusticia solo. Nuestra misión es devolverle el poder a la víctima, transformando la confusión y el miedo en claridad y acción, a través de la investigación profesional y el apoyo humano.&rdquo;
          </p>
        </div>


        {/* --- SECCIÓN DEL FUNDADOR --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto mb-24">
          <div className="lg:col-span-2">
            <Image
              src="https://placehold.co/500x500/1e293b/ffffff?text=Fundador"
              alt="Fundador de El Rincón del Detective"
              width={500} 
              height={500} 
              className="rounded-full shadow-2xl mx-auto ring-4 ring-amber-500/50"
              unoptimized 
            />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-bold text-white mb-4">Un Detective para la Era Digital</h3>
            <p className="text-slate-300 mb-4 text-lg">
              Mi nombre es [Tu Nombre], y fundé &ldquo;El Rincón del Detective&rdquo; por una doble pasión: la fascinación por el arte de la deducción y una profunda necesidad de combatir la injusticia que prolifera en el anonimato de internet.
            </p>
            <p className="text-slate-400 mb-4">
              Durante años, vi cómo amigos, familiares y noticias reportaban estafas donde las víctimas se sentían completamente desamparadas. La tecnología que nos conecta también se había convertido en un arma para los estafadores. Decidí que no podía quedarme de brazos cruzados.
            </p>
            <p className="text-slate-400">
              Combinando mi experiencia en [menciona tu área, ej: análisis de sistemas, seguridad informática, o simplemente investigación autodidacta] con técnicas de OSINT (Inteligencia de Fuentes Abiertas), creé este espacio no solo para resolver casos, sino para educar y empoderar a nuestra comunidad. Cada caso es un rompecabezas, y cada cliente satisfecho es nuestra mayor recompensa.
            </p>
          </div>
        </div>

        {/* --- NUESTROS VALORES --- */}
        <div className="border-t border-slate-800 pt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Nuestros Pilares</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <ValueCard icon={<Shield className="w-10 h-10 text-sky-400" />} title="Confidencialidad">
              Tu privacidad es sagrada. Manejamos cada caso con la más estricta discreción y seguridad.
            </ValueCard>
            <ValueCard icon={<HeartHandshake className="w-10 h-10 text-sky-400" />} title="Empatía">
              Entendemos tu situación. No solo somos tus investigadores, somos tus aliados en este proceso.
            </ValueCard>
            <ValueCard icon={<Lightbulb className="w-10 h-10 text-sky-400" />} title="Transparencia">
              Te mantenemos informado en cada paso. Creemos en una comunicación honesta y directa, sin falsas promesas.
            </ValueCard>
          </div>
        </div>

      </div>
    </section>
  );
}