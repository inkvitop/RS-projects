import { takePlaceByName } from "./takePlaceByName";

const searchInput = document.querySelector(`.search-section-search-input`)
const inputHelper = document.querySelector(`.input-helper`)


export function chooseHelpInput(inputHelpsList) {
      inputHelpsList.forEach((inputHelp) => inputHelp.addEventListener('click', () => {
            let tempValue = inputHelp.textContent
            searchInput.value = tempValue;

            let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`).textContent.toLowerCase()

            takePlaceByName(currentLanguage, tempValue)

            inputHelper.innerHTML = ``
            inputHelper.classList.add(`hidden`)
      }))
}