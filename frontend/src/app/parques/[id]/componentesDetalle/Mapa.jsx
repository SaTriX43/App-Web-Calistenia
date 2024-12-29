import React, { memo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Styles from './Mapa.module.css';
import Link from 'next/link';

// Define el ícono personalizado
const parqueIcon = new L.Icon({
  iconUrl: '/parque-icon.svg', // Ruta del ícono desde la carpeta pública
  iconSize: [32, 32],          // Tamaño del ícono
  iconAnchor: [16, 32],        // Punto de anclaje del ícono
  popupAnchor: [0, -32],       // Punto de anclaje del popup
});

const Mapa = memo(function Mapa({ latitud, longitud, nombre, ubicaciones }) {
  if (!latitud || !longitud) return <p>Cargando mapa...</p>;

  return (
    <MapContainer
      center={[latitud, longitud]}
      zoom={14}
      className={Styles['parques__detalle-parque-mapa']}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[latitud, longitud]} icon={parqueIcon}>
        <Popup>
          <strong>{nombre}</strong>
        </Popup>
      </Marker>

      {ubicaciones.map((parque) => (
        <Marker 
          key={parque.id}
          position={[parque.latitud, parque.longitud]} 
          icon={parqueIcon}
        >
          <Popup>
            <Link href={`/parques/${parque.id}`}>
              <strong>{parque.nombre}</strong>
              <br/>
              <strong>{parque.direccion}</strong>
            </Link>
            
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
});

export default Mapa;
