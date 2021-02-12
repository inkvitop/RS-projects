import './scss/style.scss';
import { takeIpInfo, cityName } from "./scripts/takeIp";
import { setTime } from "./scripts/currentTime";
import { setDate } from "./scripts/currentDate";
import { setBackgroundImg } from "./scripts/changeBackground";
import "./scripts/bgRefreshButton";
import { takePlaceByName } from "./scripts/takePlaceByName";
import "./scripts/searchButton";
import "./scripts/changeTemperatureDegree"
import "./scripts/changeLanguage";
import "./scripts/weatherConditionsLang";
import "./scripts/searchInputHelp";
import "./scripts/inputHelpAction";
import { errorInput } from "./scripts/errorInput";


let currentLanguage;
if (localStorage.getItem('lang') === null) {
      currentLanguage = `en`
} else {
      currentLanguage = localStorage.getItem('lang')
      const mainLanguageText = document.querySelector('.control-section-language-hamburger-block-main-text')
      mainLanguageText.textContent = localStorage.getItem('lang').toUpperCase();
      errorInput(false, currentLanguage)
}

window.onload = function() {
      takeIpInfo(currentLanguage);
      setTime();
      setDate(currentLanguage);
      setBackgroundImg();
}