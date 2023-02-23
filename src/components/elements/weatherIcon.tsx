interface Props {
    icon: string,
}

function WeatherIcon({ icon }: Props) {
    return (
        <div className="icon_weather">
            <img
              src={`assets/${icon}.png`}
              width="150"
              alt="weather icon"
            />
        </div>
    );
}

export default WeatherIcon;
