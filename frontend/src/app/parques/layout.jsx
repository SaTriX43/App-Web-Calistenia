import { ParquesNavegacion } from "@/components/estructura/ParquesNavegacion/ParquesNavegacion";

export default function ParquesLayout({ children }) {
  return (
    <div>
      <ParquesNavegacion /> {/* Navbar exclusivo para Parques */}
      <main>{children}</main> {/* Contenido dinámico (subpáginas de Parques) */}
    </div>
  );
}
