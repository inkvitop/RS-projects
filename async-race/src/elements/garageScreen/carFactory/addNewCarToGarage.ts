import { generateCarRace } from '../../start_screen&structure/generateCarRace';
import { getCarsCount } from '../../server/getCarsCount';

export const addNewCarToGarage = async ():Promise<void> => {
  // inputs
  const nameInput = document.getElementById('factory-name-input') as HTMLInputElement;
  const colorInput = document.getElementById('factory-color-input') as HTMLInputElement;

  // server
  const url = 'http://127.0.0.1:3000/garage';
  const car = {
    name: '',
    color: '',
  };

  car.name = `${nameInput.value}`;
  car.color = `${colorInput.value}`;

  if (nameInput.value.length >= 1) {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    //  alert message
    const nameAllert = document.createElement('div');
    nameAllert.classList.add('name-allert');
    document.body.appendChild(nameAllert);

    const nameAllertWrapper = document.createElement('div');
    nameAllertWrapper.classList.add('name-allert-wrapper');
    nameAllert.appendChild(nameAllertWrapper);

    const nameAllertOkWrapperText = document.createElement('div');
    nameAllertOkWrapperText.classList.add('name-allert-wrapper-text');
    nameAllertOkWrapperText.textContent = 'YOU SHOULD ENTER CAR NAME';
    nameAllertWrapper.appendChild(nameAllertOkWrapperText);

    const nameAllertOkWrapperButton = document.createElement('div');
    nameAllertOkWrapperButton.classList.add('name-allert-wrapper-ok');
    nameAllertOkWrapperButton.textContent = 'OK !';
    nameAllertWrapper.appendChild(nameAllertOkWrapperButton);
  }

  const counter = document.querySelector('.garage-cars-count-number');
  if (counter) {
    getCarsCount(counter);
  }

  setTimeout(() => {
    const garageScreen = document.querySelector('.garage-screen');
    if (garageScreen) {
      document.querySelector('.race-wrapper')?.remove();
      generateCarRace();
    }
  }, 300);

  nameInput.value = '';
  colorInput.value = '#ffffff';
  const sprayer = document.getElementById('sprayer');
  sprayer?.setAttribute('fill', '#000000');
  const carInGarage = document.getElementById('factory-garage-car');
  carInGarage?.setAttribute('fill', '#ffffff');
};
