const startScreenBGMusic = document.querySelector(`.start-screen-bg-music`)

export function backgroundMusic(conditions) {
      if (conditions === `play`) {
            startScreenBGMusic.currentTime = 0
            startScreenBGMusic.volume = 0.1
            startScreenBGMusic.play()
      }else if (conditions === `stop`) {
            startScreenBGMusic.pause()
            startScreenBGMusic.currentTime = 0
      }
      
}