import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faMagnifyingGlass,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(""); // <-- default to empty

  const search = async (city) => {
    if (!city) return; // skip if city is empty or null

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData({
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          temp: Math.floor(data.main.temp),
          location: data.name,
          icon: data.weather[0].icon,
          description: data.weather[0].description,
        });
      } else {
        setWeatherData(null); // reset if city not found
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search(); // Call default city on load
  }, []);

  return (
    <div className="flex justify-center items-start bg-blue-100 min-h-screen pt-20 px-4 sm:px-0">
      <div className="bg-blue-950 p-4 rounded-lg shadow-lg w-full max-w-md">
        {/* Input field */}
        <div className="flex items-center bg-white rounded-full shadow px-3 h-14 mt-2">
          <input
            type="text"
            placeholder="Enter the city"
            className="flex-grow outline-none text-sm px-2 rounded-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search(city)}
          />
          <span
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => search(city)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
          </span>
        </div>

        {/* Icon */}
        {weatherData && (
          <div className="flex justify-center mt-3">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="weather icon"
              className="w-30 h-30"
            />
          </div>
        )}

        {/* Temperature and location */}
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 text-white">
          <p className="text-4xl font-bold">
            {weatherData ? (
              <>
                {weatherData.temp}
                <span className="text-2xl align-super">°C</span>
              </>
            ) : (
              "Search city"
            )}
          </p>
          <p className="text-lg">{weatherData?.location || ""}</p>
        </div>

        {/* Status */}
        {weatherData && (
          <div className="flex justify-around text-white mt-6">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faDroplet} size="2x" />
              <span className="mt-2 text-center text-sm">
                {weatherData.humidity}% <br /> Humidity
              </span>
            </div>

            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faWind} size="2x" />
              <span className="mt-2 text-center text-sm">
                {weatherData.windspeed} km/h <br /> Wind Speed
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
