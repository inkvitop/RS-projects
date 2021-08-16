import { generateWinnerListButtons } from './winnerListButtons/generateWinnerListButtons';
import { generateWinnerListWinners } from './winnerListWinners/generateWinnerListWinners';

export const generateWinnerListWrapper = (parent:Element):void => {
  const winnerListWrapper = document.createElement('div');
  winnerListWrapper.classList.add('winner-list-wrapper');
  parent.appendChild(winnerListWrapper);

  const winnerListBtnWrapper = document.createElement('div');
  winnerListBtnWrapper.classList.add('winner-list-wrapper-buttons');
  winnerListWrapper.appendChild(winnerListBtnWrapper);

  generateWinnerListButtons(winnerListBtnWrapper);

  const winnerListWinnersWrapper = document.createElement('div');
  winnerListWinnersWrapper.classList.add('winner-list-wrapper-winners');
  winnerListWrapper.appendChild(winnerListWinnersWrapper);

  generateWinnerListWinners();
};
