import React, { FC } from "react";
import { useSelector } from "react-redux";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { RootState } from "./store";

const App: FC = () => {

  const weatherData = useSelector((state: RootState) => state.weather.data);
  
  const loading = useSelector((state: RootState) => state.weather.loading);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Simple Weather App</p>
        <Search title='Surat' />
        {loading ? (
          <h2>Loading</h2>
        ) : (
          weatherData && <Weather data={weatherData} />
        )}
      </header>
    </div>
  );
};

export default App;
