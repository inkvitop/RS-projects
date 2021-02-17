const playBGMusic = document.querySelector(`.game-bg-music`)

export function gameMusic(conditions) {
      if (conditions === `play`) {
            playBGMusic.currentTime = 0
            playBGMusic.volume = 0.1
            playBGMusic.play()
      }else if (conditions === `stop`) {
            playBGMusic.pause()
            playBGMusic.currentTime = 0
      }
      
}