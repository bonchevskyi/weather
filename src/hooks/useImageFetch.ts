import { useState, useEffect } from 'react';
import { SEARCH_DEFAULT } from 'api';

const useImageFetch = () => {
    const [image, setImage] = useState('');
    const fecthImage = async (endpoint) => {
        try {
            const result = await (await fetch(endpoint)).json();
            setImage(result.results[Math.floor(Math.random() * 10)].urls.regular);
        } catch {
            throw new Error('Error during image fetch!');
        }
    };
    useEffect(() => {
        fecthImage(`${SEARCH_DEFAULT}`);
    }, []);

    return [image, fecthImage] as const;
};

export default useImageFetch;
