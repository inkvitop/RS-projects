import { carsInGarage } from '../../storage/tempObjects';

export const generateSingleTrackButton = (parent:Element, index:number):void => {
  //  controller
  const controllerWrapper = document.createElement('div');
  controllerWrapper.classList.add('controller');
  parent.appendChild(controllerWrapper);

  const startEngineBtn = document.createElement('div');
  startEngineBtn.classList.add('controller-start');
  startEngineBtn.id = `${carsInGarage[index].id}-start-id`;
  startEngineBtn.textContent = 'START';
  controllerWrapper.appendChild(startEngineBtn);

  const stopEngineBtn = document.createElement('div');
  stopEngineBtn.classList.add('controller-stop');
  stopEngineBtn.id = `${carsInGarage[index].id}-stop-id`;
  stopEngineBtn.textContent = 'STOP';
  controllerWrapper.appendChild(stopEngineBtn);

  //  controller name
  const carName = document.createElement('div');
  carName.classList.add('controller-name');
  carName.id = `${carsInGarage[index].id}-name-id`;
  carName.textContent = `${carsInGarage[index].name}`;
  controllerWrapper.appendChild(carName);

  const selectBtn = document.createElement('div');
  selectBtn.classList.add('controller-select');
  selectBtn.id = `${carsInGarage[index].id}-select-id`;
  selectBtn.textContent = 'SELECT';
  controllerWrapper.appendChild(selectBtn);

  const removeBtn = document.createElement('div');
  removeBtn.classList.add('controller-remove');
  removeBtn.id = `${carsInGarage[index].id}-remove-id`;
  removeBtn.textContent = 'REMOVE';
  controllerWrapper.appendChild(removeBtn);
};
