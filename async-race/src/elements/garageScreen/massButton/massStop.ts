import { carStop } from '../carRace/carStop';
import { carsInGarage } from '../../storage/tempObjects';

export function massStop():void {
  for (let index = 0; index < carsInGarage.length; index++) {
    const carPosition = document.getElementById(`${carsInGarage[index].id}-car-id`) as HTMLElement;
    const carStyles = window.getComputedStyle(carPosition, null);

    if (carStyles.left !== '5px') {
      carStop(carsInGarage[index].id);
    }
  }
}
