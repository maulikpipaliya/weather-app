export const GET_WEATHER = "GET_WEATHER";

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ITempMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}
export interface ICoords {
  lon: number;
  lat: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

//Main Interface
export interface IWeatherData {
  cod: number;
  coord: ICoords;
  dt: number;
  id: number;
  main: ITempMain;
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  weather: IWeather[];
  wind: IWind;
}

export interface IWeatherError {
  cod: number;
  message: string;
}

export interface IWeatherState {
    data: IWeatherData | null;
    loading: boolean;
    error: string;
  }


//Action Interfaces
interface IGetWeatherAction{
    type: typeof GET_WEATHER;
    payload: IWeatherData;
}

export type IWeatherAction = IGetWeatherAction;