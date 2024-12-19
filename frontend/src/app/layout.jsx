import { BarraNavegacion } from "@/components/estructura/BarraNavegacion/BarraNavegacion.jsx";
import "../estilos/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BarraNavegacion/>
        {children}
      </body>
    </html>
  );
}
