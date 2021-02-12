import { setDate } from "./currentDate";
import { changeLanguageWeatherConditions } from "./weatherConditionsLang";
import { weatherJson } from "./weatherApi";
import { takePlaceByCoordinatesCityCountry } from "./takePlaceByName";

const languageBlock = document.querySelector('.control-section-language-hamburger-block')
const mainLanguageButton = document.querySelector(`.control-section-language-hamburger-block-main`)
const mainLanguageText = document.querySelector('.control-section-language-hamburger-block-main-text')
const mainLanguageArrow = document.querySelector(`.control-section-language-hamburger-block-main-arrow`)
const languageButtons = document.querySelectorAll(`.control-section-language-hamburger-block-lang`)
const inputText = document.querySelector(`.search-section-search-input`)

mainLanguageButton.addEventListener('click', () => {
      languageBlock.classList.toggle('open-menu')
      mainLanguageArrow.classList.toggle('rotate-arrow')
})

languageButtons.forEach((languageButton) => languageButton.addEventListener('click', () => {
      let lat = weatherJson.location.lat
      let lon = weatherJson.location.lon

      mainLanguageText.textContent = languageButton.children[0].textContent
      languageBlock.classList.toggle('open-menu')
      mainLanguageArrow.classList.toggle('rotate-arrow')

      localStorage.setItem('lang', mainLanguageText.textContent.toLowerCase());

      inputText.value = ''

      setDate(mainLanguageText.textContent.toLowerCase())
      changeLanguageWeatherConditions(mainLanguageText.textContent.toLowerCase())
      takePlaceByCoordinatesCityCountry(mainLanguageText.textContent.toLowerCase(), lat, lon)
}))