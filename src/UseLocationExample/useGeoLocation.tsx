import { useState, useEffect } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
    };

    const failure = (error: GeolocationPositionError) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(success, failure);
  }, []);

  return { coordinates, error };
};

export default useGeolocation;
