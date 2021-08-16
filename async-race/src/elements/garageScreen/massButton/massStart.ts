import { carsInGarage } from '../../storage/tempObjects';
import { carStart } from '../carRace/carStart';

export function massStart():void {
  let endIndex = 0;
  let srartIndex = 0;
  const currentPage = document.querySelector('.flip-wrapper-page-wrapper-count')?.textContent;
  if (currentPage === '1') {
    srartIndex = 0;
    endIndex = carsInGarage.length < 7 ? carsInGarage.length : 7;
  } else {
    endIndex = Number(currentPage) * 7;
    srartIndex = endIndex - 7;
  }

  for (let index = srartIndex; index < endIndex; index++) {
    const carsId = carsInGarage[index].id;
    if (carsId) {
      carStart(carsId);
    }
  }
}
