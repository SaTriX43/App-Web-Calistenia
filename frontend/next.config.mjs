/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.pixabay.com', 'mobipark.com', 'www.krealiagestion.com', 'equidesa.com'],// Dominios permitidos
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint en el build
  },
};

export default nextConfig;
