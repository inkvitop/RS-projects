import { winnersList } from '../../../storage/tempObjects';
import { sortWinnerArray } from './sortWinnerArray';
import { winnersListLoadingScreen } from './winnersListLoadingScreen';
import { addWinnerCarSvg } from './addCarSvg';

export const setWinnersInTable = ():void => {
  sortWinnerArray();
  const parent = document.querySelector('.winner-list-wrapper-winners') as Element;

  winnersListLoadingScreen(parent);

  document.querySelector('.winners-list-table')?.remove();

  const winnersListTeble = document.createElement('div');
  winnersListTeble.classList.add('winners-list-table');
  parent.appendChild(winnersListTeble);

  setTimeout(() => {
    for (let index = 0; index < winnersList.length; index++) {
      const winnerCarWrapper = document.createElement('div');
      winnerCarWrapper.classList.add('winner-car-wrapper');
      winnersListTeble.appendChild(winnerCarWrapper);

      const position = document.createElement('div');
      position.classList.add('winner-car-position');
      position.textContent = `${index + 1}`;
      winnerCarWrapper.appendChild(position);

      const carWrapper = document.createElement('div');
      carWrapper.classList.add('winner-car-car');
      winnerCarWrapper.appendChild(carWrapper);

      addWinnerCarSvg(carWrapper, winnersList[index].color);

      const name = document.createElement('div');
      name.classList.add('winner-car-name');
      name.textContent = `${winnersList[index].name}`;
      winnerCarWrapper.appendChild(name);

      const wins = document.createElement('div');
      wins.classList.add('winner-car-wins');
      wins.textContent = `${winnersList[index].wins}`;
      winnerCarWrapper.appendChild(wins);

      const time = document.createElement('div');
      time.classList.add('winner-car-time');
      time.textContent = `${winnersList[index].time} sec`;
      winnerCarWrapper.appendChild(time);
    }
  }, 250);
};
