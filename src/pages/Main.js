import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
  Container,
  Header,
  Highlights,
  Sidebar,
  Spinner,
  Today,
  Week,
} from "../components";
import GlobalStyles from "../GlobalStyles";
import { themeLight, themeDark } from "../theme/theme";
import { useImageFetch } from "../hooks/useImageFetch";
import { useCoordinations } from "../hooks/useCoordinations";
import { useWeatherFetch } from "../hooks/useWeatherFetch";
import { useTheme } from "../hooks/useTheme";
import { useUnits } from "../hooks/useUnits";
import { SEARCH_BY_WORD } from "../api";

const Main = () => {
  const [nightMode, nightModeChanged] = useTheme();
  const [unitMode, unitModeChanged] = useUnits();
  const [image, fetchImage] = useImageFetch();
  const [{ lat, long }, loadingLocation, findCoordinates] = useCoordinations();
  const [
    weather,
    loading,
    error,
    fetchWeather,
    searchByLocation,
    getWeatherLocation,
  ] = useWeatherFetch();
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
  const unitTempCallback = (enabled) => {
    unitModeChanged(enabled);
  };

  //console.log("location", lat, long);
  //console.log("Weather", weather);

  useEffect(() => {
    //default fetching
    getWeatherLocation(lat, long);
    fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
  }, [lat, long]);

  if (!weather)
    return (
      <ThemeProvider theme={nightMode ? themeDark : themeLight}>
        <Spinner />
        <GlobalStyles />
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={nightMode ? themeDark : themeLight}>
      <div>
        <Sidebar
          findCoordinates={fetchCoordinates}
          data={weather}
          searchCallback={doSearchLocation}
          error={error}
          image={image}
          titleLocation={weather}
          unitTemp={unitMode}
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
                <Today tempUnit={unitMode} data={weather.hourly} />
              )}
              <Highlights data={weather} tempUnit={unitMode} />
            </>
          )}
        </Container>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};
export default Main;
