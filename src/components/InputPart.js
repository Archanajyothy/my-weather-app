import React, { useState } from 'react';
import '../global.css'; // Import your component-level styles

function InputPart({ onSearch }) {

  const [infoText, setInfoText] = useState('');
  const [infoClass, setInfoClass] = useState('');
  const [city, setCity] = useState('');

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Weather data not available.');
      }
      const data = await response.json();
      
      // Update infoText and infoClass based on the data
      setInfoText('Weather data fetched successfully.');
      setInfoClass('success');
  
      // Call the onSearch function with the fetched data
      onSearch(data);
    } catch (error) {
      setInfoText('Error fetching weather data.');
      setInfoClass('error');
    }
  };
  

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const handleGeolocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);
    } else {
      setInfoText('Your browser does not support geolocation');
      setInfoClass('error');
    }
  };

  const onGeolocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_API_KEY_HERE`;
    setCity('');
    fetchData(apiUrl);
  };

  const onGeolocationError = (error) => {
    setInfoText(error.message);
    setInfoClass('error');
  };

  // ... (return block and other code)

  return (
    <section className="input-part">
      <p className={`info-txt ${infoClass}`}>{infoText}</p>
      <input
        type="text"
        placeholder="Enter city name"
        spellCheck="false"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <div className="separator"></div>
      <button onClick={handleGeolocationClick}>Get Device Location</button>
    </section>
  );
}

export default InputPart;
