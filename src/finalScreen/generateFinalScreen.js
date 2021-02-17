import { gameMusic } from "../start_play/playBGMusic";
import { backgroundMusic } from "../start_screen/startScreenBackgroundMusic";

const body = document.querySelector(`.body-container`)
const gameZone = document.querySelector(`.game-block`)
const statisticsZone = document.querySelector(`.control-block`)


export function generateFinalScreen(score, time) {
      let div = document.createElement(`div`)
      div.classList.add('final-window')
      body.insertAdjacentElement('beforeend', div)

      let divFinalContentBlock = document.createElement(`div`)
      divFinalContentBlock.classList.add(`final-window-contentblock`)
      div.insertAdjacentElement('beforeend', divFinalContentBlock)

      let logoImg = document.createElement('img')
      logoImg.src = `start_screen/img/title.png`
      logoImg.alt = `game-name-icon`
      divFinalContentBlock.insertAdjacentElement('beforeend', logoImg)

      let divResultContainer = document.createElement(`div`)
      divResultContainer.classList.add(`result-container`)
      divFinalContentBlock.insertAdjacentElement('beforeend', divResultContainer)
      
      let pResultContainerTitle = document.createElement(`p`)
      pResultContainerTitle.classList.add(`result-container-title`)
      divResultContainer.insertAdjacentElement('beforeend', pResultContainerTitle)
      pResultContainerTitle.textContent = `GAME OVER`
      
      let finalScore = document.createElement(`div`)
      finalScore.classList.add(`final-score`)
      divResultContainer.insertAdjacentElement('beforeend', finalScore)
      finalScore.textContent = `GAME SCORE: ${score} points!`

      let finalTime = document.createElement(`div`)
      finalTime.classList.add(`final-time`)
      divResultContainer.insertAdjacentElement('beforeend', finalTime)
      finalTime.textContent = `PLAY TIME: ${time} seconds!`

      gameMusic(`stop`)
      backgroundMusic(`play`)

      gameZone.remove()
      statisticsZone.remove()
}

