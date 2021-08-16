export const generateStartScreen = (state:string):void => {
  if (state === 'create') {
    const preloadScreen = document.createElement('div');
    preloadScreen.classList.add('preload-screen');
    document.body.appendChild(preloadScreen);

    const preloadScreenImg = document.createElement('img');
    preloadScreenImg.classList.add('preload-screen-img');
    preloadScreenImg.alt = 'load screen logo';
    preloadScreenImg.src = 'start-screen.png';
    preloadScreen.appendChild(preloadScreenImg);

    const preloadScreenText = document.createElement('h2');
    preloadScreenText.classList.add('preload-screen-title');
    preloadScreenText.textContent = 'Loading . . .';
    preloadScreen.appendChild(preloadScreenText);
  }
  if (state === 'delete') {
    const preloadScreen = document.querySelector('.preload-screen') as Element;
    preloadScreen.remove();
  }
};
