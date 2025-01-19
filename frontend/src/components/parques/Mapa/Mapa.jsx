import React, { memo, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Styles from './Mapa.module.css';
import Link from 'next/link';

const parqueIcon =
  typeof window !== 'undefined'
    ? new L.Icon({
        iconUrl: '/parque-icon.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })
    : null;

const Mapa = memo(function Mapa({
  latitud,
  longitud,
  ubicaciones = [],
  clases,
  zoom,
  manejarCoordenadas,
  mostrarMarcador = false,
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapa = mapRef.current;
      mapa.flyTo([latitud, longitud], zoom || 14);
    }
  }, [latitud, longitud, zoom]);

  if (typeof window === 'undefined') {
    return null; // Evitar renderizado en el servidor
  }

  return (
    <MapContainer
      center={[latitud, longitud]}
      zoom={zoom || 14}
      className={Styles[clases]}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {mostrarMarcador && parqueIcon && (
        <Marker
          position={[latitud, longitud]}
          icon={parqueIcon}
          draggable
          eventHandlers={{
            dragend: (e) => {
              const { lat, lng } = e.target.getLatLng();
              if (manejarCoordenadas) manejarCoordenadas(lat, lng);
            },
          }}
        >
          <Popup>
            <strong>Nueva Ubicación</strong>
          </Popup>
        </Marker>
      )}

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
