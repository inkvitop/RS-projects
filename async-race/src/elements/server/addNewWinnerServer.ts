import { generateWinnerScreen } from '../winnerScreen/generateWinnersScreen';

export async function addNewWinnerSever(id:number, wins:number, time:number):Promise<void> {
  const url = 'http://127.0.0.1:3000/winners';
  const newWinner = {
    id: Number(id),
    wins: Number(wins),
    time: Number(time),
  };
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newWinner),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  setTimeout(() => {
    generateWinnerScreen();
  }, 1000);
}
