const body = document.querySelector(`.body-container`)
import { backgroundMusic } from "../start_screen/startScreenBackgroundMusic";

export function startScreenGenerate() {
      let div = document.createElement(`div`)
      div.classList.add('start-window')
      div.innerHTML = 
      `
            <div class="start-window-contentblock">
                  <img src="start_screen/img/title.png" alt="game-name-icon">
                  <p class="game-description">It's raining numbers! Solve the equations before they fill the lake.</p>
                  <div class="game-start-buttons">
                        <div class="how-to-play" >
                              <p class="how-to-play-text">How to Play</p>
                              <img class="how-to-play-img" src="start_screen/img/instruction-icon-white.png" alt="instruction icon">
                        </div>
                        <div class="game-start-button">
                              <p class="game-start-button-text">Play</p>
                              <img class="game-start-button-img" src="start_screen/img/star-icon.png" alt="star-icon">
                        </div>
                  </div>
            </div>
            
      ` 
      body.insertAdjacentElement('beforeend', div)
      backgroundMusic(`play`)
}