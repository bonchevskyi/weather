import { useState, useEffect } from "react";
import {
  SEARCH_BY_LOCATION,
  DEFAULT_URL,
  API_URL_APPID,
  API_APPID,
  GET_NEXT_DAYS_HOURS,
  DEF_N_D_H,
} from "../api";

export const useWeatherFetch = (searchCity, lat = "", long = "") => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getFrequentArr = (arr) => {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  };

  const fetchWeather = async (endpoint) => {
    try {
      const result = await (await fetch(endpoint)).json();
      return result;
    } catch (error) {
      console.log("Weather fetch error:", error);
    }
  };

  //searching by location name
  const searchByLocation = (searchCity) => {
    if (searchCity) {
      setLoading(true);
      const search = searchCity.charAt(0).toUpperCase() + searchCity.slice(1);
      fetchWeather(`${API_URL_APPID}/?q=${search}&APPID=${API_APPID}`).then(
        (res) => {
          if (res.cod !== "404") {
            setWeather({ ...res, city: res.name, country: res.sys.country });
            setError(false);
            //fetch next 5 days & hourly data via lat and long
            const lat = res.coord.lat;
            const long = res.coord.lon;

            fetchWeather(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${long}`).then(
              (res) => {
                const dataArray = res.list;
                const thisDayDate = new Date(dataArray[0].dt * 1000);
                const today = thisDayDate.getDate();

                var todaydata = [];
                var day1data = [];
                var day2data = [];
                var day3data = [];
                var day4data = [];
                var day5data = [];
                var dayNumber = 1;

                for (let i = 0; i < dataArray.length; i++) {
                  let date = new Date(dataArray[i].dt * 1000);
                  let day = date.getDate();
                  if (day === today) {
                    todaydata = [...todaydata, dataArray[i]];
                  }
                }

                for (let i = 1; i < dataArray.length; i++) {
                  let date = new Date(dataArray[i].dt * 1000);
                  let day = date.getDate();
                  let prevDate = new Date(dataArray[i - 1].dt * 1000);
                  let prevDay = prevDate.getDate();
                  if (day !== today) {
                    if (prevDay !== day && prevDay !== today) {
                      dayNumber++;
                    }
                    if (dayNumber === 1)
                      day1data = [
                        ...day1data,
                        {
                          weekday: date.toLocaleString("en-US", {
                            weekday: "long",
                          }),
                          temp_min: dataArray[i].main.temp_min,
                          temp_max: dataArray[i].main.temp_max,
                          icon: dataArray[i].weather[0].icon,
                        },
                      ];
                    else if (dayNumber === 2)
                      day2data = [
                        ...day2data,
                        {
                          weekday: date.toLocaleString("en-US", {
                            weekday: "long",
                          }),
                          temp_min: dataArray[i].main.temp_min,
                          temp_max: dataArray[i].main.temp_max,
                          icon: dataArray[i].weather[0].icon,
                        },
                      ];
                    else if (dayNumber === 3)
                      day3data = [
                        ...day3data,
                        {
                          weekday: date.toLocaleString("en-US", {
                            weekday: "long",
                          }),
                          temp_min: dataArray[i].main.temp_min,
                          temp_max: dataArray[i].main.temp_max,
                          icon: dataArray[i].weather[0].icon,
                        },
                      ];
                    else if (dayNumber === 4)
                      day4data = [
                        ...day4data,
                        {
                          weekday: date.toLocaleString("en-US", {
                            weekday: "long",
                          }),
                          temp_min: dataArray[i].main.temp_min,
                          temp_max: dataArray[i].main.temp_max,
                          icon: dataArray[i].weather[0].icon,
                        },
                      ];
                    else if (dayNumber === 5)
                      day5data = [
                        ...day5data,
                        {
                          weekday: date.toLocaleString("en-US", {
                            weekday: "long",
                          }),
                          temp_min: dataArray[i].main.temp_min,
                          temp_max: dataArray[i].main.temp_max,
                          icon: dataArray[i].weather[0].icon,
                        },
                      ];
                  }
                }

                //DAY 1
                let day1iconArr = day1data.map((obj) => obj.icon);
                const day1weekday = day1data[0].weekday;
                const day1icon = getFrequentArr(day1iconArr);
                const day1TempMin = Math.min(
                  ...day1data.map((o) => o.temp_min)
                );
                const day1TempMax = Math.max(
                  ...day1data.map((o) => o.temp_max)
                );
                day1data = {
                  weekday: day1weekday,
                  icon: day1icon,
                  temp_min: day1TempMin,
                  temp_max: day1TempMax,
                };

                //DAY 2
                let day2iconArr = day2data.map((obj) => obj.icon);
                const day2weekday = day2data[0].weekday;
                const day2icon = getFrequentArr(day2iconArr);
                const day2TempMin = Math.min(
                  ...day2data.map((o) => o.temp_min)
                );
                const day2TempMax = Math.max(
                  ...day2data.map((o) => o.temp_max)
                );
                day2data = {
                  weekday: day2weekday,
                  icon: day2icon,
                  temp_min: day2TempMin,
                  temp_max: day2TempMax,
                };

                //DAY 3
                let day3iconArr = day3data.map((obj) => obj.icon);
                const day3weekday = day3data[0].weekday;
                const day3icon = getFrequentArr(day3iconArr);
                const day3TempMin = Math.min(
                  ...day3data.map((o) => o.temp_min)
                );
                const day3TempMax = Math.max(
                  ...day3data.map((o) => o.temp_max)
                );
                day3data = {
                  weekday: day3weekday,
                  icon: day3icon,
                  temp_min: day3TempMin,
                  temp_max: day3TempMax,
                };

                //DAY 4
                let day4iconArr = day4data.map((obj) => obj.icon);
                const day4weekday = day4data[0].weekday;
                const day4icon = getFrequentArr(day4iconArr);
                const day4TempMin = Math.min(
                  ...day4data.map((o) => o.temp_min)
                );
                const day4TempMax = Math.max(
                  ...day4data.map((o) => o.temp_max)
                );
                day4data = {
                  weekday: day4weekday,
                  icon: day4icon,
                  temp_min: day4TempMin,
                  temp_max: day4TempMax,
                };

                //DAY 5
                let day5iconArr = day5data.map((obj) => obj.icon);
                const day5weekday = day5data[0].weekday;
                const day5icon = getFrequentArr(day5iconArr);
                const day5TempMin = Math.min(
                  ...day5data.map((o) => o.temp_min)
                );
                const day5TempMax = Math.max(
                  ...day5data.map((o) => o.temp_max)
                );
                day5data = {
                  weekday: day5weekday,
                  icon: day5icon,
                  temp_min: day5TempMin,
                  temp_max: day5TempMax,
                };

                setWeather((prev) => ({
                  ...prev,
                  daily: {
                    day1data,
                    day2data,
                    day3data,
                    day4data,
                    day5data,
                  },
                  hourly: todaydata,
                }));
                setLoading(false);
              }
            );
            setLoading(false);
          } else {
            setError(true);
            setLoading(false);
            console.log("error 404");
          }
        }
      );
    }
  };

  //get weather with lat and long
  const getWeatherLocation = (lat, long) => {
    setLoading(true);
    if (lat && long) {
      fetchWeather(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${long}`).then(
        (res) => {
          setWeather({ ...res, city: res.name, country: res.sys.country });
        }
      );

      fetchWeather(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${long}`).then(
        (res) => {
          const dataArray = res.list;
          const thisDayDate = new Date(dataArray[0].dt * 1000);
          const today = thisDayDate.getDate();

          var todaydata = [];
          var day1data = [];
          var day2data = [];
          var day3data = [];
          var day4data = [];
          var day5data = [];
          var dayNumber = 1;

          for (let i = 0; i < dataArray.length; i++) {
            let date = new Date(dataArray[i].dt * 1000);
            let day = date.getDate();
            if (day === today) {
              todaydata = [...todaydata, dataArray[i]];
            }
          }

          for (let i = 1; i < dataArray.length; i++) {
            let date = new Date(dataArray[i].dt * 1000);
            let day = date.getDate();
            let prevDate = new Date(dataArray[i - 1].dt * 1000);
            let prevDay = prevDate.getDate();
            if (day !== today) {
              if (prevDay !== day && prevDay !== today) {
                dayNumber++;
              }
              if (dayNumber === 1)
                day1data = [
                  ...day1data,
                  {
                    weekday: date.toLocaleString("en-US", { weekday: "long" }),
                    temp_min: dataArray[i].main.temp_min,
                    temp_max: dataArray[i].main.temp_max,
                    icon: dataArray[i].weather[0].icon,
                  },
                ];
              else if (dayNumber === 2)
                day2data = [
                  ...day2data,
                  {
                    weekday: date.toLocaleString("en-US", { weekday: "long" }),
                    temp_min: dataArray[i].main.temp_min,
                    temp_max: dataArray[i].main.temp_max,
                    icon: dataArray[i].weather[0].icon,
                  },
                ];
              else if (dayNumber === 3)
                day3data = [
                  ...day3data,
                  {
                    weekday: date.toLocaleString("en-US", { weekday: "long" }),
                    temp_min: dataArray[i].main.temp_min,
                    temp_max: dataArray[i].main.temp_max,
                    icon: dataArray[i].weather[0].icon,
                  },
                ];
              else if (dayNumber === 4)
                day4data = [
                  ...day4data,
                  {
                    weekday: date.toLocaleString("en-US", { weekday: "long" }),
                    temp_min: dataArray[i].main.temp_min,
                    temp_max: dataArray[i].main.temp_max,
                    icon: dataArray[i].weather[0].icon,
                  },
                ];
              else if (dayNumber === 5)
                day5data = [
                  ...day5data,
                  {
                    weekday: date.toLocaleString("en-US", { weekday: "long" }),
                    temp_min: dataArray[i].main.temp_min,
                    temp_max: dataArray[i].main.temp_max,
                    icon: dataArray[i].weather[0].icon,
                  },
                ];
            }
          }

          //DAY 1
          let day1iconArr = day1data.map((obj) => obj.icon);
          const day1weekday = day1data[0].weekday;
          const day1icon = getFrequentArr(day1iconArr);
          const day1TempMin = Math.min(...day1data.map((o) => o.temp_min));
          const day1TempMax = Math.max(...day1data.map((o) => o.temp_max));
          day1data = {
            weekday: day1weekday,
            icon: day1icon,
            temp_min: day1TempMin,
            temp_max: day1TempMax,
          };

          //DAY 2
          let day2iconArr = day2data.map((obj) => obj.icon);
          const day2weekday = day2data[0].weekday;
          const day2icon = getFrequentArr(day2iconArr);
          const day2TempMin = Math.min(...day2data.map((o) => o.temp_min));
          const day2TempMax = Math.max(...day2data.map((o) => o.temp_max));
          day2data = {
            weekday: day2weekday,
            icon: day2icon,
            temp_min: day2TempMin,
            temp_max: day2TempMax,
          };

          //DAY 3
          let day3iconArr = day3data.map((obj) => obj.icon);
          const day3weekday = day3data[0].weekday;
          const day3icon = getFrequentArr(day3iconArr);
          const day3TempMin = Math.min(...day3data.map((o) => o.temp_min));
          const day3TempMax = Math.max(...day3data.map((o) => o.temp_max));
          day3data = {
            weekday: day3weekday,
            icon: day3icon,
            temp_min: day3TempMin,
            temp_max: day3TempMax,
          };

          //DAY 4
          let day4iconArr = day4data.map((obj) => obj.icon);
          const day4weekday = day4data[0].weekday;
          const day4icon = getFrequentArr(day4iconArr);
          const day4TempMin = Math.min(...day4data.map((o) => o.temp_min));
          const day4TempMax = Math.max(...day4data.map((o) => o.temp_max));
          day4data = {
            weekday: day4weekday,
            icon: day4icon,
            temp_min: day4TempMin,
            temp_max: day4TempMax,
          };

          //DAY 5
          let day5iconArr = day5data.map((obj) => obj.icon);
          const day5weekday = day5data[0].weekday;
          const day5icon = getFrequentArr(day5iconArr);
          const day5TempMin = Math.min(...day5data.map((o) => o.temp_min));
          const day5TempMax = Math.max(...day5data.map((o) => o.temp_max));
          day5data = {
            weekday: day5weekday,
            icon: day5icon,
            temp_min: day5TempMin,
            temp_max: day5TempMax,
          };

          setWeather((prev) => ({
            ...prev,
            daily: {
              day1data,
              day2data,
              day3data,
              day4data,
              day5data,
            },
            hourly: todaydata,
          }));
          setLoading(false);
        }
      );
    }
  };

  // default weather fetch
  useEffect(() => {
    setLoading(true);
    fetchWeather(`${DEFAULT_URL}`).then((res) => {
      setWeather({ ...res, city: res.name, country: res.sys.country });
    });
    //fetch next 5 days
    fetchWeather(`${DEF_N_D_H}`).then((res) => {
      const dataArray = res.list;
      const thisDayDate = new Date(dataArray[0].dt * 1000);
      const today = thisDayDate.getDate();

      var todaydata = [];
      var day1data = [];
      var day2data = [];
      var day3data = [];
      var day4data = [];
      var day5data = [];
      var dayNumber = 1;

      for (let i = 0; i < dataArray.length; i++) {
        let date = new Date(dataArray[i].dt * 1000);
        let day = date.getDate();
        if (day === today) {
          todaydata = [...todaydata, dataArray[i]];
        }
      }

      for (let i = 1; i < dataArray.length; i++) {
        let date = new Date(dataArray[i].dt * 1000);
        let day = date.getDate();
        let prevDate = new Date(dataArray[i - 1].dt * 1000);
        let prevDay = prevDate.getDate();
        if (day !== today) {
          if (prevDay !== day && prevDay !== today) {
            dayNumber++;
          }
          if (dayNumber === 1)
            day1data = [
              ...day1data,
              {
                weekday: date.toLocaleString("en-US", { weekday: "long" }),
                temp_min: dataArray[i].main.temp_min,
                temp_max: dataArray[i].main.temp_max,
                icon: dataArray[i].weather[0].icon,
              },
            ];
          else if (dayNumber === 2)
            day2data = [
              ...day2data,
              {
                weekday: date.toLocaleString("en-US", { weekday: "long" }),
                temp_min: dataArray[i].main.temp_min,
                temp_max: dataArray[i].main.temp_max,
                icon: dataArray[i].weather[0].icon,
              },
            ];
          else if (dayNumber === 3)
            day3data = [
              ...day3data,
              {
                weekday: date.toLocaleString("en-US", { weekday: "long" }),
                temp_min: dataArray[i].main.temp_min,
                temp_max: dataArray[i].main.temp_max,
                icon: dataArray[i].weather[0].icon,
              },
            ];
          else if (dayNumber === 4)
            day4data = [
              ...day4data,
              {
                weekday: date.toLocaleString("en-US", { weekday: "long" }),
                temp_min: dataArray[i].main.temp_min,
                temp_max: dataArray[i].main.temp_max,
                icon: dataArray[i].weather[0].icon,
              },
            ];
          else if (dayNumber === 5)
            day5data = [
              ...day5data,
              {
                weekday: date.toLocaleString("en-US", { weekday: "long" }),
                temp_min: dataArray[i].main.temp_min,
                temp_max: dataArray[i].main.temp_max,
                icon: dataArray[i].weather[0].icon,
              },
            ];
        }
      }

      //DAY 1
      let day1iconArr = day1data.map((obj) => obj.icon);
      const day1weekday = day1data[0].weekday;
      const day1icon = getFrequentArr(day1iconArr);
      const day1TempMin = Math.min(...day1data.map((o) => o.temp_min));
      const day1TempMax = Math.max(...day1data.map((o) => o.temp_max));
      day1data = {
        weekday: day1weekday,
        icon: day1icon,
        temp_min: day1TempMin,
        temp_max: day1TempMax,
      };

      //DAY 2
      let day2iconArr = day2data.map((obj) => obj.icon);
      const day2weekday = day2data[0].weekday;
      const day2icon = getFrequentArr(day2iconArr);
      const day2TempMin = Math.min(...day2data.map((o) => o.temp_min));
      const day2TempMax = Math.max(...day2data.map((o) => o.temp_max));
      day2data = {
        weekday: day2weekday,
        icon: day2icon,
        temp_min: day2TempMin,
        temp_max: day2TempMax,
      };

      //DAY 3
      let day3iconArr = day3data.map((obj) => obj.icon);
      const day3weekday = day3data[0].weekday;
      const day3icon = getFrequentArr(day3iconArr);
      const day3TempMin = Math.min(...day3data.map((o) => o.temp_min));
      const day3TempMax = Math.max(...day3data.map((o) => o.temp_max));
      day3data = {
        weekday: day3weekday,
        icon: day3icon,
        temp_min: day3TempMin,
        temp_max: day3TempMax,
      };

      //DAY 4
      let day4iconArr = day4data.map((obj) => obj.icon);
      const day4weekday = day4data[0].weekday;
      const day4icon = getFrequentArr(day4iconArr);
      const day4TempMin = Math.min(...day4data.map((o) => o.temp_min));
      const day4TempMax = Math.max(...day4data.map((o) => o.temp_max));
      day4data = {
        weekday: day4weekday,
        icon: day4icon,
        temp_min: day4TempMin,
        temp_max: day4TempMax,
      };

      //DAY 5
      let day5iconArr = day5data.map((obj) => obj.icon);
      const day5weekday = day5data[0].weekday;
      const day5icon = getFrequentArr(day5iconArr);
      const day5TempMin = Math.min(...day5data.map((o) => o.temp_min));
      const day5TempMax = Math.max(...day5data.map((o) => o.temp_max));
      day5data = {
        weekday: day5weekday,
        icon: day5icon,
        temp_min: day5TempMin,
        temp_max: day5TempMax,
      };

      setWeather((prev) => ({
        ...prev,
        daily: {
          day1data,
          day2data,
          day3data,
          day4data,
          day5data,
        },
        hourly: todaydata,
      }));
      setLoading(false);
    });
  }, []);
  return [
    weather,
    loading,
    error,
    fetchWeather,
    searchByLocation,
    getWeatherLocation,
  ];
};
