// import './index.html';
import './style.scss';
import { generateStartScreen } from './elements/start_screen&structure/generateStartScreen';
import { generateGarageScreen } from './elements/garageScreen/generateGarageScreen';
import { generateWinnerScreen } from './elements/winnerScreen/generateWinnersScreen';

//  listeners
import './elements/start_screen&structure/routingButtons/routingButtonsListener';
import './elements/start_screen&structure/flipPage/flipPageListener';
import './elements/winnerScreen/winnerList/winnerListButtons/sortingResults';
import './elements/garageScreen/carFactory/carFactoryListener';
import './elements/garageScreen/carTuning/carTuningListener';
import './elements/garageScreen/carRace/carRaceButtonListener';
import './elements/garageScreen/massButton/massBtnListener';

document.addEventListener('DOMContentLoaded', () => {
  generateStartScreen('create');
  generateGarageScreen();
  generateWinnerScreen();
  setTimeout(() => {
    generateStartScreen('delete');
  }, 1500);
});
