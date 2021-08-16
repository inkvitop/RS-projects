import { carsPage, carsInGarage } from '../storage/tempObjects';

export const getCarsCount = (element:Element):void => {
  carsInGarage.splice(0, carsInGarage.length);

  fetch('http://127.0.0.1:3000/garage')
    .then((response) => response.json())
    .then((data) => {
      // console.log('data cars count');
      // console.log(data);
      element.textContent = data.length;
      carsPage.maxCount = Math.ceil(data.length / 7);

      for (let index = 0; index < data.length; index++) {
        const tempCar = {
          id: -1,
          name: 'null',
          color: 'null',
          status: 'null',
        };
        tempCar.id = data[index].id;
        tempCar.name = data[index].name;
        tempCar.color = data[index].color;
        carsInGarage.push(tempCar);
      }

      if (data.length > 7) {
        document.getElementById('garage-right-btn')?.classList.remove('mute-winners-btn');
      }
    });
  // console.log('carsInGarage');
  // console.log(carsInGarage);
};
