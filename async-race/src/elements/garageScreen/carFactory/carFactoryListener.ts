import { invertColor } from './invertColor';
import { addNewCarToGarage } from './addNewCarToGarage';

//  color input
document.addEventListener('input', (e) => {
  const factoryTarget = e.target as HTMLInputElement;
  if (factoryTarget.id === 'factory-color-input') {
    //  sprayer
    const sprayer = document.getElementById('sprayer');
    sprayer?.setAttribute('fill', `${invertColor(factoryTarget.value)}`);

    //  car
    const car = document.getElementById('factory-garage-car');
    car?.setAttribute('fill', `${factoryTarget.value}`);
  }
});

//  create btn
document.addEventListener('click', (e) => {
  const factoryClickTarget = e.target as Element;

  if (factoryClickTarget.id === 'factory-create-btn') {
    document.querySelector('.factory-garage-wrapper-garage-door')?.classList.remove('close-door');
    addNewCarToGarage();
  }
});

//  door animation
document.addEventListener('mouseover', (e) => {
  const factoryOverTarget = e.target as Element;

  if (factoryOverTarget.className === 'car-factory-wrapper'
  || factoryOverTarget.id === 'factory-create-btn'
  || factoryOverTarget.id === 'factory-color-input'
  || factoryOverTarget.className === 'factory-garage-wrapper'
  || factoryOverTarget.id === 'factory-name-input') {
    const garageDoor = document.querySelector('.factory-garage-wrapper-garage-door');
    garageDoor?.classList.add('close-door');
  }
});

//  door animation
document.addEventListener('mouseout', (e) => {
  const factoryOutTarget = e.target as Element;

  if (factoryOutTarget.className === 'car-factory-wrapper'
  || factoryOutTarget.id === 'factory-create-btn'
  || factoryOutTarget.id === 'factory-color-input'
  || factoryOutTarget.className === 'factory-garage-wrapper') {
    const garageDoor = document.querySelector('.factory-garage-wrapper-garage-door');
    garageDoor?.classList.remove('close-door');
  }
});

//  alert name ok
document.addEventListener('click', (e) => {
  const factoryClickTarget = e.target as Element;

  if (factoryClickTarget.className === 'name-allert-wrapper-ok'
  || factoryClickTarget.className === 'name-allert') {
    document.querySelector('.name-allert')?.remove();
  }
});
