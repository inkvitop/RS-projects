import { spawnBubbles } from "../bubbles/spawnBubbles";

const timer = document.querySelector('.timer');
const maxNumber = document.querySelector(`.hi-number`)
const fallingSpeed = document.querySelector(`.falling-speed`)
const mainBlock = document.querySelector(`.main-block`)

export function timerRun() {
      let lastTimeNumber = 0;
      
      let myTimer = setInterval(() => {
            lastTimeNumber++;
            timer.textContent = lastTimeNumber;

            if (timer.textContent % 5 === 0) {
                  spawnBubbles()
            }
            if (timer.textContent === '30') {
                  clearInterval(myTimer)
                  timerRunHardness1()
            }
            if (mainBlock.innerHTML.replace(/\s+/g, '') === ``) {
                  clearInterval(myTimer)
            }
      }, 1000);
}

export function timerRunHardness1() {
      let lastTimeNumber = 30;
      fallingSpeed.textContent = `MODERATELY`
      
      let myTimer = setInterval(() => {
            lastTimeNumber++;
            timer.textContent = lastTimeNumber;

            if (timer.textContent % 4 === 0) {
                  spawnBubbles()
            }
            if (timer.textContent === '60') {
                  clearInterval(myTimer)
                  timerRunHardness2()
            }
            if (mainBlock.innerHTML.replace(/\s+/g, '') === ``) {
                  clearInterval(myTimer)
            }
      }, 1000);
}

export function timerRunHardness2() {
      let lastTimeNumber = 60;
      fallingSpeed.textContent = `FAST`

      let myTimer = setInterval(() => {
            lastTimeNumber++;
            timer.textContent = lastTimeNumber;

            if (timer.textContent % 3 === 0) {
                  spawnBubbles()
            } 
            if (mainBlock.innerHTML.replace(/\s+/g, '') === ``) {
                  clearInterval(myTimer)
            }
      }, 1000);
}

export function upMaxNumber() {
      setInterval(() => {
            maxNumber.textContent = Number(maxNumber.textContent) + 1
      }, 5000)
}

