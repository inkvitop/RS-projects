import { generateInstructions4 } from "./instructions4";
import { generateInstructions2 } from "./instructions2";
import { startGame } from "../start_play/startPlay";
import { backgroundMusic } from "../start_screen/startScreenBackgroundMusic";
import { gameMusic } from "../start_play/playBGMusic";

export function generateInstructions3() {
      const instructionsBlock = document.querySelector(`.instructions`)
      instructionsBlock.innerHTML = ``
      instructionsBlock.innerHTML = 
      `
      <div class="instructions-block">
            <h2 class="instructions-content-h2">Instructions</h2>
            <div class="instructions-content">
                  <div class="instructions-content-video-block">
                        <video class="instructions-content-video" autoplay loop src="instructions/video/video3.mp4"></video>
                  </div>
                  <div class="instructions-content-text">
                        <p>Suns are bonuses! Solve the equation inside the sun and all the raindrops dry up.</p>
                        <img src="instructions/img/sun-bubble.jpg" alt="sun-raindrop">
                  </div>
            </div>
            <div class="instructions-navigation-buttons">
                  <div class="previos-button3">
                        <p class="previos-button3-text">Back</p>
                  </div>
                  <div class="next-button3">
                        <p class="next-button3-text">Next</p>
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
      if (e.srcElement.className === `next-button3`) {
            generateInstructions4()
      }
      if (e.srcElement.className === `previos-button3`) {
            generateInstructions2()
      }
      if (e.srcElement.classList[0] === `instructions-game-start-button`) {
            document.querySelector(`.instructions`).remove()
            startGame()
            backgroundMusic(`stop`)
            gameMusic(`play`)
      }
})
