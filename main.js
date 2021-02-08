
const speedBar = document.querySelector('.speed-bar');
const speedLine = document.querySelector('.speed-bar-control');
const video = document.querySelector('.player-video');
const text = document.querySelector('.speed-bar-control-text');

speedBar.addEventListener('mousemove', function(e) {
      const y = (e.pageY + 2) - this.offsetTop;
      const percent = y / this.offsetHeight;
      const min = 0.5;
      const max = 4;

      const height = Math.round(percent * 100);
      const revers = (100 - height);
      const reversPercent = (1 - percent);
      const reversHeight = revers + '%';
      const playbackRate = reversPercent * (max - min) + min;


      speedLine.style.height = reversHeight;
      text.textContent = playbackRate.toFixed(1) + 'x';
      video.playbackRate = playbackRate;

      
      // console.log('percent ' + percent);
      // console.log('revers ' + reversPercent )
      // console.log('reverseHeight ' + reversHeight);
})

