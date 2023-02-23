// OPEN WEATHER & UNSPLASH API KEYS
const API_APPID = import.meta.env.VITE_WEATHER_KEY;
const API_UNPSLASH = import.meta.env.VITE_UNSPLASH_KEY;

const API_URL_APPID = 'https://api.openweathermap.org/data/2.5/weather';
const DEFAULT_URL = `${API_URL_APPID}/?APPID=${API_APPID}&lat=50.7593&lon=25.3424`;
const SEARCH_BY_LOCATION = `${API_URL_APPID}?appid=${API_APPID}`;

const GET_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_APPID}`;
const DEF_N_D_H = `https://api.openweathermap.org/data/2.5/forecast?&lat=50.7593&lon=25.3424&appid=${API_APPID}`;

// UNSPLASH
const URL_UNSPLASH = 'https://api.unsplash.com/search/photos';
const SEARCH_BY_WORD = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=`;
const SEARCH_DEFAULT = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=Ukraine`;

export {
    API_URL_APPID,
    API_APPID,
    DEFAULT_URL,
    SEARCH_BY_LOCATION,
    SEARCH_BY_WORD,
    SEARCH_DEFAULT,
    GET_NEXT_DAYS_HOURS,
    DEF_N_D_H,
};
