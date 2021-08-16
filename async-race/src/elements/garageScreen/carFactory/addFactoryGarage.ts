import { addFactoryGarageCarSvg } from './addFactoryCar';

export const addFactoryGarage = (parent:Element):void => {
  const factoryGarageWrapper = document.createElement('div');
  factoryGarageWrapper.classList.add('factory-garage-wrapper-garage');
  parent.appendChild(factoryGarageWrapper);

  const garageImg = document.createElement('img');
  garageImg.src = 'factory-garage.png';
  garageImg.classList.add('factory-garage-wrapper-garage-img');
  factoryGarageWrapper.appendChild(garageImg);

  const carWrapper = document.createElement('div');
  carWrapper.classList.add('factory-garage-wrapper-garage-wrapper');
  factoryGarageWrapper.appendChild(carWrapper);

  addFactoryGarageCarSvg(carWrapper);

  const garageDoor = document.createElement('div');
  garageDoor.classList.add('factory-garage-wrapper-garage-door');
  factoryGarageWrapper.appendChild(garageDoor);
};
