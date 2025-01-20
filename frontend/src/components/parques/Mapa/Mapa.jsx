'use client';

import React, { memo, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Styles from './Mapa.module.css';
import Link from 'next/link';

// Importar dinámicamente componentes de react-leaflet
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

let L;
if (typeof window !== 'undefined') {
  L = require('leaflet'); // Importar Leaflet dinámicamente
}

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

  // Crear ícono solo en el cliente
  const parqueIcon = L
    ? new L.Icon({
        iconUrl: '/parque-icon.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })
    : null;

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
