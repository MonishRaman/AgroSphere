import { useState } from "react";

export function useGeolocation() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (error) => {
          let errorMessage = "Unable to retrieve your location.";
          if (error.code === 1) {
            errorMessage = "Permission denied. Please allow location access.";
          } else if (error.code === 2) {
            errorMessage = "Location is unavailable.";
          } else if (error.code === 3) {
            errorMessage = "Location request timed out.";
          }
          setError(errorMessage);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return { location, error, getUserLocation };
}