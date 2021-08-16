export function search(searchNumber:number,
  arrayToSearch:Array<{ id: number, wins: number, time: number, name: string, color: string }>):number|undefined {
  let carId;
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].id === searchNumber) {
      carId = arrayToSearch[i].id;
      break;
    }
  }
  // console.log(carId);
  return carId;
}
