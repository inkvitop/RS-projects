import "./weatherApi";
import { weatherJson } from "./weatherApi";

const temperatureFahrButton = document.querySelector(`.control-section-temperature-fahrenheit`)
const temperatureCelsButton = document.querySelector(`.control-section-temperature-celsius`)

const currentTemperature = document.querySelector(`.day-weather-section-temperature-number`)
const period1Temperature = document.querySelector(`.period-weather-section-1-block-temperature`)
const period2Temperature = document.querySelector(`.period-weather-section-2-block-temperature`)
const period3Temperature = document.querySelector(`.period-weather-section-3-block-temperature`)
const currentTemperatureFeels = document.querySelector(`.day-weather-section-info-feels-temperature`)
const currentTemperatureFeelsDeg = document.querySelector(`.day-weather-section-info-feels-temperature-deg`)

const temperatureDegreeValue = document.querySelector(`.day-weather-section-temperature-degree-value`)
const temperatureValuePeriod1 = document.querySelector(`.period-weather-section-1-deg-value`)
const temperatureValuePeriod2 = document.querySelector(`.period-weather-section-2-deg-value`)
const temperatureValuePeriod3 = document.querySelector(`.period-weather-section-3-deg-value`)

temperatureFahrButton.addEventListener('click', () => {
      temperatureFahrButton.classList.add('active');
      temperatureCelsButton.classList.remove('active');
      currentTemperature.textContent = Math.round(weatherJson.current.temp_f);
      period1Temperature.textContent = Math.round(weatherJson.forecast.forecastday[0].day.avgtemp_f);
      period2Temperature.textContent = Math.round(weatherJson.forecast.forecastday[1].day.avgtemp_f);
      period3Temperature.textContent = Math.round(weatherJson.forecast.forecastday[2].day.avgtemp_f);
      currentTemperatureFeels.textContent = Math.round(weatherJson.current.feelslike_f);
      temperatureDegreeValue.textContent = `F`
      temperatureValuePeriod1.textContent = `F`
      temperatureValuePeriod2.textContent = `F`
      temperatureValuePeriod3.textContent = `F`
      currentTemperatureFeelsDeg.textContent = `F`
      localStorage.setItem('degree', `F`)
})

temperatureCelsButton.addEventListener('click', () => {
      temperatureFahrButton.classList.remove('active');
      temperatureCelsButton.classList.add('active');
      currentTemperature.textContent = Math.round(weatherJson.current.temp_c);
      period1Temperature.textContent = Math.round(weatherJson.forecast.forecastday[0].day.avgtemp_c);
      period2Temperature.textContent = Math.round(weatherJson.forecast.forecastday[1].day.avgtemp_c);
      period3Temperature.textContent = Math.round(weatherJson.forecast.forecastday[2].day.avgtemp_c);
      currentTemperatureFeels.textContent = Math.round(weatherJson.current.feelslike_c);
      temperatureDegreeValue.textContent = `C`
      temperatureValuePeriod1.textContent = `C`
      temperatureValuePeriod2.textContent = `C`
      temperatureValuePeriod3.textContent = `C`
      currentTemperatureFeelsDeg.textContent = `C`
      localStorage.setItem('degree', `C`)
})

export function setDegree(degree) {
      let degreeToLower = degree.toLowerCase()
      if (degreeToLower === `f`) {
            temperatureFahrButton.classList.add('active');
            temperatureCelsButton.classList.remove('active');
            currentTemperature.textContent = Math.round(weatherJson.current.temp_f);
            period1Temperature.textContent = Math.round(weatherJson.forecast.forecastday[0].day.avgtemp_f);
            period2Temperature.textContent = Math.round(weatherJson.forecast.forecastday[1].day.avgtemp_f);
            period3Temperature.textContent = Math.round(weatherJson.forecast.forecastday[2].day.avgtemp_f);
            currentTemperatureFeels.textContent = Math.round(weatherJson.current.feelslike_f);
      } else {
            temperatureFahrButton.classList.remove('active');
            temperatureCelsButton.classList.add('active');
            currentTemperature.textContent = Math.round(weatherJson.current.temp_c);
            period1Temperature.textContent = Math.round(weatherJson.forecast.forecastday[0].day.avgtemp_c);
            period2Temperature.textContent = Math.round(weatherJson.forecast.forecastday[1].day.avgtemp_c);
            period3Temperature.textContent = Math.round(weatherJson.forecast.forecastday[2].day.avgtemp_c);
            currentTemperatureFeels.textContent = Math.round(weatherJson.current.feelslike_c);
      }

      temperatureDegreeValue.textContent = degree
      temperatureValuePeriod1.textContent = degree
      temperatureValuePeriod2.textContent = degree
      temperatureValuePeriod3.textContent = degree
      currentTemperatureFeelsDeg.textContent = degree
}