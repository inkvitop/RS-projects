const searchSection = document.querySelector(`.search-section`)
const searchInput = document.querySelector(`.search-section-search-input`)


const placeholderTextLang = {
      'en': 'Search city',
      'ru': 'Искать город',
      'be': 'Пошук горада'
}
const placeholderTextLangError = {
      'en': 'Enter the correct query',
      'ru': 'Введите правильный запрос',
      'be': 'Увядзіце правільны запыт'
}

export function errorInput(condition, lang) {
      if(condition){
            searchSection.classList.add('error-input')
            searchInput.placeholder = placeholderTextLangError[lang]
      }else {
            searchSection.classList.remove('error-input')
            searchInput.placeholder = placeholderTextLang[lang]
      }
}