import React, { memo, useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Styles from './Mapa.module.css';
import Link from 'next/link';

// Ícono personalizado
const parqueIcon = new L.Icon({
  iconUrl: '/parque-icon.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Mapa = memo(function Mapa({
  latitud,
  longitud,
  ubicaciones = [], // Valor por defecto para evitar errores
  clases,
  zoom,
  manejarCoordenadas,
}) {
  const [posicionMarcador, setPosicionMarcador] = useState([latitud, longitud]);
  const mapRef = useRef(null); // Referencia al mapa para centrarlo

  // Mover el mapa al cambiar coordenadas
  useEffect(() => {
    if (mapRef.current) {
      const mapa = mapRef.current;
      mapa.flyTo([latitud, longitud], zoom || 14);
      setPosicionMarcador([latitud, longitud]); // Actualizar el marcador al centro
    }
  }, [latitud, longitud, zoom]);

  return (
    <MapContainer
      center={[latitud, longitud]}
      zoom={zoom || 14}
      className={Styles[clases]}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)} // Asignar el mapa al ref interno
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Marcador principal */}
      <Marker
        position={posicionMarcador}
        icon={parqueIcon}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const { lat, lng } = e.target.getLatLng();
            setPosicionMarcador([lat, lng]); // Actualizar posición del marcador
            if (manejarCoordenadas) manejarCoordenadas(lat, lng); // Notificar cambios
          },
        }}
      >
        <Popup>
          <strong>Nueva Ubicación</strong>
        </Popup>
      </Marker>

      {/* Verifica que ubicaciones sea un array antes de usar map */}
      {Array.isArray(ubicaciones) &&
        ubicaciones.map((parque) => (
          <Marker
            key={parque.id}
            position={[parque.latitud, parque.longitud]}
            icon={parqueIcon}
          >
            <Popup>
              <Link href={`/parques/${parque.id}`}>
                <strong>{parque.nombre}</strong>
                <br />
                <strong>{parque.direccion}</strong>
              </Link>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
});

export default Mapa;
