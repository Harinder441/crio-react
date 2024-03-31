import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);


  const apiKey = "e50fb8e42489468ebff54652232510";

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      alert("Failed to fetch weather data");
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div>
        <input type="text" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading data...</p>}

      {weatherData && (
        <div className="weather-cards weather-card-container">
          <div className="weather-card">
            <h5>Temperature</h5>
            <p>{weatherData.current.temp_c} °C</p>
          </div>

          <div className="weather-card">
            <h5>Humidity</h5>
            <p>{weatherData.current.humidity} °C</p>
          </div>
          <div className="weather-card">
            <h5>Condition</h5>
            <p>{weatherData.current.condition.text} °C</p>
          </div>
          <div className="weather-card">
            <h5>Wind Speed</h5>
            <p>{weatherData.current.wind_kph} °C</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default WeatherApp;
