import { winnersList, carsInGarage } from '../storage/tempObjects';
import { addNewWinnerSever } from './addNewWinnerServer';
import { updateWinnerSever } from './updateWinnerServer';

export function addNewWinner(id:number, time:number):void {
  let checker = false;
  const winnerToServer = {
    id: Number(id),
    time: Number(time),
    wins: 1,
  };
  const updateWinner = {
    id: Number(id),
    wins: -1,
    time: 100,
  };

  if (winnersList.length === 0 && time !== 100) {
    addNewWinnerSever(winnerToServer.id, winnerToServer.wins, winnerToServer.time);
    const newWinnerToList = {
      id: Number(id),
      wins: 1,
      time: Number(time),
      name: carsInGarage[0].name,
      color: carsInGarage[0].color,
    };
    winnersList.push(newWinnerToList);
  } else {
    for (let index = 0; index < winnersList.length; index++) {
      if (time !== 100) {
        if (winnersList[index].id === id) {
          checker = true;
          if (winnersList[index].time > time) {
            updateWinner.time = time;
          } else {
            updateWinner.time = winnersList[index].time;
          }
          updateWinner.wins = winnersList[index].wins + 1;
          updateWinnerSever(updateWinner.id, updateWinner.wins, updateWinner.time);
        }
      }
    }
    if (checker === false) {
      addNewWinnerSever(winnerToServer.id, winnerToServer.wins, winnerToServer.time);
    }
  }
}
