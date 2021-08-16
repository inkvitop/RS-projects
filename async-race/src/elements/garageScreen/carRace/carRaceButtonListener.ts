import { updateCar, raceWinners } from '../../storage/tempObjects';
import { deleteCarGarage } from './deleteCar';
import { carStart } from './carStart';
import { carStop } from './carStop';
import { muteIdStartButtons } from '../../start_screen&structure/addMuteStyle';

document.addEventListener('click', (e) => {
  const raceTargetBtn = e.target as Element;

  //  remove
  if (raceTargetBtn.className === 'controller-remove') {
    const carId = raceTargetBtn.id.split('-').slice(0, 1);
    deleteCarGarage(Number(carId));
  }

  //  select
  if (raceTargetBtn.className === 'controller-select') {
    document.getElementById('tuning-wrapper')?.classList.remove('mute-update');
    const carId = raceTargetBtn.id.split('-').slice(0, 1);
    if (carId) {
      updateCar.updateCarId = Number(carId);
    }

    //  update color
    const updateColor = document.getElementById('tuning-color-input') as HTMLInputElement;
    const carColor = document.getElementById(`${carId}-car-id`)?.dataset.color;
    if (carColor) {
      updateColor.value = carColor;
      updateCar.updateCarColor = carColor;
    }

    //  update name
    const updateName = document.getElementById('tuning-name-input') as HTMLInputElement;
    const carName = document.getElementById(`${carId}-name-id`)?.textContent;
    if (carName) {
      updateName.value = carName;
      updateCar.updateCarName = carName;
    }
  }

  //  start
  if (raceTargetBtn.className === 'controller-start') {
    const carId = raceTargetBtn.id.split('-').slice(0, 1);
    muteIdStartButtons(Number(carId), 'mute');
    carStart(Number(carId));
  }

  //  stop
  if (raceTargetBtn.className === 'controller-stop') {
    const carId = raceTargetBtn.id.split('-').slice(0, 1);
    carStop(Number(carId));
  }

  //  finish result
  if (raceTargetBtn.className === 'race-winner-screen'
  || raceTargetBtn.className === 'race-winner-screen-table-ok') {
    raceWinners.length = 0;

    const carsStartBtns = document.querySelectorAll('.controller-start');
    carsStartBtns.forEach((el) => {
      el.classList.remove('mute-button');
    });

    document.querySelector('.mass-wrapper-start')?.classList.remove('mute-button');
    document.querySelector('.race-winner-screen')?.remove();
  }
});
