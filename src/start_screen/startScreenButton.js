import { generateInstructions1 } from "../instructions/instructions1";
import { startGame } from "../start_play/startPlay";
import { backgroundMusic } from "../start_screen/startScreenBackgroundMusic";
import { gameMusic } from "../start_play/playBGMusic";

document.body.addEventListener('click', (e) => {
      if (e.srcElement.classList[0] === `how-to-play`) {
            document.querySelector(`.start-window`).remove()
            generateInstructions1()
      }
      if (e.srcElement.classList[0] === `game-start-button`) {
            document.querySelector(`.start-window`).remove()
            startGame()
            backgroundMusic(`stop`)
            gameMusic(`play`)
      }
})
