import { generateWinnerListWinners } from '../../winnerScreen/winnerList/winnerListWinners/generateWinnerListWinners';
import { winnersList, carsInGarage } from '../../storage/tempObjects';
import { search } from './findKeyValue';

function findWithAttr(array:Array<{ id: number, name: string, color: string }>, value:number) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].id === value) {
      return i;
    }
  }
  return -1;
}

export const deleteCarGarage = async (id:number):Promise<void> => {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const urlWinners = `http://127.0.0.1:3000/winners/${id}`;

  try {
    await fetch(url, {
      method: 'DELETE',
    });
  } catch (error) {
    // console.error('Ошибка:', error);
  }

  const checkWinnerId = search(id, winnersList);
  if (checkWinnerId === id) {
    try {
      await fetch(urlWinners, {
        method: 'DELETE',
      });
    } catch (error) {
      // console.error('Ошибка:', error);
    }
  }

  //  UPDATE CARS IN GARAGE
  const checkGarageCarId = findWithAttr(carsInGarage, id);
  carsInGarage.splice(checkGarageCarId, 1);

  setTimeout(() => {
    generateWinnerListWinners();
  }, 150);

  const track = document.getElementById(`${id}-track-id`);
  track?.remove();

  const carCount = document.querySelector('.garage-cars-count-number') as HTMLElement;
  const carCountValue = Number(carCount?.textContent) - 1;
  carCount.textContent = String(carCountValue);

  if (carCountValue < 8) {
    document.getElementById('garage-right-btn')?.classList.add('mute-winners-btn');
  }
};
