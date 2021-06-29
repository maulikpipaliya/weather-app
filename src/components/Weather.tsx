import React, { FC } from "react";

import { IWeatherData } from "../store/types";

interface WeatherProps {
  data: IWeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
 
  return (
    <>
      <div className='card shadow-0 border'>
        <div className='card-body p-4'>
                  <h4 className='mb-1 sfw-normal'>{data.name} - {data.sys.country}</h4>
          <p className='mb-2'>
            Current temperature: <strong>{data.main.temp}</strong>
          </p>
          {/* <p>
            Feels like: <strong>4.37°C</strong>
          </p>
          <p>
            Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong>
          </p> */}

          <div className='d-flex flex-row align-items-center'>
            <p className='mb-0 me-4'>{data.weather[0].description}</p>
            <i className='fas fa-cloud fa-3x'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
