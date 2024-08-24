const apiKey = '737e65f4a0b531603fcf7e3b8c53f076';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if(response.status == 404) {
    document.querySelector('.error').style.display = 'block';
  }
  else{
    
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
      weatherIcon.src = 'weather-icons/animated/clouds.svg';
    }
    else if(data.weather[0].main == 'Clear'){
      weatherIcon.src = 'weather-icons/animated/clear.svg';
    }
    else if(data.weather[0].main == 'Rain'){
      weatherIcon.src = 'weather-icons/animated/rain.svg';
    }
    else if(data.weather[0].main == 'Drizzle'){
      weatherIcon.src = 'weather-icons/animated/drizzle.svg';
    }
    else if(data.weather[0].main == 'Mist'){
      weatherIcon.src = 'weather-icons/animated/mist.svg';
    }

    document.querySelector('.error').style.display = 'none';
  }
  
}

searchBtn.addEventListener('click', ()=>{
  checkWeather(searchBox.value);
})