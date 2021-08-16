import { addSprayerSvg } from './addSprayerSvg';
import { addFactoryGarage } from './addFactoryGarage';

export const generateCarFactory = (parent:Element):void => {
  const carFactoryWrapper = document.createElement('div');
  carFactoryWrapper.classList.add('car-factory-wrapper');
  parent.appendChild(carFactoryWrapper);

  // name input
  const factoryNameInput = document.createElement('input');
  factoryNameInput.type = 'text';
  factoryNameInput.id = 'factory-name-input';
  factoryNameInput.classList.add('factory-name-input');
  factoryNameInput.placeholder = 'GIVE A NAME TO YOUR NEW CAR';
  carFactoryWrapper.appendChild(factoryNameInput);

  // garage
  const garageWrapper = document.createElement('div');
  garageWrapper.classList.add('factory-garage-wrapper');
  carFactoryWrapper.appendChild(garageWrapper);

  //  color input
  const factoryColorInputWrapper = document.createElement('div');
  factoryColorInputWrapper.classList.add('factory-garage-wrapper-color');
  garageWrapper.appendChild(factoryColorInputWrapper);

  const factoryColorInput = document.createElement('input');
  factoryColorInput.type = 'color';
  factoryColorInput.id = 'factory-color-input';
  factoryColorInput.classList.add('factory-color-input');
  factoryColorInput.value = '#ffffff';
  factoryColorInputWrapper.appendChild(factoryColorInput);

  addSprayerSvg(factoryColorInputWrapper);

  addFactoryGarage(garageWrapper);

  const createBtn = document.createElement('div');
  createBtn.id = 'factory-create-btn';
  createBtn.classList.add('factory-create-btn');
  createBtn.textContent = 'CREATE';
  garageWrapper.appendChild(createBtn);
};
