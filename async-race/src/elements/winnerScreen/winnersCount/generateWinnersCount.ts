import { getWinnersCount } from '../../server/getWinnersCount';

export const generateWinnersCount = (parent:Element):void => {
  const winnerWrapper = document.createElement('div');
  winnerWrapper.classList.add('winners-wrapper');
  parent.appendChild(winnerWrapper);

  const winnerWrapperText = document.createElement('p');
  winnerWrapperText.classList.add('winners-wrapper-text');
  winnerWrapperText.textContent = 'TOTAL WINNERS: ';
  winnerWrapper.appendChild(winnerWrapperText);

  const winnerWrapperCount = document.createElement('span');
  winnerWrapperCount.classList.add('winners-wrapper-count');
  getWinnersCount(winnerWrapperCount);
  winnerWrapper.appendChild(winnerWrapperCount);
};
