         //SECTION 4
      //gallery button
const section4LeftButtonArrow = document.querySelector(`.section-4-block-button-left-arrow`)
const section4RightButtonArrow = document.querySelector(`.section-4-block-button-right-arrow`)
document.addEventListener(`mouseover`, (el)=> {
   try {
      if (el.target.className === `section-4-block-button-left`) {
         section4LeftButtonArrow.src = `assets/img/icon/leftWhiteArrow.png`
      }
   } catch (error) {

   }
})
document.addEventListener(`mouseout`, (el)=> {
   try {
      if (el.target.className === `section-4-block-button-left`) {
         section4LeftButtonArrow.src = `assets/img/icon/leftArrow.png`
      }
   } catch (error) {

   }
})
//right arrow
document.addEventListener(`mouseover`, (el)=> {
   try {
      if (el.target.className === `section-4-block-button-right`) {
         section4RightButtonArrow.src = `assets/img/icon/rightWhiteArrow.png`
      }
   } catch (error) {

   }
})
document.addEventListener(`mouseout`, (el)=> {
   try {
      if (el.target.className === `section-4-block-button-right`) {
         section4RightButtonArrow.src = `assets/img/icon/rightArrow.png`
      }
   } catch (error) {

   }
})


      //card button
document.addEventListener(`mouseover`, (el)=> {
   try {
      if (el.target.className === `section-4-gallery-card-wrapper-info-wrapper-cam-link`) {
         el.target.children[0].classList.add(`white-color`)
         el.target.children[1].attributes[1].nodeValue = `assets/img/icon/rightWhiteArrow.png`
      }
   } catch (error) {

   }
})
document.addEventListener(`mouseout`, (el)=> {
   try {
      if (el.target.className === `section-4-gallery-card-wrapper-info-wrapper-cam-link`) {
         el.target.children[0].classList.remove(`white-color`)
         el.target.children[1].attributes[1].nodeValue = `assets/img/icon/rightOrangeArrow.png`
      }
   } catch (error) {

   }
})


      //choose your favourite button
const chooseButtonText = document.querySelector(`.section-4-choose-button-text`)
const chooseButtonArrow = document.querySelector(`.section-4-choose-button-img`)
document.addEventListener(`mouseover`, (el)=> {
    try {
      if (el.target.className === `section-4-choose-button`) {
          chooseButtonText.classList.add(`white-color`)
          chooseButtonArrow.src = `assets/img/icon/rightWhiteArrow.png`
      }
    } catch (error) {

    }
})
document.addEventListener(`mouseout`, (el)=> {
    try {
      if (el.target.className === `section-4-choose-button`) {
        chooseButtonText.classList.remove(`white-color`)
        chooseButtonArrow.src = `assets/img/icon/rightArrow.png`
      }
    } catch (error) {

    }
})



const chooseButtonText2 = document.querySelector(`.section-7-wrapper-button-text`)
const chooseButtonArrow2 = document.querySelector(`.section-7-wrapper-button-image`)
document.addEventListener(`mouseover`, (el)=> {
    try {
      if (el.target.className === `section-7-wrapper-button`) {
          chooseButtonText2.classList.add(`white-color`)
          chooseButtonArrow2.src = `assets/img/icon/rightWhiteArrow.png`
      }
    } catch (error) {

    }
})
document.addEventListener(`mouseout`, (el)=> {
    try {
      if (el.target.className === `section-7-wrapper-button`) {
        chooseButtonText2.classList.remove(`white-color`)
        chooseButtonArrow2.src = `assets/img/icon/rightArrow.png`
      }
    } catch (error) {

    }
})


//FEED button
document.addEventListener(`mouseover`, (el)=> {
  try {
      if (el.target.className === `section-7-wrapper-gallery-wrapper-card-button`) {
        el.target.children[0].classList.add(`white-color`)
        el.target.children[1].attributes[1].nodeValue = `assets/img/icon/rightWhiteArrow.png`
      }
  } catch (error) {

  }
})
document.addEventListener(`mouseout`, (el)=> {
  try {
      if (el.target.className === `section-7-wrapper-gallery-wrapper-card-button`) {
        el.target.children[0].classList.remove(`white-color`)
        el.target.children[1].attributes[1].nodeValue = `assets/img/icon/rightOrangeArrow.png`
      }
  } catch (error) {

  }
})


//feedback button
const section6LeftButtonArrow = document.querySelector(`.section-6-wrapper-buttons-left-button-arrow`)
const section6RightButtonArrow = document.querySelector(`.section-6-wrapper-buttons-right-button-arrow`)
document.addEventListener(`mouseover`, (el)=> {
   try {
      if (el.target.className === `section-6-wrapper-buttons-left-button`) {
        section6LeftButtonArrow.src = `assets/img/icon/leftArrow.png`
      }
   } catch (error) {

   }
})
document.addEventListener(`mouseout`, (el)=> {
   try {
      if (el.target.className === `section-6-wrapper-buttons-left-button`) {
        section6LeftButtonArrow.src = `assets/img/icon/leftWhiteArrow.png`
      }
   } catch (error) {

   }
})
//right arrow
document.addEventListener(`mouseover`, (el)=> {
   try {
      if (el.target.className === `section-6-wrapper-buttons-right-button`) {
        section6RightButtonArrow.src = `assets/img/icon/rightArrow.png`
      }
   } catch (error) {

   }
})
document.addEventListener(`mouseout`, (el)=> {
   try {
      if (el.target.className === `section-6-wrapper-buttons-right-button`) {
        section6RightButtonArrow.src = `assets/img/icon/rightWhiteArrow.png`
      }
   } catch (error) {

   }
})




//ZOOS
    // view map
document.addEventListener(`mouseover`, (el)=> {
  try {
      if (el.target.className === `panda-knowledge-wrapper-info-block-info-range-form-button`
      || el.target.className === `lemur-knowledge-wrapper-info-block-info-range-form-button`
      || el.target.className === `eagle-knowledge-wrapper-info-block-info-range-form-button`
      || el.target.className === `gorilla-knowledge-wrapper-info-block-info-range-form-button`
      ) {

        console.log(`HIIIIIIIIII`)
        el.target.children[0].classList.add(`color-white`)
        el.target.children[1].attributes[0].nodeValue = `assets/img/icon/rightWhiteArrow.png`
      }
  } catch (error) {

  }
})
document.addEventListener(`mouseout`, (el)=> {
  try {
      if (el.target.className === `panda-knowledge-wrapper-info-block-info-range-form-button`
      || el.target.className === `lemur-knowledge-wrapper-info-block-info-range-form-button`
      || el.target.className === `eagle-knowledge-wrapper-info-block-info-range-form-button`
      || el.target.className === `gorilla-knowledge-wrapper-info-block-info-range-form-button`
      ) {
        el.target.children[0].classList.remove(`color-white`)
        el.target.children[1].attributes[0].nodeValue = `assets/img/icon/rightOrangeArrow.png`
      }
  } catch (error) {

  }
})
