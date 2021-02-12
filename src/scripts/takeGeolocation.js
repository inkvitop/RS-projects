import { takePlaceByCoordinates } from "./takePlaceByName";

export function takeGeolocation() {
      if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
				geolocationSuccess, 
				geolocationFailure,
				);
	}
	else {
		alert("Ваш браузер не поддерживает геолокацию")  
	}
}

function geolocationSuccess(position) {
	let currentLanguage = document.querySelector(`.control-section-language-hamburger-block-main-text`)
	currentLanguage = currentLanguage.textContent.toLowerCase()

      let coordinateLat = position.coords.latitude
      let coordinateLon = position.coords.longitude
	takePlaceByCoordinates(currentLanguage, coordinateLat, coordinateLon)
	
}

function geolocationFailure(positionError) {
      if(positionError == 1) {
		alert("Вы решили не предоставлять данные о своем местоположении, " + 
            "но это не проблема. Мы больше не будем запрашивать их у вас." + "воспользуйтесь поиском!")
	}
	else if(positionError == 2) {
		alert("Проблемы с сетью или нельзя связаться со службой определения " + "местоположения по каким-либо другим причинам." + "воспользуйтесь поиском!")
	}
	else if(positionError == 3) {
            alert("He удалось определить местоположение " + "в течение установленного времени. " + "воспользуйтесь поиском!")
	}
	else {
		alert("Загадочная ошибка." + "воспользуйтесь поиском!")
	}
}