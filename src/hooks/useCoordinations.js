import { useState } from "react";

export const useCoordinations = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const findCoordinates = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos);
          setLat(pos.coords.latitude);
          setLong(pos.coords.longitude);
        },
        (positionError) => {
          setLat("50.7593");
          setLong("25.3424");
          console.log(positionError);
        }
      );
      setLoadingLocation(false);
    } else {
      console.log("Location detector is not supported by this browser!");
    }
  };

  const updateLocation = (lat, long) => {
    setLat(lat);
    setLong(long);
  };

  return [{ lat, long }, loadingLocation, findCoordinates, updateLocation];
};
