// /webapps/erd-ecosystem/apps/el-rincon-del-detective/frontend/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CAMBIO FASE 4.1: Generar salida estática (HTML/CSS/JS)
  // Esto crea la carpeta 'out' que Amplify Gen 2 puede hostear fácilmente.
  output: 'export',

  images: {
    // Requerido para 'output: export' ya que no hay servidor de Node para procesar imágenes al vuelo
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;