import { carsInGarage } from '../storage/tempObjects';
import { generateSingleTrack } from '../garageScreen/carRace/generateSingleTrack';

export const generateCarRace = ():void => {
  const parent = document.querySelector('.garage-screen');
  const raceWrapperCheck = document.querySelector('.race-wrapper');
  if (raceWrapperCheck) {
    raceWrapperCheck.remove();
  }

  const raceWrapper = document.createElement('div');
  raceWrapper.classList.add('race-wrapper');
  if (parent) {
    parent.appendChild(raceWrapper);
  }

  const raceTable = document.createElement('div');
  raceTable.classList.add('race-table');
  raceWrapper.appendChild(raceTable);

  setTimeout(() => {
    for (let index = 0; index < carsInGarage.length; index++) {
      generateSingleTrack(raceTable, index);
    }
  }, 100);
};
