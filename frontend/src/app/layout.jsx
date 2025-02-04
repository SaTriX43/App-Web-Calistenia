import { BarraNavegacion } from "@/components/estructura/BarraNavegacion/BarraNavegacion.jsx";
import "../estilos/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Suspense } from "react";

config.autoAddCss = false;

export const metadata = {
  title: "Calistenia en Ecuador - Encuentra parques de calistenia",
  description: "Descubre los mejores parques de calistenia en Ecuador. Información sobre ubicaciones, reseñas y más.",
  keywords: ["calistenia Ecuador", "parques calistenia Guayaquil", "entrenamiento al aire libre Ecuador", "entrenamiento", "mapa parques calistenia"],
  charset: "utf-8",
  
  // Open Graph
  openGraph: {
    locale: "es_EC", // Especifica región
    siteName: "Calistenia Ecuador",
    title: "Calistenia Ecuador",
    description: "Descubre los mejores parques de calistenia en Ecuador.",
    url: "https://app-calistenia.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/do2t2cxvo/image/upload/v1738339923/parques/cpk1ypyi8mj1kuxxm51w.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Calistenia Ecuador",
    description: "Descubre los mejores parques de calistenia en Ecuador.",
    images: ["https://res.cloudinary.com/do2t2cxvo/image/upload/v1738339923/parques/cpk1ypyi8mj1kuxxm51w.jpg"],
  },

  // Favicon
  icons: {
    icon: "/logo-calistenia.png", // Ruta corregida
  },

  canonical: "https://app-calistenia.vercel.app/",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Suspense fallback={<div>...Cargando</div>}>
          <BarraNavegacion/>
          <div className="container max-w-[1000px]">
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}