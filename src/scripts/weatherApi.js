import { changeLanguageWeatherConditions } from "./weatherConditionsLang";
import { iconLoad } from "./weatherIconLoad";
import { setDegree } from "./changeTemperatureDegree";

const currentTemperature = document.querySelector(`.day-weather-section-temperature-number`)
const currentWeatherIcon = document.querySelector(`.day-weather-section-info-block-img`)
const currentTemperatureFeels = document.querySelector(`.day-weather-section-info-feels-temperature`)
const currentWindSpeed = document.querySelector(`.day-weather-section-info-wind-speed`)
const currentHumidity = document.querySelector(`.day-weather-section-info-humidity-number`)
const currentWeatherCondition = document.querySelector(`.day-weather-section-info-condition`)
const period1Temperature = document.querySelector(`.period-weather-section-1-block-temperature`)
const period1Icon = document.querySelector(`.period-weather-section-1-block-img`)
const period2Temperature = document.querySelector(`.period-weather-section-2-block-temperature`)
const period2Icon = document.querySelector(`.period-weather-section-2-block-img`)
const period3Temperature = document.querySelector(`.period-weather-section-3-block-temperature`)
const period3Icon = document.querySelector(`.period-weather-section-3-block-img`)
const weatherApiLight = document.querySelector(`.server-status-weather-api-light`)
const latitudeText = document.querySelector(`.coordinate-section-latitude-text`)
const longitudeText = document.querySelector(`.coordinate-section-longitude-text`)

export let weatherJson;

export function takeWeatherInfo(lat, lon) {
      fetch(`//api.weatherapi.com/v1/forecast.json?key=bb104a4c5f26417898525936211801&q=${lat},${lon}&days=3`)
      .then(res => res.json())
      .then(json => {
            weatherJson = json;
            let latitude = json.location.lat
            let longitude = json.location.lon
            
            currentTemperature.textContent = Math.round(json.current.temp_c)

            try {
                  currentWeatherIcon.src = `http:${json.current.condition.ico}`
            } finally {
                  currentWeatherIcon.src = iconLoad( json.current.condition.icon, json.current.is_day)
            }

            currentTemperatureFeels.textContent = Math.round(json.current.feelslike_f) 
            currentWindSpeed.textContent = ((json.current.wind_kph * 1000)/3600).toFixed(1)
            currentHumidity.textContent = json.current.humidity
            currentWeatherCondition.textContent = json.current.condition.text.toUpperCase()

            period1Temperature.textContent = Math.round(json.forecast.forecastday[0].day.avgtemp_c)
            try {
                  period1Icon.src = `http:${json.forecast.forecastday[0].day.condition.icon}`
            } finally {
                  period1Icon.src = iconLoad( json.forecast.forecastday[0].day.condition.icon, 1)
            }

            period2Temperature.textContent = Math.round(json.forecast.forecastday[1].day.avgtemp_c)
            try {
                  period2Icon.src = `http:${json.forecast.forecastday[1].day.condition.icon}`
            } finally {
                  period2Icon.src = iconLoad( json.forecast.forecastday[1].day.condition.icon, 1)
            }

            period3Temperature.textContent = Math.round(json.forecast.forecastday[2].day.avgtemp_c)
            try {
                  period3Icon.src = `http:${json.forecast.forecastday[2].day.condition.icon}`
            } finally {
                  period3Icon.src = iconLoad( json.forecast.forecastday[2].day.condition.icon, 1)
            }

            latitudeText.textContent = latitude
            longitudeText.textContent = longitude

            weatherApiLight.style.backgroundColor = `green`

            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()
            changeLanguageWeatherConditions(currentLanguage);

            if (localStorage.getItem('degree') === null) {
                  setDegree(`C`);
            } else {
                  let currentDegree = localStorage.getItem('degree')
                  setDegree(currentDegree);
            }       
            })
      .catch(error => alert(error.message));
}