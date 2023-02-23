declare module '*.mp3';

export interface StyleProps {
    isOpen?: (() => void) | number | boolean,
    onMouseDown?: (() => void) | number | boolean,

    image?: string,
    geo?: string | boolean,
    desktopImgWidth?: string,
    tabletImgWidth?: string,
    mobileImgWidth?: string,
    $planetColor?: string,
    $bgColor?: string,
    isChanging?: boolean,
    $isActive?: boolean,
    planetData?: PlanetIT,
}

export interface Day1DataIT extends DayDataIT {
    day1data?: DayDataIT,
}

export interface DayDataIT {
    day1data?: DayDataIT,
    day2data?: DayDataIT,
    day3data?: DayDataIT,
    day4data?: DayDataIT,
    day5data?: DayDataIT,
    weekday?: string,
    temp_min?: number,
    temp_max?: number,
    icon?: string,
}

// export interface WeatherIT {
//     todaydata?: array,
//     daily?: { DayDataIT, DayDataIT, DayDataIT, DayDataIT, DayDataIT },
//     hourly?: object,
// }

export interface DataIT {
    weather?: Weather[],
    city?: string,
    country?: object,
}

export interface WeatherObjectIT extends WeatherIT {
    city?: string,
    country?: object,
    daily?: DayDataIT;
    hourly?: WeatherIT;
}

export interface WeatherIT {
    coord?: Coord;
    weather?: Weather[];
    base?: string;
    main?: Main;
    visibility?: number;
    wind?: Wind;
    clouds?: Clouds;
    dt?: number;
    sys?: Sys;
    timezone?: number;
    id?: number;
    name?: string;
    cod?: number;
}

export interface Clouds {
    all?: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
}

export interface Sys {
    type?: number;
    id?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
}

export interface Weather {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
}

export interface Wind {
    speed?: number;
    deg?: number;
    gust?: number;
}

/**
 *
 *
 * // 20230214134326
// https://api.openweathermap.org/data/2.5/forecast?&lat=50.7593&lon=25.3424&appid=c4d7c02502e1f9189625dd3d6fc17d1c&cnt=5

{
  "cod": "200",
  "message": 0,
  "cnt": 5,
  "list": [
    {
      "dt": 1676386800,
      "main": {
        "temp": 277.93,
        "feels_like": 273.54,
        "temp_min": 277.5,
        "temp_max": 277.93,
        "pressure": 1032,
        "sea_level": 1032,
        "grnd_level": 1005,
        "humidity": 75,
        "temp_kf": 0.43
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 6.56,
        "deg": 325,
        "gust": 11.77
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-02-14 15:00:00"
    },
    {
      "dt": 1676397600,
      "main": {
        "temp": 276.25,
        "feels_like": 272.03,
        "temp_min": 275.31,
        "temp_max": 276.25,
        "pressure": 1031,
        "sea_level": 1031,
        "grnd_level": 1006,
        "humidity": 77,
        "temp_kf": 0.94
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 38
      },
      "wind": {
        "speed": 5.16,
        "deg": 325,
        "gust": 12.08
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-02-14 18:00:00"
    },
    {
      "dt": 1676408400,
      "main": {
        "temp": 273.46,
        "feels_like": 269.4,
        "temp_min": 273.46,
        "temp_max": 273.46,
        "pressure": 1031,
        "sea_level": 1031,
        "grnd_level": 1007,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 3.79,
        "deg": 334,
        "gust": 9.25
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-02-14 21:00:00"
    },
    {
      "dt": 1676419200,
      "main": {
        "temp": 272.52,
        "feels_like": 268.83,
        "temp_min": 272.52,
        "temp_max": 272.52,
        "pressure": 1032,
        "sea_level": 1032,
        "grnd_level": 1008,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 7
      },
      "wind": {
        "speed": 3.07,
        "deg": 332,
        "gust": 6.69
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-02-15 00:00:00"
    },
    {
      "dt": 1676430000,
      "main": {
        "temp": 272.26,
        "feels_like": 268.97,
        "temp_min": 272.26,
        "temp_max": 272.26,
        "pressure": 1032,
        "sea_level": 1032,
        "grnd_level": 1008,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 17
      },
      "wind": {
        "speed": 2.6,
        "deg": 334,
        "gust": 5.56
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-02-15 03:00:00"
    }
  ],
  "city": {
    "id": 702569,
    "name": "Lutsk",
    "coord": {
      "lat": 50.7593,
      "lon": 25.3424
    },
    "country": "UA",
    "population": 213661,
    "timezone": 7200,
    "sunrise": 1676352827,
    "sunset": 1676388725
  }
}
 */
