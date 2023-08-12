export function getWeatherIcon(id) {
    let iconSource = 'icons/clear.svg';
  
    if (id === 800) {
      iconSource = 'icons/clear.svg';
    } else if (id >= 200 && id <= 232) {
      iconSource = 'icons/storm.svg';
    } else if (id >= 600 && id <= 622) {
      iconSource = 'icons/snow.svg';
    } else if (id >= 701 && id <= 781) {
      iconSource = 'icons/haze.svg';
    } else if (id >= 801 && id <= 804) {
      iconSource = 'icons/cloud.svg';
    } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
      iconSource = 'icons/rain.svg';
    }
    
    return iconSource;
  }
  
  
  export function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  