import { generateWinnerListWinners } from '../../winnerScreen/winnerList/winnerListWinners/generateWinnerListWinners';

export const updateCarGarage = async (id:number, newColor:string, newName:string):Promise<void> => {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const updateCar = {
    name: newName,
    color: newColor,
  };

  try {
    // const response =
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(updateCar),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // const json = await response.json();
    // console.log('Успех:', JSON.stringify(json));
    generateWinnerListWinners();
  } catch (error) {
    // console.error('Ошибка:', error);
  }
};
