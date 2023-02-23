import { useState } from 'react';

const useCoordinations = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [loadingLocation, setLoadingLocation] = useState(false);

    const findCoordinates = () => {
        if (navigator.geolocation) {
            setLoadingLocation(true);
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLat(pos.coords.latitude);
                    setLong(pos.coords.longitude);
                },
                () => {
                    setLat(50.7593);
                    setLong(25.3424);
                },
            );
            setLoadingLocation(false);
        } else {
            throw new Error('Location detector is not supported by this browser!');
        }
    };

    const updateLocation = () => {
        setLat(lat);
        setLong(long);
    };

    return [{ lat, long }, loadingLocation, findCoordinates, updateLocation] as const;
};

export default useCoordinations;
