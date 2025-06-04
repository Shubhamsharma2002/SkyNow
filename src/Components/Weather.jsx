import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faMagnifyingGlass,
  faSun,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  console.log(import.meta.env.VITE_VAL);
  
  const search = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  search("Delhi");
  return (
    <div className="flex justify-center items-start bg-blue-100 min-h-screen pt-20 px-4 sm:px-0">
      <div className="bg-blue-950 p-4 rounded-lg shadow-lg w-full max-w-md">
        {/* input feild */}
        <div className="flex items-center bg-white rounded-full shadow px-3 h-14 mt-2">
          <input
            type="text"
            placeholder="Enter the city"
            className="flex-grow outline-none text-sm px-2 rounded-full"
          />
          <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />
          </span>
        </div>
        {/* icon weather */}
        <div className="flex justify-center mt-3">
          <FontAwesomeIcon icon={faSun} className="text-yellow-400" size="4x" />
        </div>
        {/* text section */}
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 text-white">
          <p className="text-4xl font-bold">
            16<span className="text-2xl align-super">°C</span>
          </p>
          <p className=" text-lg">Noida</p>
        </div>
        {/* status */}
        <div className="flex justify-around text-white mt-6">
          {/* Humidity */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faDroplet} size="2x" />
            <span className="mt-2 text-center text-sm">
              91% <br /> Humidity
            </span>
          </div>

          {/* Wind Speed */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faWind} size="2x" />
            <span className="mt-2 text-center text-sm">
              3.6 km/h <br /> Wind Speed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
