// import { getCarsCount } from './getCarsCount';

export const addMassCars = async (carName:string, carColor:string):Promise<void> => {
  // server
  const url = 'http://127.0.0.1:3000/garage';
  const car = {
    name: carName,
    color: carColor,
  };
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
