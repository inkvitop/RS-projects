window.addEventListener('keydown', function(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const button = document.querySelector(`.button[data-key="${e.keyCode}"]`)
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      button.classList.add('active');
})

window.addEventListener('keyup', function(e){
      const button = document.querySelector(`.button[data-key="${e.keyCode}"]`)
      button.classList.remove('active');
})


function play(){
      const button = event.target;
      const buttonData = button.getAttribute('data-key');
      const audio = document.querySelector(`audio[data-key="${buttonData}"]`)
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
}


