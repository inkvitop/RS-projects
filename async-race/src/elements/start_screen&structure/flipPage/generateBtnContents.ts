export const generateBtnContent = (parent:Element, direction:string):void => {
  const wheelImg = document.createElement('img');
  wheelImg.src = 'wheel-icon.png';
  wheelImg.classList.add('flip-wrapper-btn-img');
  parent.appendChild(wheelImg);

  const arrowImgWrapper = document.createElement('div');
  arrowImgWrapper.classList.add('flip-wrapper-btn-arrow');
  parent.appendChild(arrowImgWrapper);

  const arrowImg = document.createElement('img');
  arrowImg.classList.add('flip-wrapper-btn-arrow-img');
  if (direction === 'left') {
    arrowImg.classList.add('flip');
  }
  arrowImg.src = 'arrow-icon.png';
  arrowImgWrapper.appendChild(arrowImg);
};
