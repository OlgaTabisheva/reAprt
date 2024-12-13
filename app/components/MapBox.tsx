import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "550px",
  height: "315px",
};

interface centerMapInterface {
  lat: number;
  lng: number;
}

function MapBox({ lng, lat }: centerMapInterface) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCZzW8pCgGnqGoUSiL2s5GhUM9gMgz0QnI",
  });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState<centerMapInterface>();

  useEffect(() => {
    setCenter({ lat: lat, lng: lng });
  }, [lng, lat]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapBox);
