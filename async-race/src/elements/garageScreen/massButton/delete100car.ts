import { carsInGarage } from '../../storage/tempObjects';
import { deleteCarGarage } from '../carRace/deleteCar';

export function deleteMassCars():void {
  const garageLength = carsInGarage.length;

  if (garageLength <= 100) {
    for (let index = 0; index < garageLength; index++) {
      const carId = carsInGarage[index].id;
      deleteCarGarage(carId);
    }
  } else if (garageLength > 100) {
    const startIndex = garageLength - 100;

    for (let index = startIndex; index < garageLength; index++) {
      const carId = carsInGarage[index].id;
      deleteCarGarage(carId);
    }
  }
}
