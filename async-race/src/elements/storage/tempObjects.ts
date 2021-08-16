export const winnersPage = {
  count: 1,
  maxCount: 0,
  tableShift: 0,
};

export const carsPage = {
  count: 1,
  maxCount: 0,
  tableShift: 0,
};

export const updateCar = {
  updateCarId: -1,
  updateCarName: '',
  updateCarColor: '',
};

export const winnersList: { id: number, wins: number, time: number, name: string, color: string }[] = [];

export const carsInGarage: { id: number, name: string, color: string, status: string }[] = [];

export const sortStyle = {
  sort: 'time',
  direction: 'normal',
};

export const brandModelArr = [
  ['Golf', 'Polo', 'Jetta', 'Bora', 'Tiguan', 'Vento', 'Touran', 'Touareg', 'Sharan', 'Phaeton'],
  ['Arkana', 'Clio', 'Kadjar', 'Logan', 'Nouvelle ZOE', 'Twizy', 'Twingo GT', 'Clio R.S.', 'Ondelions', 'Sport RS 0.1'],
  ['Supra', 'RAV4', 'Land Cruiser', '2000GT', 'Altezza', 'Chaser', 'Crown S150', 'Kluger', 'MR-S', 'Origin'],
  ['Cascada', 'Verano', 'Rendezvous', 'Somerset', 'Apollo', 'Centurion', 'Wildcat', 'LeSabre', 'Electra', 'Eight'],
  ['G', 'FX', 'EX', 'J', 'I', 'JX', 'QX', 'M', 'Q', 'QX80'],
  ['CT', 'ES', 'GS', 'GX', 'HS', 'IS', 'LFA', 'LS', 'LX', 'SC'],
];

export const raceWinners: { id: number, time: number, status: number }[] = [];
