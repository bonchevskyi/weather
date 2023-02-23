interface ImportMetaEnv {
    readonly VITE_WEATHER_KEY: string;
    readonly VITE_UNSPLASH_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
