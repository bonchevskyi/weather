import { countries } from 'country-data';
import SearchBar from 'components/elements/searchBar';
import WeatherIcon from 'components/elements/weatherIcon';
import LocationBox from 'components/elements/locationBox';
import WeatherInfo from 'components/elements/weatherInfo';
import {
    WeatherIT,
    WeatherObjectIT,
} from 'types';
import StyledSidebar from './Sidebar.styled';

interface Props {
    findCoordinates(): void,
    searchCallback(term: string): void,
    image: string,
    error: boolean,
    tempUnit: boolean,
    titleLocation: WeatherObjectIT,
    data: WeatherIT,
}

function Sidebar({
    findCoordinates,
    searchCallback,
    image,
    titleLocation,
    error,
    data,
    tempUnit,
}: Props) {
    return (
        <StyledSidebar>
            <SearchBar
              findCoordinates={findCoordinates}
              searchCallback={searchCallback}
              error={error}
            />
            {data && <WeatherIcon icon={data.weather[0].icon} />}
            <WeatherInfo data={data} unit={tempUnit} />
            {titleLocation?.city && (
                <LocationBox
                  image={image}
                  titleLocation={
            `${titleLocation.city}, ${countries[titleLocation.country].name}`
          }
                />
      )}
        </StyledSidebar>
    );
}

export default Sidebar;
