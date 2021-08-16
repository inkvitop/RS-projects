document.addEventListener('click', (e) => {
  const routingBtnTarget = e.target as Element;

  if (routingBtnTarget.className === 'garage-btn') {
    const winnerScreen = document.querySelector('.winner-screen');
    winnerScreen?.classList.add('hide-screen');
  }
  if (routingBtnTarget.className === 'winner-btn') {
    const winnerScreen = document.querySelector('.winner-screen');
    winnerScreen?.classList.remove('hide-screen');
  }
});
