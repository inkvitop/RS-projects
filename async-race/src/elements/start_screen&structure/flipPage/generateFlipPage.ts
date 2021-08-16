import {
  carsPage, winnersPage, winnersList, carsInGarage,
} from '../../storage/tempObjects';
import { generateBtnContent } from './generateBtnContents';

export const generateFlipPages = (parent:Element, id:string):void => {
  const flippWrapper = document.createElement('div');
  flippWrapper.classList.add('flip-wrapper');
  parent.appendChild(flippWrapper);

  const leftBtn = document.createElement('div');
  leftBtn.classList.add('flip-wrapper-btn');
  leftBtn.classList.add(`mute-${id}-btn`);
  leftBtn.id = `${id}-left-btn`;
  flippWrapper.appendChild(leftBtn);

  generateBtnContent(leftBtn, 'left');

  const currentPageWrapper = document.createElement('div');
  currentPageWrapper.classList.add('flip-wrapper-page-wrapper');
  flippWrapper.appendChild(currentPageWrapper);

  const currentPageWrapperText = document.createElement('p');
  currentPageWrapperText.classList.add('flip-wrapper-page-wrapper-text');
  currentPageWrapperText.textContent = 'PAGE: ';
  currentPageWrapper.appendChild(currentPageWrapperText);

  const currentPageWrapperCount = document.createElement('span');
  currentPageWrapperCount.classList.add('flip-wrapper-page-wrapper-count');
  if (id === 'winners') {
    currentPageWrapperCount.textContent = `${winnersPage.count}`;
  }
  if (id === 'garage') {
    currentPageWrapperCount.textContent = `${carsPage.count}`;
  }
  currentPageWrapper.appendChild(currentPageWrapperCount);

  const rightBtn = document.createElement('div');
  rightBtn.classList.add('flip-wrapper-btn');
  if (id === 'winners') {
    if (winnersList.length < 8) {
      rightBtn.classList.add('mute-winners-btn');
    }
  }
  if (id === 'garage') {
    if (carsInGarage.length < 8) {
      rightBtn.classList.add('mute-winners-btn');
    }
  }
  rightBtn.id = `${id}-right-btn`;
  flippWrapper.appendChild(rightBtn);

  generateBtnContent(rightBtn, 'right');
};
