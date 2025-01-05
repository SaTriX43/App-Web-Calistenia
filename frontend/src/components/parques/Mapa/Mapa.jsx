import React, { memo, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
  mostrarMarcador = false, // Nuevo prop para controlar el marcador principal
}) {
  const mapRef = useRef(null); // Referencia al mapa

  // Centrar el mapa cuando cambien las coordenadas
  useEffect(() => {
    if (mapRef.current) {
      const mapa = mapRef.current;
      mapa.flyTo([latitud, longitud], zoom || 14);
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

      {/* Marcador principal (controlado por mostrarMarcador) */}
      {mostrarMarcador && (
        <Marker
          position={[latitud, longitud]}
          icon={parqueIcon}
          draggable={true}
          eventHandlers={{
            dragend: (e) => {
              const { lat, lng } = e.target.getLatLng();
              if (manejarCoordenadas) manejarCoordenadas(lat, lng); // Notificar cambios
            },
          }}
        >
          <Popup>
            <strong>Nueva Ubicación</strong>
          </Popup>
        </Marker>
      )}

      {/* Otros marcadores (ubicaciones proporcionadas) */}
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
