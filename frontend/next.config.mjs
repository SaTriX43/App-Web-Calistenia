import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url); // Obtiene el nombre del archivo actual
const __dirname = path.dirname(__filename); // Obtiene el directorio actual

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'res.cloudinary.com'  // <--- Agregar Cloudinary si es necesario
    ],
  },
  experimental: {
    middleware: true
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Usa __dirname correctamente
    return config;
  },
};

export default nextConfig;
