import { weatherJson } from "./weatherApi";

const weatherConditionText = document.querySelector(`.day-weather-section-info-condition`)

const weatherConditions = {
      '1000': {
            'en': 'Clear',
            'ru': 'Чистое небо',
            'be': 'Чыстае неба'
      },
      '1003': {
            'en': 'Partly cloudy',
            'ru': 'Частично облачно',
            'be': 'Пераменная воблачнасць'
      },
      '1006': {
            'en': 'Cloudy',
            'ru': 'Облачно',
            'be': 'Воблачна'
      },
      '1009': {
            'en': 'Overcast',
            'ru': 'Пасмурно',
            'be': 'Пахмурна'
      },
      '1030': {
            'en': 'Mist',
            'ru': 'Туман',
            'be': 'Туман'
      },
      '1063': {
            'en': 'Patchy rain possible',
            'ru': 'Возможен кратковременный дождь',
            'be': 'Магчымы невялікі дождж'
      },
      '1066': {
            'en': 'Patchy snow possible',
            'ru': 'Возможен кратковременный снег',
            'be': 'Магчымы невялікі снег'
      },
      '1069': {
            'en': 'Patchy sleet possible',
            'ru': 'Возможен легкий гололед',
            'be': 'Магчымы слабы галалёд'
      },
      '1072': {
            'en': 'Patchy freezing drizzle possible',
            'ru': 'Возможен небольшой мороз',
            'be': 'Магчымы невялікі мароз'
      },
      '1087': {
            'en': 'Thundery outbreaks possible',
            'ru': 'Возможны грозовые вспышки',
            'be': 'Магчымыя ўспышкі навальніцы'
      },
      '1114': {
            'en': 'Blowing snow',
            'ru': 'Позёмок',
            'be': 'Пазёмак'
      },
      '1117': {
            'en': 'Blizzard',
            'ru': 'Снежная буря',
            'be': 'Мяцеліца'
      },
      '1135': {
            'en': 'Fog',
            'ru': 'Туман',
            'be': 'Туман'
      },
      '1147': {
            'en': 'Freezing fog',
            'ru': 'Ледяной туман',
            'be': 'Замярзальны туман'
      },
      '1150': {
            'en': 'Patchy light drizzle',
            'ru': 'Местами слабая морось',
            'be': 'Магчымы лёгкі дождж'
      },
      '1153': {
            'en': 'Light drizzle',
            'ru': 'Легкая морось',
            'be': 'Лёгкі дождж'
      },
      '1168': {
            'en': 'Freezing drizzle',
            'ru': 'Изморозь',
            'be': 'Сцюдзёны дождж'
      },
      '1171': {
            'en': 'Heavy freezing drizzle',
            'ru': 'Сильная ледяная морось',
            'be': 'Моцны мароз'
      },
      '1180': {
            'en': 'Patchy light rain',
            'ru': 'Местами небольшой дождь',
            'be': 'Невялікі дождж'
      },
      '1183': {
            'en': 'Light rain',
            'ru': 'Легкий дождь',
            'be': 'Невялікі дождж'
      },
      '1186': {
            'en': 'Moderate rain at times',
            'ru': 'Временами умеренный дождь',
            'be': 'Часам умераны дождж'
      },
      '1189': {
            'en': 'Moderate rain',
            'ru': 'Умеренный дождь',
            'be': 'Умераны дождж'
      },
      '1192': {
            'en': 'Heavy rain at times',
            'ru': 'Временами сильный дождь',
            'be': 'Часам моцны дождж'
      },
      '1195': {
            'en': 'Heavy rain',
            'ru': 'Ливень',
            'be': 'Залева'
      },
      '1198': {
            'en': 'Light freezing rain',
            'ru': 'Легкий ледяной дождь',
            'be': 'Лёгкі марозны дождж'
      },
      '1201': {
            'en': 'Moderate or heavy freezing rain',
            'ru': 'Умеренный или сильный ледяной дождь',
            'be': 'Умераны альбо моцны марозны дождж'
      },
      '1204': {
            'en': 'Light sleet',
            'ru': 'Слабый гололёд',
            'be': 'Слабы галалёд'
      },
      '1207': {
            'en': 'Moderate or heavy sleet',
            'ru': 'Умеренный или сильный гололёд',
            'be': 'Умераны або моцны галалёд'
      },
      '1210': {
            'en': 'Patchy light snow',
            'ru': 'Местами легкий снег',
            'be': 'Невялікі снег'
      },
      '1213': {
            'en': 'Light snow',
            'ru': 'Слабый снег',
            'be': 'Невялікі снег'
      },
      '1216': {
            'en': 'Patchy moderate snow',
            'ru': 'Местами умеренный снег',
            'be': 'Магчымы ўмераны снег'
      },
      '1219': {
            'en': 'Moderate snow',
            'ru': 'Умеренный снег',
            'be': 'Умераны снег'
      },
      '1222': {
            'en': 'Patchy heavy snow',
            'ru': 'Местами сильный снегопад',
            'be': 'Магчымы моцны снег'
      },
      '1225': {
            'en': 'Heavy snow',
            'ru': 'Сильный снегопад',
            'be': 'Моцны снег'
      },
      '1237': {
            'en': 'Ice pellets',
            'ru': 'Град',
            'be': 'Град'
      },
      '1240': {
            'en': 'Light rain shower',
            'ru': 'Небольшой дождь',
            'be': 'Невялікі дождж'
      },
      '1243': {
            'en': 'Moderate or heavy rain shower',
            'ru': 'Умеренный или сильный дождь',
            'be': 'Умераны альбо моцны дождж'
      },
      '1246': {
            'en': 'Torrential rain shower',
            'ru': 'Проливной дождь',
            'be': 'Праліўны дождж'
      },
      '1249': {
            'en': 'Light sleet showers',
            'ru': 'Небольшой гололёд',
            'be': 'Слабы галалёд'
      },
      '1252': {
            'en': 'Moderate or heavy sleet showers',
            'ru': 'Умеренный или сильный дождь с мокрым снегом',
            'be': 'Умераны або моцны мокры снег'
      },
      '1255': {
            'en': 'Light snow showers',
            'ru': 'Небольшой снегопад',
            'be': 'Слабы снег'
      },
      '1258': {
            'en': 'Moderate or heavy snow showers',
            'ru': 'Умеренный или сильный снегопад',
            'be': 'Умераны або моцны снег'
      },
      '1261': {
            'en': 'Light showers of ice pellets',
            'ru': 'Легкий дождь с градом',
            'be': 'Невялікі дождж с градам'
      },
      '1264': {
            'en': 'Moderate or heavy showers of ice pellets',
            'ru': 'Умеренный или сильный дождь с градом',
            'be': 'Умераны або моцны дождж з градам'
      },
      '1273': {
            'en': 'Patchy light rain with thunder',
            'ru': 'Местами небольшой дождь с громом',
            'be': 'Невялікі дождж, навальніца'
      },
      '1276': {
            'en': 'Moderate or heavy rain with thunder',
            'ru': 'Умеренный или сильный дождь с грозой',
            'be': 'Умераны альбо моцны дождж з навальніцамі'
      },
      '1279': {
            'en': 'Patchy light snow with thunder',
            'ru': 'Местами легкий снег с громом',
            'be': 'Невялікі снег з навальніцамі'
      },
      '1282': {
            'en': 'Moderate or heavy snow with thunder',
            'ru': 'Умеренный или сильный снегопад с грозой',
            'be': 'Умераны альбо моцны снег з навальніцамі'
      }
}

export function changeLanguageWeatherConditions(lang) {
      let weatherCode = weatherJson.current.condition.code
      let weatherCodeStr = weatherCode.toString()
      let weatherCodeTextResult = weatherConditions[weatherCodeStr][lang];
      weatherConditionText.textContent = weatherCodeTextResult.toUpperCase();
}