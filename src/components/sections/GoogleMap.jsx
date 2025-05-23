import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "530px",
};

const center = {
  lat: 23.0347275,
  lng: 72.6307826,
};

const MapContainer = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GMAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          draggable: true,
          gestureHandling: "auto",
          scrollwheel: true,
          zoomControl: true,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          disableDefaultUI: true,
        }}
      >
        <Marker position={center} />
      </GoogleMap>

      <div className="view-map">
        <a
          href="https://www.google.com/maps?q=25.276987,55.296249"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Larger Map
        </a>
      </div>
    </div>
  );
};

export default MapContainer;
