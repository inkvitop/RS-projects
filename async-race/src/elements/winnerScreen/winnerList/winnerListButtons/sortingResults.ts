import { sortStyle } from '../../../storage/tempObjects';
import { generateWinnerListWinners } from '../winnerListWinners/generateWinnerListWinners';

document.addEventListener('click', (e) => {
  const sortTrgtBtn = e.target as Element;

  if (sortTrgtBtn.id === 'wins-btn') {
    sortStyle.sort = 'wins';
    if (sortStyle.direction === 'normal') {
      sortStyle.direction = 'revers';
    } else if (sortStyle.direction === 'revers') {
      sortStyle.direction = 'normal';
    }

    generateWinnerListWinners();
  }

  if (sortTrgtBtn.id === 'time-btn') {
    sortStyle.sort = 'time';
    if (sortStyle.direction === 'normal') {
      sortStyle.direction = 'revers';
    } else if (sortStyle.direction === 'revers') {
      sortStyle.direction = 'normal';
    }

    generateWinnerListWinners();
  }
});
