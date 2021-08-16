import { winnersList } from '../../../storage/tempObjects';
import { setWinnersInTable } from './setWinnersInTable';

export const generateWinnerListWinners = ():void => {
  fetch('http://127.0.0.1:3000/winners')
    .then((response) => response.json())
    .then((data) => {
      winnersList.splice(0, winnersList.length);
      for (let index = 0; index < data.length; index++) {
        const winnerCar = {
          id: -1,
          wins: -1,
          time: -1,
          color: 'null',
          name: 'null',
        };
        winnerCar.id = data[index].id;
        winnerCar.wins = data[index].wins;
        winnerCar.time = data[index].time;
        winnersList.push(winnerCar);
        fetch(`http://127.0.0.1:3000/garage/${data[index].id}`)
          .then((response) => response.json())
          .then((d) => {
            winnerCar.color = d.color;
            winnerCar.name = d.name;
          });
      }
    }).then(() => {
      setWinnersInTable();
    });
};
