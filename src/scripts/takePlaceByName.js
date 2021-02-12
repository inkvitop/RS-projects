import { takeWeatherInfo } from "./weatherApi";
import { newMap } from "./mapApi";
import { errorInput } from "./errorInput";
import { setBackgroundImg } from "./changeBackground";

const country = document.querySelector(`.location-section-country`)
const city = document.querySelector(`.location-section-city`)
const searchInput = document.querySelector(`.search-section-search-input`)

export function takePlaceByName(lang, place) {
      const apiKey = `&key=a8c198ae29e54e928846b09897be5020`
      const language = `&language=${lang}`
      const findPlace = `q=${place}`

      fetch(`//api.opencagedata.com/geocode/v1/json?${findPlace}${apiKey}${language}&pretty=1&no_annotations=1`)
      .then(res => res.json())
      .then(json => {
            country.textContent = json.results[0].components.country

            if (json.results[0].components.town === undefined) {
                  city.textContent = json.results[0].components.city
            }else {
                  json.results[0].components.town
            }

            let lat = json.results[0].geometry.lat
            let lon = json.results[0].geometry.lng

            takeWeatherInfo(lat, lon)
            newMap(lon, lat)

            searchInput.value = ''
            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()
            errorInput(false, currentLanguage)
            
            setBackgroundImg()
      })
      .catch(error => {
            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()
            searchInput.value = ''
            errorInput(true, currentLanguage)
      });
}


export function takePlaceByCoordinates(lang, lon, lat) {
      const apiKey = `&key=a8c198ae29e54e928846b09897be5020`
      const language = `&language=${lang}`
      const coordinateRequest = `q=${lon},${lat}`

      fetch(`//api.opencagedata.com/geocode/v1/json?${coordinateRequest}${apiKey}${language}&pretty=1&no_annotations=1`)
      .then(res => res.json())
      .then(json => {
            country.textContent = json.results[0].components.country
            
            if (json.results[0].components.town === undefined) {
                  city.textContent = json.results[0].components.city
            }else {
                  json.results[0].components.town
            }

            let lat = json.results[0].geometry.lat
            let lon = json.results[0].geometry.lng

            takeWeatherInfo(lat, lon)
            newMap(lon, lat)

            searchInput.value = ''
            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()
            errorInput(false, currentLanguage)

            setBackgroundImg()
      })
      .catch(error => {
            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()
            searchInput.value = ''
            errorInput(true, currentLanguage)
      });
}


export function takePlaceByCoordinatesCityCountry(lang, lon, lat) {
      const apiKey = `&key=a8c198ae29e54e928846b09897be5020`
      const language = `&language=${lang}`
      const coordinateRequest = `q=${lon},${lat}`

      fetch(`//api.opencagedata.com/geocode/v1/json?${coordinateRequest}${apiKey}${language}&pretty=1&no_annotations=1`)
      .then(res => res.json())
      .then(json => {
            country.textContent = json.results[0].components.country

            if (json.results[0].components.town === undefined) {
                  city.textContent = json.results[0].components.city
            }else {
                  json.results[0].components.town
            }

            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()
            errorInput(false, currentLanguage)
            
            setBackgroundImg()
      })
      .catch(error => {
            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()
            searchInput.value = ''
            errorInput(true, currentLanguage)
      });
}

