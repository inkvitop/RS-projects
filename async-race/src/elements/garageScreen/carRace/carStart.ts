import { carAnimations } from './carAnimations';
import { raceWinners, carsInGarage } from '../../storage/tempObjects';
import { raceWinnersTable } from './raceWinnersTable';
import { muteIdStartButtons } from '../../start_screen&structure/addMuteStyle';

export async function carStart(id:number):Promise<void> {
  const winnerCar = {
    id: -1,
    time: -1,
    status: -1,
  };
  let timeSec = 0;

  winnerCar.id = id;
  //  ENGINE STARTED
  fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`)
    .then((response) => response.json())
    .then((data) => {
      // console.dir(data);
      const time = Math.round(data.distance / data.velocity);
      timeSec = Math.round(data.distance / data.velocity) / 1000;

      let carIndexInArray = -1;
      for (let i = 0; i < carsInGarage.length; i++) {
        if (carsInGarage[i].id === id) {
          carIndexInArray = i;
          break;
        }
      }

      carsInGarage[carIndexInArray].status = 'race';

      carAnimations(id, timeSec, 'start');

      //  ENGINE STOPPED
      setTimeout(() => {
        fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`);
      }, time);
    })

    //  DRIVE MOD
    .then(() => {
      fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`)
        .then((response) => {
          const carsInGarageLength = carsInGarage.length < 7 ? carsInGarage.length : 7;
          muteIdStartButtons(Number(id), 'unmute');
          if (response.status === 500) {
            winnerCar.time = 100;
            winnerCar.status = 500;
            raceWinners.push(winnerCar);
            carAnimations(id, 0, 'broken');
            if (raceWinners.length === carsInGarageLength) {
              raceWinnersTable();
            }
          } else if (response.status === 200) {
            winnerCar.time = timeSec;
            winnerCar.status = 200;
            raceWinners.push(winnerCar);
            if (raceWinners.length === carsInGarageLength) {
              raceWinnersTable();
            }
          }
        });
    });
}
