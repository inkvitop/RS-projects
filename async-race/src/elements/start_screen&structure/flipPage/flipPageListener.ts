import { generatePairButtonId } from './pairButtonId';
import { winnersPage, carsPage } from '../../storage/tempObjects';

let rotateDeg = 0;

//  animation
document.addEventListener('click', (e) => {
  const clickTarget = e.target as Element;
  if (clickTarget.className === 'flip-wrapper-btn') {
    const targetBtnId = clickTarget.id;

    if (targetBtnId.split('-')[1] === 'left') {
      rotateDeg -= 180;
    }
    if (targetBtnId.split('-')[1] === 'right') {
      rotateDeg += 180;
    }

    const targetWheel = clickTarget.children[0] as HTMLElement;
    targetWheel.style.transform = `rotateZ(${rotateDeg}deg) scale(1.4)`;
    setTimeout(() => {
      if (targetBtnId.split('-')[1] === 'left') {
        rotateDeg -= 180;
      }
      if (targetBtnId.split('-')[1] === 'right') {
        rotateDeg += 180;
      }
      targetWheel.style.transform = `rotateZ(${rotateDeg}deg) scale(1)`;
    }, 400);

    const pairBtnId = generatePairButtonId(targetBtnId);
    const pairBtn = document.getElementById(`${pairBtnId}`) as Element;
    const pairWheel = pairBtn.children[0] as HTMLElement;
    pairWheel.style.transform = `rotateZ(${rotateDeg}deg) scale(1.4)`;

    setTimeout(() => {
      if (targetBtnId.split('-')[1] === 'left') {
        rotateDeg -= 180;
      }
      if (targetBtnId.split('-')[1] === 'right') {
        rotateDeg += 180;
      }
      pairWheel.style.transform = `rotateZ(${rotateDeg}deg) scale(1)`;
    }, 400);
  }
});

//  action
document.addEventListener('click', (e) => {
  const clickTarget = e.target as Element;
  const headerPageCounter = document.querySelector('.flip-wrapper-page-wrapper-count') as Element;
  const winnersTable = document.querySelector('.winners-list-table') as HTMLElement;

  if (clickTarget.id === 'winners-right-btn') {
    winnersPage.count++;
    winnersPage.tableShift -= 500;
    winnersTable.style.left = `${winnersPage.tableShift}px`;
    if (headerPageCounter) headerPageCounter.textContent = String(winnersPage.count);
    document.getElementById('winners-left-btn')?.classList.remove('mute-winners-btn');
    if (winnersPage.count === winnersPage.maxCount) {
      clickTarget.classList.add('mute-winners-btn');
    } else { clickTarget.classList.remove('mute-winners-btn'); }
  }

  if (clickTarget.id === 'winners-left-btn') {
    winnersPage.count--;
    winnersPage.tableShift += 500;
    winnersTable.style.left = `${winnersPage.tableShift}px`;
    if (headerPageCounter) headerPageCounter.textContent = String(winnersPage.count);
    document.getElementById('winners-right-btn')?.classList.remove('mute-winners-btn');
    if (winnersPage.count === 1) {
      clickTarget.classList.add('mute-winners-btn');
    } else { clickTarget.classList.remove('mute-winners-btn'); }
  }
});

// garage action
document.addEventListener('click', (e) => {
  const clickTarget = e.target as Element;
  const headerPageCounterGarage = document.querySelector('.flip-wrapper-page-wrapper-count') as Element;
  const garageTable = document.querySelector('.race-table') as HTMLElement;

  if (clickTarget.id === 'garage-right-btn') {
    carsPage.count++;
    carsPage.tableShift -= 500;
    garageTable.style.left = `${carsPage.tableShift}px`;
    if (headerPageCounterGarage) headerPageCounterGarage.textContent = String(carsPage.count);

    const leftFlipGarageBtn = document.getElementById('garage-left-btn');
    if (leftFlipGarageBtn) {
      leftFlipGarageBtn.classList.remove('mute-garage-btn');
    }

    if (carsPage.count === carsPage.maxCount) {
      clickTarget.classList.add('mute-garage-btn');
    } else { clickTarget.classList.remove('mute-garage-btn'); }
  }

  if (clickTarget.id === 'garage-left-btn') {
    carsPage.count--;
    carsPage.tableShift += 500;
    garageTable.style.left = `${carsPage.tableShift}px`;
    if (headerPageCounterGarage) headerPageCounterGarage.textContent = String(carsPage.count);

    const rightFlipGarageBtn = document.getElementById('garage-right-btn');
    if (rightFlipGarageBtn) {
      rightFlipGarageBtn.classList.remove('mute-garage-btn');
    }

    if (carsPage.count === 1) {
      clickTarget.classList.add('mute-garage-btn');
    }
  }
});
