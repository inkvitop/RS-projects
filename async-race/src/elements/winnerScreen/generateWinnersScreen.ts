import { generateRoutingButtons } from '../start_screen&structure/routingButtons/generateRoutingButtons';
import { generateWinnersCount } from './winnersCount/generateWinnersCount';
import { generateFlipPages } from '../start_screen&structure/flipPage/generateFlipPage';
import { generateWinnerListWrapper } from './winnerList/generateWinnerListWrapper';

export const generateWinnerScreen = ():void => {
  const checkWinnerList = document.querySelector('.winner-screen');
  if (checkWinnerList) {
    checkWinnerList.remove();
  }
  const winnerScreen = document.createElement('div');
  winnerScreen.classList.add('winner-screen');
  winnerScreen.classList.add('hide-screen');
  document.body.appendChild(winnerScreen);

  generateRoutingButtons('winner', winnerScreen);
  generateWinnersCount(winnerScreen);
  generateFlipPages(winnerScreen, 'winners');
  generateWinnerListWrapper(winnerScreen);
};
