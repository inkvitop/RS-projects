import { generateWinnerScreen } from '../winnerScreen/generateWinnersScreen';

export async function updateWinnerSever(id:number, wins:number, time:number):Promise<void> {
  const url = `http://127.0.0.1:3000/winners/${id}`;
  const upadateWinner = {
    wins: Number(wins),
    time: Number(time),
  };
  await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(upadateWinner),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  setTimeout(() => {
    generateWinnerScreen();
  }, 1000);
}
