import { BarraNavegacion } from "@/components/estructura/BarraNavegacion/BarraNavegacion.jsx";
import "../estilos/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos manualmente
import { Suspense } from "react";
import Head from "next/head";
config.autoAddCss = false; // Deshabilita la carga automática de CSS



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Calistenia en Ecuador - Encuentra parques de calistenia</title>
        <meta name="description" content="Descubre los mejores parques de calistenia en Ecuador. Información sobre ubicaciones, reseñas y más." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="calistenia, Ecuador, parques, entrenamiento, fitness" />
        {/* opne grahp  */}
        <meta property="og:title" content="Calistenia Ecuador" />
        <meta property="og:description" content="Descubre los mejores parques de calistenia en Ecuador." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://app-calistenia.vercel.app/" />
        <meta property="og:image" content="https://res.cloudinary.com/do2t2cxvo/image/upload/v1738339923/parques/cpk1ypyi8mj1kuxxm51w.jpg" />
        {/* Twitter Cards  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Calistenia Ecuador" />
        <meta name="twitter:description" content="Descubre los mejores parques de calistenia en Ecuador." />
        <meta name="twitter:image" content="https://res.cloudinary.com/do2t2cxvo/image/upload/v1738339923/parques/cpk1ypyi8mj1kuxxm51w.jpg" />
      </Head>
      <body>
        <Suspense>
          <BarraNavegacion/>
          <div className="container max-w-[1000px]">
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}
