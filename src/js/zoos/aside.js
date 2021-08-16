


document.addEventListener('scroll', (el)=> {
  moveAside()
})

function moveAside() {
  try {
    let aside = document.querySelector(".aside-wrapper");
    let asideCoordinate = aside.getBoundingClientRect();
    console.log(asideCoordinate)
    let top = `0px`
    let y = `0px`
    let bottom = `0px`
    if (asideCoordinate.top < 0) {
      // top = (asideCoordinate.top * (-1)) + `px`
      // console.log(top)
      y = (asideCoordinate.y * (-1)) * 2 + `px`
      console.log(y)
      // bottom = asideCoordinate.bottom + `px`
      // console.log(bottom)
      // console.log('TOP ' + asideCoordinate.top)

    }

    aside.style.top = y
  } catch (error) {

  }
}



// var top = el.style.top, left=el.style.left; //тут будут, например 100px
// top = parseInt(top); // теперь будет 100 без 'px'
// left = parseInt(left);
// el.style.top = (top+100)+'px'; // css требудет указания размерности
// el.style.left = (left+100)+'px';

// let coords = elem.getBoundingClientRect();
// console.log(coords)






// document.addEventListener('scroll', (el) => {
//   // console.log(el)

//   // createMessageUnder(elem)
// })



// function getCoordinates(elem) {
//   console.log(elem)
//   console.log(elem[0].offsetTop)

//   elem[0].offsetTop = elem[0].offsetTop + 200
//   console.log(elem[0].offsetTop)
// }

// getCoordinates(elem)

// function createMessageUnder(elem) {
//   // устанавливаем координаты элементу, не забываем про "px"!
//
//   console.log(coords)

//   message.style.left = coords.left + "px";
//   message.style.top = coords.bottom + "px";

//   return message;
// }
