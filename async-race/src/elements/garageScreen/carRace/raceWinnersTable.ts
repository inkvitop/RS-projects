import { raceWinners, carsInGarage } from '../../storage/tempObjects';
import { massStop } from '../massButton/massStop';
import { addNewWinner } from '../../server/addNewWinner';

export function raceWinnersTable():void {
  massStop();

  raceWinners.sort((a, b) => (a.time > b.time ? 1 : -1));

  addNewWinner(raceWinners[0].id, raceWinners[0].time);

  const raceWinnerScreen = document.createElement('div');
  raceWinnerScreen.classList.add('race-winner-screen');
  document.body.appendChild(raceWinnerScreen);

  const raceWinnerTable = document.createElement('div');
  raceWinnerTable.classList.add('race-winner-screen-table');
  raceWinnerScreen.appendChild(raceWinnerTable);

  const raceWinnerTableTitle = document.createElement('div');
  raceWinnerTableTitle.classList.add('race-winner-screen-table-title');
  raceWinnerTableTitle.textContent = 'RESULT TABLE';
  raceWinnerTable.appendChild(raceWinnerTableTitle);

  for (let index = 0; index < raceWinners.length; index++) {
    const tableLine = document.createElement('div');
    tableLine.classList.add('race-winner-screen-table-line');
    if (index === 0) {
      tableLine.classList.add('gold');
    }
    raceWinnerTable.appendChild(tableLine);

    const winnerPosition = document.createElement('div');
    winnerPosition.classList.add('race-winner-screen-table-line-position');
    winnerPosition.textContent = `${index + 1}.`;
    tableLine.appendChild(winnerPosition);

    const winnerCar = document.createElement('div');
    winnerCar.classList.add('race-winner-screen-table-line-car');
    const copyCar = document.getElementById(`${raceWinners[index].id}-car-id`)?.innerHTML;
    if (copyCar) {
      winnerCar.innerHTML = copyCar;
    }
    tableLine.appendChild(winnerCar);

    const winnerName = document.createElement('div');
    winnerName.classList.add('race-winner-screen-table-line-name');
    for (let i = 0; i < carsInGarage.length; i++) {
      if (carsInGarage[i].id === raceWinners[index].id) {
        winnerName.textContent = `${carsInGarage[i].name}`;
      }
    }
    tableLine.appendChild(winnerName);

    const winnerTime = document.createElement('div');
    winnerTime.classList.add('race-winner-screen-table-line-time');
    if (raceWinners[index].time === 100) {
      winnerTime.textContent = '--/--';
    } else {
      winnerTime.textContent = `${raceWinners[index].time} sec`;
    }
    tableLine.appendChild(winnerTime);
  }

  const okButton = document.createElement('div');
  okButton.classList.add('race-winner-screen-table-ok');
  okButton.textContent = 'OK !';
  raceWinnerTable.appendChild(okButton);
}
