import { ParquesNavegacion } from "@/components/estructura/ParquesNavegacion/ParquesNavegacion";

export default function ParquesLayout({ children }) {
  return (
    <div className="flex flex-col w-full items-center">
      <ParquesNavegacion /> {/* Navbar exclusivo para Parques */}
      <main className="w-full">
        {children}
        </main> {/* Contenido dinámico (subpáginas de Parques) */}
    </div>
  );
}
