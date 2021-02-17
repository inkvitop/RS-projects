import { timerRun, upMaxNumber } from "../statistics/statistics";
import { spawnBubbles } from "../bubbles/spawnBubbles";
import { runWave } from "../waves/wavesRun";


export function startGame() {
      timerRun()
      spawnBubbles()
      upMaxNumber()
      runWave()
}

