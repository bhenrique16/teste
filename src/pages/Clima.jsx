import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Clima() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState("");

  const apiKey = "cb27a58226ea041e04bbee3782f41aed";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError("Não foi possível obter dados do clima.");
    }
  };

  let weatherImg = null;
  if (weatherData.weather) {
    const icon = weatherData.weather[0].icon;
    weatherImg = `https://openweathermap.org/img/w/${icon}.png`;
  }

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="p-4 bg-white rounded-md shadow-md flex flex-col justify-center">
        <Link to="/" className="absolute top-0 left-0 m-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Voltar</button>
        </Link>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex items-center">
            <label>
              <input
                type="text"
                className="border border-gray-400 rounded px-4 py-2 mr-2 w-auto md:w-80"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Em qual cidade você está?"
              />
            </label>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r" type="submit">
              Pesquisar
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
        {weatherData.main && (
          <div className="flex flex-col items-start mt-4 text-left">
            <h2 className="text-2xl font-bold">Tempo em {weatherData.name}</h2>
            <p className="text-4xl font-bold mt-2">{Math.round(weatherData.main.temp)}°C</p>
            <p className="text-lg mt-2 font-medium">Umidade: {weatherData.main.humidity}%</p>
            <div className="flex items-center">
              {weatherImg && <img className="w-10 h-10 mr-2" src={weatherImg} alt="Condições climáticas" />}
              <p className="text-lg">{weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clima;



