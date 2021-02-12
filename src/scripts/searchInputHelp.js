import { chooseHelpInput } from "./inputHelpAction";


const inputHelper = document.querySelector(`.input-helper`)

export function searchInputHelp() {
      let placeName = document.querySelector(`.search-section-search-input`).value
      
      if(placeName.length > 1) {
            fetch(`https://api.teleport.org/api/cities/?search=${placeName}&limit=10`)
            .then(res => res.json())
            .then(json => {

            inputHelper.innerHTML = ``

            let resultLength = json.count

            for (let index = 0; index < resultLength; index++) {
                  let div = document.createElement(`div`)
                  div.classList.add('input-helper-block')
                  div.textContent = json._embedded["city:search-results"][index].matching_full_name
                  inputHelper.insertAdjacentElement('beforeend', div)
            }

            inputHelper.classList.remove('hidden')

            
            let allInputHelp = document.querySelectorAll(`.input-helper-block`)
            chooseHelpInput(allInputHelp);

            }) 
            
      }
      
}