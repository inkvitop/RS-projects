export const generateMassBtnBlock = (parent:Element):void => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('mass-wrapper');
  parent.appendChild(wrapper);

  const minus100 = document.createElement('div');
  minus100.classList.add('mass-wrapper-minus');
  minus100.id = 'minus';
  minus100.textContent = '- 100';
  wrapper.appendChild(minus100);

  const massStop = document.createElement('div');
  massStop.classList.add('mass-wrapper-stop');
  massStop.id = 'mass-stop';
  massStop.textContent = 'MASS STOP';
  wrapper.appendChild(massStop);

  const massStart = document.createElement('div');
  massStart.classList.add('mass-wrapper-start');
  massStart.id = 'mass-start';
  massStart.textContent = 'MASS START';
  wrapper.appendChild(massStart);

  const plus100 = document.createElement('div');
  plus100.classList.add('mass-wrapper-plus');
  plus100.id = 'plus';
  plus100.textContent = '+ 100';
  wrapper.appendChild(plus100);
};
