
const dayText = document.querySelector(`.date-section-date-dayText`)
const dayNumber = document.querySelector(`.date-section-date-dayNumber`)
const monthText = document.querySelector(`.date-section-date-month`)
const day1Text = document.querySelector(`.period-weather-section-1-block-day-text`)
const day2Text = document.querySelector(`.period-weather-section-2-block-day-text`)
const day3Text = document.querySelector(`.period-weather-section-3-block-day-text`)
const latitudeText = document.querySelector(`.coordinate-section-latitude-lat`)
const longitudeText = document.querySelector(`.coordinate-section-longitude-lon`)

const searchButtonText = document.querySelector(`.search-section-search-button-text`)
const searchInputText = document.querySelector(`.search-section-search-input`)

const sectionFeelsText = document.querySelector(`.day-weather-section-info-feels-heading`)
const sectionWindText = document.querySelector(`.day-weather-section-info-wind-heading`)
const sectionWindTextSign = document.querySelector(`.day-weather-section-info-wind-speed-sign`)
const sectionHumidityText = document.querySelector(`.day-weather-section-info-humidity-heading`)


const day = {
      'en': {
            '1': `Mon`,
            '2': `Tue`,
            '3': `Wed`,
            '4': `Thu`,
            '5': `Fri`,
            '6': `Sat`,
            '0': `Sun`
      },
      'ru': {
            '1': `Пнд`,
            '2': `Втр`,
            '3': `Срд`,
            '4': `Чтв`,
            '5': `Птн`,
            '6': `Сбт`,
            '0': `Вск`
      },
      'be': {
            '1': `Пнд`,
            '2': `Аўт`,
            '3': `Сер`,
            '4': `Чцв`,
            '5': `Пят`,
            '6': `Суб`,
            '0': `Няд`
      }
}
const month = {
      'en': {
            '0': `January`,
            '1': `February`,
            '2': `March`,
            '3': `April`,
            '4': `May`,
            '5': `June`,
            '6': `July`,
            '7': `August`,
            '8': `September`,
            '9': `October`,
            '10': `November`,
            '11': `December`
      },
      'ru': {
            '0': `Января`,
            '1': `Февраля`,
            '2': `Марта`,
            '3': `Апреля`,
            '4': `Мая`,
            '5': `Июня`,
            '6': `Июля`,
            '7': `Августа`,
            '8': `Сентября`,
            '9': `Октября`,
            '10': `Ноября`,
            '11': `Декабря`
      },
      'be': {
            '0': `Студзеня`,
            '1': `Лютага`,
            '2': `Сакавiка`,
            '3': `Красавiка`,
            '4': `Мая`,
            '5': `Чэрвеня`,
            '6': `Лiпня`,
            '7': `Жнiуня`,
            '8': `Верасня`,
            '9': `Кастрычнiка`,
            '10': `Лiстапада`,
            '11': `Снежня`
      }
}
const fullDay = {
      'en': {
            '1': `Monday`,
            '2': `Tuesday`,
            '3': `Wednesday`,
            '4': `Thursday`,
            '5': `Friday`,
            '6': `Saturday`,
            '0': `Sunday`
      },
      'ru': {
            '1': `Понедельник`,
            '2': `Вторник`,
            '3': `Среда`,
            '4': `Четверг`,
            '5': `Пятница`,
            '6': `Суббота`,
            '0': `Воскресенье`
      },
      'be': {
            '1': `Панядзелак`,
            '2': `Аўторак`,
            '3': `Серада`,
            '4': `Чацверг`,
            '5': `Пятнiца`,
            '6': `Субота`,
            '0': `Нядзеля`
      }
}
const today = {
      'en': `TODAY`,
      'ru': `СЕГОДНЯ`,
      'be': `СЁННЯ`
}
const setLat = {
      'en': `Latitude:`,
      'ru': `Широта:`,
      'be': `Шырыня:`
}
const setLon = {
      'en': `Longitude:`,
      'ru': `Долгота:`,
      'be': `Даужыня:`
}
const searchInputTextLang = {
      'en': `Search city`,
      'ru': `Поиск города`,
      'be': `Пошук горада`
}
const searchButtonLang = {
      'en': `SEARCH`,
      'ru': `ПОИСК`,
      'be': `ПОШУК`
}
const feelsLikeLang = {
      'en': `FEELS LIKE: `,
      'ru': `ОЩУЩАЕТСЯ КАК: `,
      'be': `АДЧУВАЕЦЦА ЯК: `
}
const windLang = {
      'en': `WIND: `,
      'ru': `СКОРОСТЬ ВЕТРА: `,
      'be': `ХУТКАСЦЬ ВЕТРУ: `
}
const humidityLang = {
      'en': `HUMIDITY: `,
      'ru': `ВЛАЖНОСТЬ: `,
      'be': `ВІЛЬГОТНАСЦЬ: `
}
const windSignLang = {
      'en': `m/s`,
      'ru': `м/с`,
      'be': `м/с`
}


export function setDate(lang) {
      dayNumber.textContent = new Date().getDate();

      let getDay = new Date().getDay().toString();
      let setLanguageWeekDays = day[lang]
      dayText.textContent = setLanguageWeekDays[getDay]

      let getMonth = new Date().getMonth().toString();
      let setLanguageMonths = month[lang]
      monthText.textContent = setLanguageMonths[getMonth]    

      day1Text.textContent = today[lang]
      latitudeText.textContent = setLat[lang]
      longitudeText.textContent = setLon[lang]
      // searchInputText.placeholder = searchInputTextLang[lang]
      searchButtonText.textContent = searchButtonLang[lang]
      sectionFeelsText.textContent = feelsLikeLang[lang]
      sectionWindText.textContent = windLang[lang]
      sectionWindTextSign.textContent = windSignLang[lang]
      sectionHumidityText.textContent = humidityLang[lang]

      function setDays() {
            let day = new Date().getDay();
            let setLanguageWeekDays2 = fullDay[lang]

            switch (day) {
                  case 0:
                        day2Text.textContent = setLanguageWeekDays2[`1`].toUpperCase()
                        day3Text.textContent = setLanguageWeekDays2[`2`].toUpperCase()
                        break;
                  case 1:
                        day2Text.textContent = setLanguageWeekDays2[`2`].toUpperCase()
                        day3Text.textContent = setLanguageWeekDays2[`3`].toUpperCase()
                        break;
                  case 2:
                        day2Text.textContent = setLanguageWeekDays2[`3`].toUpperCase()
                        day3Text.textContent = setLanguageWeekDays2[`4`].toUpperCase()
                        break;
                  case 3:
                        day2Text.textContent = setLanguageWeekDays2[`4`].toUpperCase()
                        day3Text.textContent = setLanguageWeekDays2[`5`].toUpperCase()
                        break;
                  case 4:
                        day2Text.textContent = setLanguageWeekDays2[`5`].toUpperCase()
                        day3Text.textContent = setLanguageWeekDays2[`6`].toUpperCase()
                        break;
                  case 5:
                        day2Text.textContent = setLanguageWeekDays2[`6`].toUpperCase()
                        day3Text.textContent = setLanguageWeekDays2[`0`].toUpperCase()
                        break;
                  case 6:
                        day2Text.textContent = setLanguageWeekDays2[`0`].toUpperCase()
                        day3Text.textContent = setLanguageWeekDays2[`1`].toUpperCase()
                        break;
                  default:
                        day2Text.textContent = `?????`
      
            }
      }
      setDays();
}