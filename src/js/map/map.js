document.addEventListener(`mouseover`, (el)=> {
   try {
      if (el.target.children[0].className === `map-wrapper-image`) {
         el.target.children[0].classList.add(`visible`)
         el.target.children[2].classList.add(`visible`)
         el.target.children[1].children[1].classList.add(`visible`)
   }
   } catch (error) {
      
   }
})

document.addEventListener(`mouseout`, (el)=> {
   try {
      if (el.target.children[0].classList[0] === `map-wrapper-image`) {
         el.target.children[0].classList.remove(`visible`)
         el.target.children[2].classList.remove(`visible`)
         el.target.children[1].children[1].classList.remove(`visible`)
      }
   } catch (error) {
      
   }
})
