const mainBlock = document.querySelector(`.body-block`)

const backgroundImages = [
      `"img/background_img/bg1.jpg"`,
      `"img/background_img/bg2.jpg"`,
      `"img/background_img/bg3.jpg"`,
      `"img/background_img/bg4.jpg"`,
      `"img/background_img/bg5.jpg"`,
      `"img/background_img/bg6.jpg"`
]

export function setBackgroundImg() {
      function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
          } 

      const randomBgNumber = randomInteger(0, 5)
      let check =  mainBlock.style.backgroundImage
      let newBg = `url(${backgroundImages[randomBgNumber]})`

      if(check == newBg) {
            setBackgroundImg()
      }else {
            mainBlock.style.backgroundImage = newBg
      }
}