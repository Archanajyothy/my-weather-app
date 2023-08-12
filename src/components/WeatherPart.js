// WeatherPart.js (updated)
import React, { useState, useEffect } from 'react';
import '../global.css'; // Import your component-level styles

function WeatherPart() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [infoText, setInfoText] = useState('');
  const [infoClass, setInfoClass] = useState('');

  const handleBackClick = () => {
    // Clear weather data and info text
    setWeatherData(null);
    setInfoText('');
    setInfoClass('');
  };

  const getWeatherIcon = (id) => {
    if (id === 800) {
      return 'icons/clear.svg';
    } else if (id >= 200 && id <= 232) {
      return 'icons/storm.svg';
    } else if (id >= 600 && id <= 622) {
      return 'icons/snow.svg';
    } else if (id >= 701 && id <= 781) {
      return 'icons/haze.svg';
    } else if (id >= 801 && id <= 804) {
      return 'icons/cloud.svg';
    } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
      return 'icons/rain.svg';
    }
    return '';
  };

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  const handleWeatherDetails = (info) => {
    // Update state with weather data and infoText
    setWeatherData(info);
    setInfoText('');
    setInfoClass(''); // Remove any pending/error classes
  };

  const fetchData = () => {
    setInfoText('Getting Weather details...');
    setInfoClass('pending');

    // Replace with your API URL and fetch logic
    const apiUrl = `YOUR_API_URL_HERE`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(result => handleWeatherDetails(result))
      .catch(error => handleFetchError(error));
  };



  const handleFetchError = (error) => {
    setInfoText(error.message);
    setInfoClass('error');
  };

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  // Render weather data and UI elements based on weatherData

  return (
    <section className={`weather-part ${weatherData ? 'active' : ''}`}>
      <img
        src={weatherData ? getWeatherIcon(weatherData.weather[0].id) : ''}
        alt="Weather icon"
        className="weather-icon"
      />
      <div className="temp">
        <span className="numb">{Math.floor(weatherData.main.temp)}</span>
        <span className="deg">°</span>C
      </div>
      <div className="weather">
        {capitalize(weatherData.weather[0].description)}
      </div>
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <span>
          {weatherData.name}, {weatherData.sys.country}
        </span>
      </div>
      <div className="bottom-details">
        {/* Render other weather details */}
      </div>
      <p className={`info-txt ${infoClass}`}>{infoText}</p>
      <i
        className="fas fa-long-arrow-alt-left back-btn"
        onClick={handleBackClick}
      ></i>
    </section>
  );
}

export default WeatherPart;
