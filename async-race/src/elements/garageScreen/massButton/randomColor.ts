export const randomColor = ():string => {
  let randColor = '';
  const char = '0123456789abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < 6; i++) {
    randColor += char[Math.floor(Math.random() * 16)];
  }
  const color = `#${randColor}`;
  return color;
};
