import { carsInGarage } from '../../storage/tempObjects';
import { addCarToTrackSvg } from './addCarToTrack';

export const generateSingleTrackRoad = (parent:Element, index:number):void => {
  //  road
  const roadWrapper = document.createElement('div');
  roadWrapper.classList.add('road-wrapper');
  parent.appendChild(roadWrapper);

  const road = document.createElement('div');
  road.classList.add('road-wrapper-road');
  road.id = `${carsInGarage[index].id}-road-wrapper`;
  roadWrapper.appendChild(road);

  const car = document.createElement('div');
  car.classList.add('road-wrapper-road-car');
  car.id = `${carsInGarage[index].id}-car-id`;
  car.dataset.color = `${carsInGarage[index].color}`;
  road.appendChild(car);

  const finish = document.createElement('img');
  finish.classList.add('road-wrapper-road-finish');
  finish.src = 'flag.png';
  road.appendChild(finish);

  const roadBorder = document.createElement('div');
  roadBorder.textContent = '-------------------------------------------------------------------------------';
  roadBorder.classList.add('road-wrapper-border');
  roadWrapper.appendChild(roadBorder);

  addCarToTrackSvg(car, carsInGarage[index].color, carsInGarage[index].id);
};
