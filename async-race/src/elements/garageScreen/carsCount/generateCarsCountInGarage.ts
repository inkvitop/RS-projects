import { getCarsCount } from '../../server/getCarsCount';

export const generateCarsCountInGarage = (parent:Element):void => {
  const coutnWrapper = document.createElement('div');
  coutnWrapper.classList.add('garage-cars-count');
  parent.appendChild(coutnWrapper);

  const text = document.createElement('p');
  text.classList.add('garage-cars-count-text');
  text.textContent = 'CARS IN GARAGE: ';
  coutnWrapper.appendChild(text);

  const count = document.createElement('span');
  count.classList.add('garage-cars-count-number');
  getCarsCount(count);
  coutnWrapper.appendChild(count);
};
