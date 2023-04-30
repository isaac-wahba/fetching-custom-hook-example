import React from 'react';
import useGeolocation from './useGeoLocation';

const GeoLocationExample = () => {
  const { coordinates, error } = useGeolocation();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!coordinates) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Your current location:</h1>
      <ul>
        <li>Latitude: {coordinates.latitude}</li>
        <li>Longitude: {coordinates.longitude}</li>
      </ul>
    </div>
  );
};

export default GeoLocationExample;
