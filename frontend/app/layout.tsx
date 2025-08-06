// frontend/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Next.js optimiza las fuentes por ti
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// ¡Aquí pones los metadatos para el SEO!
export const metadata: Metadata = {
  title: "El Rincón del Detective - Investigadores de Estafas Online",
  description: "Expertos en rastreo digital. Te ayudamos a encontrar respuestas y a trazar un plan de acción contra estafas en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-900 min-h-screen font-sans text-white`}>
        <Navbar />
        {children} {/* Aquí es donde se renderizará tu `page.tsx` */}
        <Footer />
      </body>
    </html>
  );
}