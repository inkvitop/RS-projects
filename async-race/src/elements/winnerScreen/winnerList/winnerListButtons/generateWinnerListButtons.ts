export const generateWinnerListButtons = (parent:Element):void => {
  const position = document.createElement('div');
  position.classList.add('winners-btn');
  position.textContent = '№:';
  parent.appendChild(position);

  const car = document.createElement('div');
  car.classList.add('winners-btn');
  car.textContent = 'CAR:';
  parent.appendChild(car);

  const name = document.createElement('div');
  name.classList.add('winners-btn');
  name.textContent = 'NAME:';
  parent.appendChild(name);

  const wins = document.createElement('div');
  wins.classList.add('winners-btn');
  wins.id = 'wins-btn';
  wins.textContent = 'WINS:';
  parent.appendChild(wins);

  const time = document.createElement('div');
  time.classList.add('winners-btn');
  time.id = 'time-btn';
  time.textContent = 'TIME:';
  parent.appendChild(time);
};
