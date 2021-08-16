export const generatePairButtonId = (firstId:string):string => {
  let result = '';
  const firstIdArr = firstId.split('-');
  if (firstIdArr[1] === 'left') {
    firstIdArr[1] = 'right';
    result = firstIdArr.join('-');
  } else if (firstIdArr[1] === 'right') {
    firstIdArr[1] = 'left';
    result = firstIdArr.join('-');
  }
  return result;
};
