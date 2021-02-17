const waveUp = document.querySelector('.water-up');
const waveDown = document.querySelector('.water-down');


export function runWave() {
      waveUp.classList.remove('water-move-left');
      waveUp.classList.remove('water-move-right');

      waveUp.classList.add('water-move-left');
      waveUp.style.transition = `40s ease`;

      waveDown.classList.add('water-move-left');
      waveDown.style.transition = `60s ease`;

      setInterval(() => {
            if (waveUp.classList.contains('water-move-left')) {
                  waveUp.classList.remove('water-move-left');
                  waveUp.classList.add('water-move-right')
            }else {
                  waveUp.classList.remove('water-move-right');
                  waveUp.classList.add('water-move-left')
            }
      }, 40000);

      setInterval(() => {
            if (waveUp.classList.contains('water-move-left')) {
                  waveUp.classList.remove('water-move-left');
                  waveUp.classList.add('water-move-right')
            }else {
                  waveUp.classList.remove('water-move-right');
                  waveUp.classList.add('water-move-left')
            }
      }, 60000);
};