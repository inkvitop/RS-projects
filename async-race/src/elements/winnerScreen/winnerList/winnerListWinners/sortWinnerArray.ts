import { winnersList, sortStyle } from '../../../storage/tempObjects';

export const sortWinnerArray = ():void => {
  if (sortStyle.direction === 'normal') {
    if (sortStyle.sort === 'time') {
      winnersList.sort((a, b) => a.time - b.time);
    }
    if (sortStyle.sort === 'wins') {
      winnersList.sort((a, b) => a.wins - b.wins);
    }
  } else if (sortStyle.direction === 'revers') {
    if (sortStyle.sort === 'time') {
      winnersList.sort((a, b) => b.time - a.time);
    }
    if (sortStyle.sort === 'wins') {
      winnersList.sort((a, b) => b.wins - a.wins);
    }
  }
};
