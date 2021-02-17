import { generateFinalScreen } from "../finalScreen/generateFinalScreen";
import { removeBubble } from "../keyboard/removeBubble";

const waves = document.querySelector(`.water-up`)
const lowerWaves = document.querySelector(`.water-down`)
const score = document.querySelector(`.score-value`)
const time = document.querySelector(`.timer`)
const wavesSound = document.querySelector(`.wave-up`)

let fallBubbles = setInterval(() => {
      const allBubbles = document.querySelectorAll(`.bubble`)
      for (let i = 0; i < allBubbles.length; i++) {
            let bubble = allBubbles[i]
            let rect = bubble.getBoundingClientRect(score.innerHTML, time.innerHTML)
            let bubblePositionTop = rect.top
            
            if (bubblePositionTop >= 600 && waves.classList.contains('bubble-drop-second-water-up')) {
                  removeBubble(bubble)
                  score.textContent = Number(score.textContent) - 50
                  const finalScore = score.textContent
                  const finalTimer = time.textContent
                  generateFinalScreen(finalScore, finalTimer)
                  wavesSound.currentTime = 0
                  wavesSound.volume = 0.3
                  wavesSound.play()
            }else if (bubblePositionTop >= 630 && waves.classList.contains('bubble-drop-first-water-up') && !bubble.classList.contains(`splash`)) {
                  removeBubble(bubble)
                  waves.classList.add(`bubble-drop-second-water-up`)
                  lowerWaves.classList.add(`bubble-drop-second-water-down`)
                  score.textContent = Number(score.textContent) - 50
                  wavesSound.currentTime = 0
                  wavesSound.volume = 0.3
                  wavesSound.play()
            }else if (bubblePositionTop >= 710 && !bubble.classList.contains(`splash`)) {
                  removeBubble(bubble)
                  waves.classList.add(`bubble-drop-first-water-up`)
                  lowerWaves.classList.add(`bubble-drop-first-water-down`)
                  score.textContent = Number(score.textContent) - 50
                  wavesSound.currentTime = 0
                  wavesSound.volume = 0.3
                  wavesSound.play()
            }
      }
}, 90);

