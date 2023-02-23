import { useState, useEffect } from 'react';

const useUnits = () => {
    const [unitMode, setUnitMode] = useState(false);

    const unitModeChanged = () => {
        setUnitMode(!unitMode);
        localStorage.setItem('unit', JSON.stringify(!unitMode));
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('unit'))) {
            setUnitMode(!unitMode);
        } else {
            localStorage.setItem('unit', JSON.stringify(unitMode));
        }
    }, []);
    return [unitMode, unitModeChanged] as const;
};

export default useUnits;
