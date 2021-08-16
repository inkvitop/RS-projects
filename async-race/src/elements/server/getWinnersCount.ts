import { winnersPage } from '../storage/tempObjects';

export const getWinnersCount = (element:Element):void => {
  fetch('http://127.0.0.1:3000/winners')
    .then((response) => response.json())
    .then((data) => {
      element.textContent = data.length;
      winnersPage.maxCount = Math.ceil(data.length / 10);
    });
};
