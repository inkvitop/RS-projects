import { carAnimations } from './carAnimations';
import { carsInGarage } from '../../storage/tempObjects';

export async function carStop(id:number):Promise<void> {
  fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`)
    .then((response) => response.json())
    .then(() => {
      // console.dir(d);
      let carIndexInArray = -1;
      for (let i = 0; i < carsInGarage.length; i++) {
        if (carsInGarage[i].id === id) {
          carIndexInArray = i;
          break;
        }
      }
      carsInGarage[carIndexInArray].status = 'stopped';

      const finishText = document.getElementById(`${id}-finish-text`);
      // console.log(finishText);
      finishText?.remove();
      carAnimations(id, 0, 'reset');
    });
}
