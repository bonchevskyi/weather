import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from 'theme/theme';
import useImageFetch from 'hooks/useImageFetch';
import useCoordinations from 'hooks/useCoordinations';
import useWeatherFetch from 'hooks/useWeatherFetch';
import useTheme from 'hooks/useTheme';
import useUnits from 'hooks/useUnits';
import GlobalStyles from 'GlobalStyles';
import { SEARCH_BY_WORD } from 'api';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Highlights from 'components/Highlights/Highlights';
import Sidebar from 'components/Sidebar/Sidebar';
import Spinner from 'components/Spinner/Spinner';
import Today from 'components/Today/Today';
import Week from 'components/Week/Week';

function Main() {
    const [nightMode, nightModeChanged] = useTheme();
    const [unitMode, unitModeChanged] = useUnits();
    const [image, fetchImage] = useImageFetch();

    const [{ lat, long }, loadingLocation, findCoordinates] = useCoordinations();

    const [
        weather,
        loading,
        error,
        searchByLocation,
        getWeatherLocation,
    ] = useWeatherFetch();

    const weatherReady: boolean = weather?.city != null;

    const [showDays, setShowDays] = useState(false);

    const fetchCoordinates = () => {
        findCoordinates();
        getWeatherLocation(lat, long);
    };

    const nightModeCallback = () => {
        nightModeChanged();
    };

    const showDaysCallback = (enabled) => {
        setShowDays(enabled);
    };

    const doSearchLocation = (searchTerm) => {
        searchByLocation(searchTerm);
        fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
    };
    const unitTempCallback = () => {
        unitModeChanged();
    };

    useEffect(() => {
        // default fetching
        getWeatherLocation(lat, long);
        if (weatherReady) {
            fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
        }
    }, [lat, long]);

    useEffect(() => {
        if (weather?.city) {
            fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
        }
    }, [weatherReady]);

    return (
        <ThemeProvider theme={nightMode ? themeDark : themeLight}>
            <div>
                <GlobalStyles />
                { weatherReady && weather.hourly && !loading ? (
                    <>
                        <Sidebar
                          findCoordinates={fetchCoordinates}
                          data={weather.hourly}
                          searchCallback={doSearchLocation}
                          error={error}
                          image={image}
                          titleLocation={weather}
                          tempUnit={unitMode}
                        />
                        <Container>
                            <Header
                              unitMode={unitMode}
                              unitTempCallback={unitTempCallback}
                              nightModeCallback={nightModeCallback}
                              nightMode={nightMode}
                              showDaysCallback={showDaysCallback}
                              showActive={showDays}
                            />
                            {loading || loadingLocation ? (
                                <Spinner />
                        ) : (
                            <>
                                {!showDays ? (
                                    <Week data={weather.daily} tempUnit={unitMode} />
                                ) : (
                                    <Today tempUnit={unitMode} data={weather?.hourly} />
                                )}
                                <Highlights data={weather.hourly} tempUnit={unitMode} />
                            </>
                        )}
                        </Container>
                    </>
            ) : (<Spinner />)}
            </div>
        </ThemeProvider>
    );
}
export default Main;
