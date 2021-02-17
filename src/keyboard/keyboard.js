import { removeBubble } from "../keyboard/removeBubble";

const allNumberKey = document.querySelectorAll(`.number`)
const deleteKey = document.querySelector(`.delete`)
const clearKey = document.querySelector(`.clear`)
const enterKey = document.querySelector(`.enter`)
const reverseKey = document.querySelector(`.negative`)
const screenValue = document.querySelector(`.value-text`)
const score = document.querySelector(`.score-value`)

const soundKey = document.querySelector(`.sound-key`)
const soundMatch = document.querySelector(`.sound-match`)
const soundMiss = document.querySelector(`.sound-miss`)

let actualScore = 10;


function match(target, allBubbles) {
      screenValue.textContent = ''
      soundMatch.currentTime = 0;
      soundMatch.volume = 0.3
      soundMatch.play();
      removeBubble(target)
      score.textContent = Number(score.textContent) + actualScore
      actualScore++
      
      if(target.classList.contains("gold")){
            for (let i = 0; i < allBubbles.length; i++) {
                  let bubble = allBubbles[i]
                  removeBubble(bubble)
              }
      }
}
function miss() {
      
      soundMiss.currentTime = 0
      soundMiss.volume = 0.3
      soundMiss.play()
      if (screenValue.textContent != '') {
            score.textContent = Number(score.textContent) - (actualScore * 3)
            actualScore = 10;
      }
      screenValue.textContent = ''
}



function namberOnScreen(number) {
      if (screenValue.textContent.length < 7) {
            screenValue.textContent += number
            soundKey.currentTime = 0
            soundKey.volume = 0.3
            soundKey.play()
      }
      
}
function deleteNumber() {
      if (screenValue.textContent.length !== 0) {
            screenValue.textContent = screenValue.textContent.substring(0, screenValue.textContent.length - 1)
            soundKey.currentTime = 0;
            soundKey.volume = 0.3
            soundKey.play();
      }
}
function clearNumber() {
      if (screenValue.textContent.length !== 0) {
            screenValue.textContent = ''
            soundKey.currentTime = 0;
            soundKey.volume = 0.3
            soundKey.play();
      }
}
function pressEnter() {
      const allBubbles = document.querySelectorAll(`.bubble`)
      const screenValueCheck = screenValue.textContent
      
      for (let i = 0; i < allBubbles.length; i++) {
            let bubble = allBubbles[i]
            if (bubble.getAttribute('value') === screenValueCheck) {
                  return match(bubble, allBubbles)   
            }
      }
      miss()
}
function reverseNumber() {
      if (screenValue.textContent === '') {
            screenValue.textContent = '-'
            soundKey.currentTime = 0;
            soundKey.volume = 0.3
            soundKey.play();
      }else {
            screenValue.textContent = Number(screenValue.textContent) * (-1)
      }
      

}


for (let i = 0; i < allNumberKey.length; i++) {
      let key = allNumberKey[i]
      key.addEventListener('click', function (e) {
            namberOnScreen(e.srcElement.childNodes[0].textContent)
      });
}
clearKey.addEventListener('click', ()=> {
      clearNumber()
})
deleteKey.addEventListener('click', ()=> {
      deleteNumber()
})
enterKey.addEventListener('click', ()=> {
      pressEnter()
})
reverseKey.addEventListener('click', ()=> {
      reverseNumber()
})
document.body.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
            case 96:
                  namberOnScreen(0)
            break;
            case 97:
                  namberOnScreen(1)
            break;
            case 98:
                  namberOnScreen(2)
            break;
            case 99:
                  namberOnScreen(3)
            break;
            case 100:
                  namberOnScreen(4)
            break;
            case 101:
                  namberOnScreen(5)
            break;
            case 102:
                  namberOnScreen(6)
            break;
            case 103:
                  namberOnScreen(7)
            break;
            case 104:
                  namberOnScreen(8)
            break;
            case 105:
                  namberOnScreen(9)
            break;
            case 110:
                  deleteNumber()
            break;
            case 46:
                  deleteNumber()
            break;
            case 8:
                  clearNumber()
            break;
            case 13:
                  pressEnter()
            break;
            case 109:
                  reverseNumber()
            break;
      }
})