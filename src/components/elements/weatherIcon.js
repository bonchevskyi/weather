import React from "react";
const WeatherIcon = ({ icon }) => (
  <div className="icon_weather">
    <img
      src={require("../../images/v2/" + icon + ".png")}
      width="150"
      alt="weather icon"
    />
  </div>
);

export default WeatherIcon;
