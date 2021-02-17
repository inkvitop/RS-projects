import { generateInstructions3 } from "./instructions3";
import { startGame } from "../start_play/startPlay";
import { backgroundMusic } from "../start_screen/startScreenBackgroundMusic";
import { gameMusic } from "../start_play/playBGMusic";

export function generateInstructions4() {
      const instructionsBlock = document.querySelector(`.instructions`)
      instructionsBlock.innerHTML = ``
      instructionsBlock.innerHTML = 
      `
      <div class="instructions-block">
            <h2 class="instructions-content-h2">Instructions</h2>
            <div class="instructions-content">
                  <div class="instructions-content-video-block">
                        <image class="instructions-content-video" src="instructions/img/4p.png"></image>
                  </div>
                  <div class="instructions-content-text">
                  <p><b>Tip:</b></p> 
                  <p>Be accurate - wrong answers reduce your score.</p>
                  </div>
                  
            </div>
            <div class="instructions-navigation-buttons">
                  <div class="previos-button4">
                        <p class="previos-button4-text">Back</p>
                  </div>
                  <div class="next-button4 shadow-button">
                        <p class="next-button4-text">Next</p>
                  </div>
            </div>
            <div class="instructions-game-start-button">
                  <p class="instructions-game-start-button-text">Play</p>
                  <img class="instructions-game-start-button-img" src="instructions/img/star-icon.png" alt="star-icon">
            </div>
      </div>
      ` 
}

document.body.addEventListener('click', (e) => {
      if (e.srcElement.className === `previos-button4`) {
            generateInstructions3()
      }
      if (e.srcElement.classList[0] === `instructions-game-start-button`) {
            document.querySelector(`.instructions`).remove()
            startGame()
            backgroundMusic(`stop`)
            gameMusic(`play`)
      }
})