import React from "react";
import { convertC, convertF } from "../../utils/converter";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaRegGrinBeamSweat } from "react-icons/fa";

const WeatherInfo = ({ data, unit }) => (
  <>
    <div className="temperature">
      {unit
        ? convertF(data.main.temp).toFixed(0)
        : convertC(data.main.temp).toFixed(0)}
      <span className="degree">°</span>{" "}
      <span className="unit">{unit ? "F" : "C"}</span>
    </div>
    <div className="date">
      <span className="day">
        {new Date().toLocaleString("en-US", { weekday: "long" })}
      </span>
      ,
      <span className="hours">
        {new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </span>
    </div>
    <hr />
    <div className="info-weather">
      <div>
        <FaRegGrinBeamSweat size="1.5rem" />
        <span>
          Feels like -{" "}
          {unit
            ? convertF(data.main.feels_like).toFixed(0)
            : convertC(data.main.feels_like).toFixed(0)}{" "}
          ° {unit ? "F" : "C"}
        </span>
      </div>
      {data.clouds && (
        <div>
          <TiWeatherCloudy size="1.5rem" />
          <span>Cloudiness - {data.clouds.all}%</span>
        </div>
      )}
    </div>
  </>
);
export default WeatherInfo;
