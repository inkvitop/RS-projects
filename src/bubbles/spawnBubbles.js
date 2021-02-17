const bubbleZone = document.querySelector(`.bubble-zone`)

//СЛУЧАЙНОЕ ЧИСЛО
function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
}

//ГЕНЕРАЦИЯ ОПЕРАЦИИ
function calculate(x, operator, y){
      let summa;
      switch (operator) {
            case 1:
            summa = x + y;
            return summa;
            case 2:
            summa = x - y;
            return summa;
            case 3:
            summa = x * y;
            return summa;
            case 4:
            summa = x * y;
            return summa
      }
}
function calculateOperatorDom(operator) {
      let domOperation;
      switch (operator) {
            case 1:
            domOperation = '+';
            return domOperation;
            case 2:
            domOperation = '-';
            return domOperation;
            case 3:
            domOperation = '*';
            return domOperation;
            case 4:
            domOperation = '/';
            return domOperation;
      }
}

export function spawnBubbles() {
      let minNumber = Number(document.querySelector(`.lower-number`).textContent)
      let maxNumber = Number(document.querySelector(`.hi-number`).textContent)

      

      let bubble = document.createElement('div')
      bubble.classList.add('bubble')
      let bubblePositionX = randomInteger(50, 400)
      bubble.style.left = `${bubblePositionX}px`
      bubbleZone.appendChild(bubble)

      let spawnChanceGoldBabble = randomInteger(1, 20)
      if (spawnChanceGoldBabble === 20) {
            bubble.classList.add('gold')
      }

      if (document.querySelector(`.falling-speed`).textContent === `MODERATELY`) {
            bubble.classList.add('moderately')
      }
      if (document.querySelector(`.falling-speed`).textContent === `FAST`) {
            bubble.classList.add('fast')
      }

      const numbersContain = document.createElement('div');
      numbersContain.classList.add('numbers-contain');
      bubble.insertAdjacentElement('afterbegin', numbersContain);


      let randomOperation = randomInteger(1, 4)
      const divBubbleOperations = document.createElement('div');
      divBubbleOperations.classList.add('bubble-operation');
      const domOperation = calculateOperatorDom(randomOperation);
      divBubbleOperations.textContent = `${domOperation}`;
      bubble.insertAdjacentElement('afterbegin', divBubbleOperations);


      let secondNumber = randomInteger(minNumber, maxNumber)
      const divBubbleSecondNumber = document.createElement('div');
      divBubbleSecondNumber.classList.add('bubble-second-number');
      divBubbleSecondNumber.textContent = `${secondNumber}`;
      numbersContain.insertAdjacentElement('afterbegin', divBubbleSecondNumber);


      let firstNumber = randomInteger(minNumber, maxNumber)
      const divBubbleFirstNumber = document.createElement('div');
      divBubbleFirstNumber.classList.add('bubble-first-number');
      divBubbleFirstNumber.textContent = `${firstNumber}`;
      numbersContain.insertAdjacentElement('afterbegin', divBubbleFirstNumber);


      setTimeout(() => {
            bubble.classList.add('fall');
      }, 20);


      let summa = calculate(firstNumber, randomOperation, secondNumber)
      bubble.setAttribute('value', summa)
      if (randomOperation === 4) {
            bubble.setAttribute(`value`, firstNumber)
            divBubbleFirstNumber.textContent = summa
            divBubbleSecondNumber.textContent = secondNumber
      }
}