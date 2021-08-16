export const winnersListLoadingScreen = (parent:Element):void => {
  const loadingScreen = document.createElement('div');
  loadingScreen.classList.add('winners-loading-screen');
  loadingScreen.textContent = 'Loading . . .';
  parent.appendChild(loadingScreen);

  setTimeout(() => {
    loadingScreen.remove();
  }, 800);
};
