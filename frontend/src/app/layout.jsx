import { BarraNavegacion } from "@/components/estructura/BarraNavegacion/BarraNavegacion.jsx";
import "../estilos/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos manualmente
config.autoAddCss = false; // Deshabilita la carga automática de CSS



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BarraNavegacion/>
        <div className="container max-w-[1000px]">
          {children}
        </div>
      </body>
    </html>
  );
}
