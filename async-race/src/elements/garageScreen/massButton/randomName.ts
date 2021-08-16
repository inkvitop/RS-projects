import { brandModelArr } from '../../storage/tempObjects';

export const randomName = ():string => {
  function randomInteger(min:number, max:number) {
    // получить случайное число от (min-0.5) до (max+0.5)
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const brandArr: string[] = ['Volkswagen', 'Renault', 'Toyota', 'Buick', 'Infiniti', 'Lexus'];
  const brandIndex = randomInteger(0, 5);
  const brandName = brandArr[brandIndex];
  const model = randomInteger(0, 9);

  return `${brandName} ${brandModelArr[brandIndex][model]}`;
};
