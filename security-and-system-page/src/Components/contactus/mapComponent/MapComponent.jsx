"use client";
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxMap = () => {
  const [viewState, setViewState] = useState({
    longitude: -58.5984318,
    latitude: -34.6592372,
    zoom: 15,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{
        width: "100%",
        height: "550px",
      }}
      // mapStyle="mapbox://styles/mapbox/dark-v11"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      mapboxAccessToken="pk.eyJ1IjoiYWd1c2FzYWFkIiwiYSI6ImNsemgzNXUydzAwZDkybnExMW8zdW5iZW8ifQ.x5laM7Zzju6dInkN78mwhA" // Reemplaza con tu token de acceso
    >
      <Marker
        longitude={-58.5984318}
        latitude={-34.6592372}
        onClick={() =>
          setSelectedLocation({
            longitude: -58.5984318,
            latitude: -34.6592372,
            title: "Ubicación Ejemplo",
          })
        }
      />
      {selectedLocation && (
        <Popup
          longitude={selectedLocation.longitude}
          latitude={selectedLocation.latitude}
          anchor="bottom"
          onClose={() => setSelectedLocation(null)}
        >
          <div>{selectedLocation.title}</div>
        </Popup>
      )}
    </Map>
  );
};

export default MapboxMap;
