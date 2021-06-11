import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";

import {
  GET_WEATHER,
  IWeatherAction,
  IWeatherData,
  IWeatherError,
} from "../types";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, IWeatherAction> => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=${process.env.API_KEY}`
      );

      if (!response.ok) {
        const responseData: IWeatherError = await response.json();
        throw new Error(responseData.message);
      }

      const responseData: IWeatherData = await response.json();

      dispatch({
        type: GET_WEATHER,
        payload: responseData,
      });
    } catch (error) {}
  };
};
