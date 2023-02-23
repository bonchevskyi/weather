import { useState, useEffect } from 'react';

const useTheme = () => {
    const checkTheme = window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [nightMode, setNightMode] = useState(checkTheme);

    const nightModeChanged = () => {
        setNightMode(!nightMode);
        localStorage.setItem('theme', JSON.stringify(!nightMode));
    };

    useEffect(() => {
        if (localStorage.getItem('theme') === 'false') {
            setNightMode(false);
        }
    }, []);
    return [nightMode, nightModeChanged] as const;
};

export default useTheme;
