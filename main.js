const player = document.querySelector('.player');
const panel = document.querySelector('.controls-panel');
const progressPanel = document.querySelector('.controls-panel-progress');
const progressLine = document.querySelector('.controls-panel-progress-line');
const video = document.querySelector('.player-video');
const play = document.querySelector('.play');
const skipBack = document.querySelector('.back');
const skipForward = document.querySelector('.forward');
const playSpeed = document.querySelector('.time');
const volume = document.querySelector('.volume');




player.addEventListener('mouseover', function() {
      // player.classList.add('active-player');
      panel.classList.add('active-panel');
      progressPanel.classList.add('active-progress');
      progressLine.classList.add('active-progress');
} )

player.addEventListener('mouseout', function() {
      // player.classList.remove('active-player');
      panel.classList.remove('active-panel');
      progressPanel.classList.remove('active-progress');
      progressLine.classList.remove('active-progress');
})




function pausePlay () {
      if(video.paused){
            video.play();
      }else {
            video.pause()};
}
function updButton() {
      if(video.paused) {
            play.style.backgroundImage = "url(/img/play.png)";
      }else {
            play.style.backgroundImage = "url(/img/pause.png)";
      }
}
function skip() {
      video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
      video[this.name] = this.value;
}
function handleProgress() {
      const percent = (video.currentTime / video.duration) * 100;
      progressLine.style.transform = `translateX(${percent - 100}%)`;
}
function scrub(event) {
      const onePerc = 1280 / 100; 
      let evOffX = event.offsetX / onePerc; 
      evOffX = parseInt(evOffX);
      const scrubTime = (evOffX * (video.duration / 100));
      video.currentTime = scrubTime;
}



play.addEventListener('click', function() {
      pausePlay();
})
video.addEventListener('click', function() {
      pausePlay();
})
video.addEventListener('play', updButton);
video.addEventListener('pause', updButton);
video.addEventListener('timeupdate', handleProgress);

skipBack.addEventListener('click', skip);
skipForward.addEventListener('click', skip);
volume.addEventListener('click', handleRangeUpdate);
volume.addEventListener('mousemove', handleRangeUpdate);
playSpeed.addEventListener('click', handleRangeUpdate);
playSpeed.addEventListener('mousemove', handleRangeUpdate);

let mousedown = false;
progressPanel.addEventListener('click', scrub);
progressPanel.addEventListener('mousemove', (event) => mousedown && scrub(event));
progressPanel.addEventListener('mousedown', () => mousedown = true)
progressPanel.addEventListener('mouseup', () => mousedown = false)


