import { generateSingleTrackButton } from './generateSingleTrackButton';
import { generateSingleTrackRoad } from './generateSingleTrackRoad';
import { carsInGarage } from '../../storage/tempObjects';

export const generateSingleTrack = (parent:Element, index:number):void => {
  const track = document.createElement('div');
  track.classList.add('track');
  track.id = `${carsInGarage[index].id}-track-id`;
  parent.appendChild(track);

  generateSingleTrackButton(track, index);

  generateSingleTrackRoad(track, index);
};
