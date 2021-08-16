import { generateRoutingButtons } from '../start_screen&structure/routingButtons/generateRoutingButtons';
import { generateCarFactory } from './carFactory/generateCarFactory';
import { generateTuningPlace } from './carTuning/generateTuningPlace';
import { generateFlipPages } from '../start_screen&structure/flipPage/generateFlipPage';
import { generateCarRace } from '../start_screen&structure/generateCarRace';
import { generateCarsCountInGarage } from './carsCount/generateCarsCountInGarage';
import { generateMassBtnBlock } from './massButton/generateMassBtnBlock';

export const generateGarageScreen = ():void => {
  const garageScreen = document.createElement('div');
  garageScreen.classList.add('garage-screen');
  document.body.appendChild(garageScreen);

  generateRoutingButtons('garage', garageScreen);

  generateCarFactory(garageScreen);

  generateTuningPlace(garageScreen);

  generateMassBtnBlock(garageScreen);

  generateFlipPages(garageScreen, 'garage');

  generateCarsCountInGarage(garageScreen);

  generateCarRace();
};
