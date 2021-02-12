import { takePlaceByName } from "./takePlaceByName";
import { searchInputHelp } from "./searchInputHelp";

const searchButton = document.querySelector(`.search-section-search-button`)
const searchInput = document.querySelector(`.search-section-search-input`)
const inputHelper = document.querySelector(`.input-helper`)

searchButton.addEventListener('click', () => {
      let cityInputText = searchInput.value;
      let mainLanguageText = document.querySelector('.control-section-language-hamburger-block-main-text').textContent.toLowerCase();
      takePlaceByName(mainLanguageText, cityInputText)
      inputHelper.innerHTML = ``
})

searchInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
            let cityInputText = searchInput.value;
            let mainLanguageText = document.querySelector('.control-section-language-hamburger-block-main-text').textContent.toLowerCase();
            takePlaceByName(mainLanguageText, cityInputText) 
      }else {
            inputHelper.innerHTML = ``
            setTimeout(function(){searchInputHelp();},750);
      }
})
