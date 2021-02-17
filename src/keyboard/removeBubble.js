export function removeBubble(bubble) {
      bubble.classList.add(`clearBubble`)
      bubble.innerHTML = ``

      let bubbleSplash = document.createElement('img')
      bubbleSplash.src = `bubbles/img/splash.png`
      bubbleSplash.classList.add(`splash`)
      bubble.insertAdjacentElement('beforeend', bubbleSplash)
      
      setTimeout(() => {
         bubble.remove()
      }, 80);
}