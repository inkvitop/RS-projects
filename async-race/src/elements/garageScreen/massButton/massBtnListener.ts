import { randomColor } from './randomColor';
import { randomName } from './randomName';
import { addMassCars } from '../../server/add100CarsServer';
import { getCarsCount } from '../../server/getCarsCount';
import { generateCarRace } from '../../start_screen&structure/generateCarRace';
import { deleteMassCars } from './delete100car';
import { massStart } from './massStart';
import { massStop } from './massStop';

document.addEventListener('click', (e) => {
  const clickTarget = e.target as Element;

  //  -100
  if (clickTarget.id === 'minus') {
    deleteMassCars();
  }

  //  +100
  if (clickTarget.id === 'plus') {
    for (let index = 0; index < 100; index++) {
      const randColor = randomColor();
      const randName = randomName();
      addMassCars(randName, randColor);
    }

    setTimeout(() => {
      setTimeout(() => {
        generateCarRace();
      }, 500);
      const counter = document.querySelector('.garage-cars-count-number');
      if (counter) {
        getCarsCount(counter);
      }
    }, 300);
  }

  //  MASS STOP
  if (clickTarget.id === 'mass-stop') {
    massStop();
  }

  //  MASS START
  if (clickTarget.id === 'mass-start') {
    massStart();
  }
});
