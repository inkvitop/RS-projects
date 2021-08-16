export const generateRoutingButtons = (pageName:string, page:Element):void => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('routing-button-wrapper');
  page.appendChild(wrapper);

  const garageBtn = document.createElement('div');
  garageBtn.classList.add('garage-btn');
  wrapper.appendChild(garageBtn);

  const garageBtnImg = document.createElement('img');
  garageBtnImg.src = 'garage-icon.png';
  garageBtnImg.classList.add('garage-btn-img');
  garageBtn.appendChild(garageBtnImg);

  const garageBtnText = document.createElement('h3');
  garageBtnText.textContent = 'GARAGE';
  garageBtnText.classList.add('garage-btn-text');
  garageBtn.appendChild(garageBtnText);

  const winnerBtn = document.createElement('div');
  winnerBtn.classList.add('winner-btn');
  wrapper.appendChild(winnerBtn);

  const winnerBtnText = document.createElement('h3');
  winnerBtnText.textContent = 'WINNER';
  winnerBtnText.classList.add('winner-btn-text');
  winnerBtn.appendChild(winnerBtnText);

  const winnerBtnImg = document.createElement('img');
  winnerBtnImg.src = 'winners-icon.png';
  winnerBtnImg.classList.add('winner-btn-img');
  winnerBtn.appendChild(winnerBtnImg);

  if (pageName === 'garage') {
    garageBtn.classList.add('muted');
  }
  if (pageName === 'winner') {
    winnerBtn.classList.add('muted');
  }
};
