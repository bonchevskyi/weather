import React from "react";
import { StyledHighlights } from "./Highlights.styled";
import { convertC, convertF } from "../../utils/converter";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { TbTemperatureMinus, TbTemperaturePlus } from "react-icons/tb";

const Highlights = ({ data, tempUnit }) => (
  <StyledHighlights>
    {console.log("Highlights data:", data)}
    {data && (
      <div className="highlights_info">
        <h1>Today's Highlights</h1>
        <div className="highlights_inner">
          <div className="box_info">
            <span className="type-info">°MIN & °MAX</span>
            <div className="icon-temp_min">
              <span>
                <TbTemperatureMinus />
              </span>
              {tempUnit
                ? convertF(data?.main?.temp_min).toFixed(0)
                : convertC(data?.main?.temp_min).toFixed(0)}
              ° {tempUnit ? "F" : "C"}
            </div>
            <div className="icon-temp_max">
              <span>
                <TbTemperaturePlus />
              </span>
              {tempUnit
                ? convertF(data?.main?.temp_max).toFixed(0)
                : convertC(data?.main?.temp_max).toFixed(0)}
              ° {tempUnit ? "F" : "C"}
            </div>
          </div>
          <div className="box_info">
            <span className="type-info">Wind Speed</span>
            <div className="info-text">
              <span>{data?.wind?.speed}</span> km/s
            </div>
          </div>
          <div className="box_info">
            <span className="type-info">Sunrise & Sunset</span>
            <div className="sunrise icon">
              <span>
                <FiArrowUp />
              </span>
              {new Date(data?.sys?.sunrise * 1000).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </div>
            <div className="sunset icon">
              <span>
                <FiArrowDown />
              </span>
              {new Date(data?.sys?.sunset * 1000).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </div>
          </div>
          <div className="box_info">
            <span className="type-info">Humidity</span>
            <div className="flex-box">
              <span className="icon-h">
                <WiHumidity />
              </span>
              <span className="info-text">
                <span>{data?.main?.humidity}</span>%{" "}
              </span>
            </div>
          </div>
          <div className="box_info">
            <span className="type-info">Pressure</span>
            <div className="flex-box">
              <span className="icon-p">
                <WiBarometer />
              </span>
              <span className="info-text">
                <span>{data?.main?.pressure}</span>hPa{" "}
              </span>
            </div>
          </div>
          <div className="box_info">
            <span className="type-info">Visibility</span>
            <div className="flex-box">
              <span className="icon-v">
                <MdVisibility />
              </span>
              <span className="info-text">
                <span>{(data?.visibility / 1000).toFixed(1)}</span>km{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    )}
  </StyledHighlights>
);

export default Highlights;
