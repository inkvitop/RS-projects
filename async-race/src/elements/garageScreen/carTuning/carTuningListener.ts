import { updateCar } from '../../storage/tempObjects';
import { updateCarGarage } from './updateCarGarage';

document.addEventListener('click', (e) => {
  const targetTuningBtn = e.target as Element;

  if (targetTuningBtn.id === 'tuning-update-btn') {
    const updateColor = document.getElementById('tuning-color-input') as HTMLInputElement;
    const updateName = document.getElementById('tuning-name-input') as HTMLInputElement;

    document.getElementById('tuning-wrapper')?.classList.add('mute-update');
    //  update car in table
    const updatedCarName = document.getElementById(`${updateCar.updateCarId}-name-id`) as Element;
    updatedCarName.textContent = updateName.value;
    const updatedCarColor = document.getElementById(`${updateCar.updateCarId}-car-id`) as HTMLElement;
    if (updatedCarColor.firstChild) {
      const svgCar = document.getElementById(`${updateCar.updateCarId}-race-car-svg`) as HTMLElement;
      svgCar.style.fill = `${updateColor.value}`;
    }
    updateCarGarage(updateCar.updateCarId, updateColor.value, updateName.value);

    //  reset input value
    updateColor.value = '#ffffff';
    updateName.value = '';
  }
});
