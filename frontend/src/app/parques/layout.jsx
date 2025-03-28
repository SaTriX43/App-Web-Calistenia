import { ParquesNavegacion } from "@/components/estructura/paginaParques/ParquesNavegacion/ParquesNavegacion";

export const metadata = {
  title: "Parques de Calistenia - Calistenia Ecuador",
  description: "Explora los mejores parques de calistenia en Ecuador, encuentra ubicaciones y conecta con la comunidad.",
};

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
