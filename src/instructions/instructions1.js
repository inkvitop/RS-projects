import { generateInstructions2 } from "./instructions2";
import { startGame } from "../start_play/startPlay";
import { backgroundMusic } from "../start_screen/startScreenBackgroundMusic";
import { gameMusic } from "../start_play/playBGMusic";

const body = document.querySelector(`.body-container`)

export function generateInstructions1() {
      let div = document.createElement(`div`)
      div.classList.add('instructions')
      div.innerHTML = 
      `
      <div class="instructions-block">
            <h2 class="instructions-content-h2">Instructions</h2>
            <div class="instructions-content">
                  <div class="instructions-content-video-block">
                        <video class="instructions-content-video" autoplay loop src="instructions/video/video1.mp4"></video>
                  </div>
                  <div class="instructions-content-text">
                        <p>Solve the equation in the raindrop before it reaches the water.</p>
                        <p>Select your answer on the number pad in the game and click <b>Enter</b> or use your computer keyboard and press the <b>Enter</b> key.</p>
                  </div>
                  
            </div>
            <div class="instructions-navigation-buttons">
                  <div class="previos-button1 shadow-button">
                        <p class="previos-button1-text">Back</p>
                  </div>
                  <div class="next-button1">
                        <p class="next-button1-text">Next</p>
                  </div>
            </div>
            <div class="instructions-game-start-button">
                  <p class="instructions-game-start-button-text">Play</p>
                  <img class="instructions-game-start-button-img" src="instructions/img/star-icon.png" alt="star-icon">
            </div>
      </div>
      ` 
      body.insertAdjacentElement('beforeend', div)
}

document.body.addEventListener('click', (e) => {
      if (e.srcElement.className === `next-button1`) {
            generateInstructions2()
      }
      if (e.srcElement.classList[0] === `instructions-game-start-button`) {
            document.querySelector(`.instructions`).remove()
            startGame()
            backgroundMusic(`stop`)
            gameMusic(`play`)
      }
})