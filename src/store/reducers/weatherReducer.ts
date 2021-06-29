import { IWeatherState, IWeatherAction, GET_WEATHER } from "../types";

const initialState: IWeatherState = {
  data: null,
  error: "",
  loading: false,
};

const weatherReducer =  (
  state = initialState,
  action: IWeatherAction
): IWeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        error: "",
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;