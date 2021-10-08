///Обьявление переменных///
let video = document.querySelector('.video');

///Воспроизведение и стоп///
let playAndStop = document.querySelector('.buttonPlayAndStop');
let imgChange1 = document.querySelector('.changeImg1');
let textChange1 = document.querySelector('.changeText1');
playAndStop.addEventListener('click', function() {
    if(video.paused) {
      video.play();
      imgChange1.src = "icon/play.png";
      textChange1.textContent = 'PLAY';
    } else {
      video.pause();
      imgChange1.src = "icon/stop.png";
      textChange1.textContent = 'STOP';
    }
    }, false);
    
///Звук выключен и включен///
let sound = document.querySelector('.buttonSound');
let imgChange2 = document.querySelector('.changeImg2');
let textChange2 = document.querySelector('.changeText2');
sound.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    imgChange2.src = "icon/icon_sound_enabled.png";
    textChange2.textContent = 'SOUND';
  } else {
    video.muted = true;
    imgChange2.src = "icon/icon_sound_disabled.png";
    textChange2.textContent = 'NO SOUND';
  }
  },false);

///Включение и выключение субтитров///
let sub = document.querySelector('.buttonSub');
let imgChange3 = document.querySelector('.changeImg3');
let textChange3 = document.querySelector('.changeText3');
sub.addEventListener("click", function() {
  for (let i = 0; i < video.textTracks.length; i++) {
  if (video.textTracks) {
    video.textTracks[i].mode = 'showing';
    imgChange3.src = "icon/subtitle_enabled.png";
    textChange3.textContent = 'SUBTITLE';
  } else  {
    video.textTracks[i].mode = 'disabled';
    imgChange3.src = "icon/subtitle_disabled.png";
    textChange3.textContent = 'NO SUBTITLE';
  }}
  },false);

let fullscreen = document.querySelector('.buttonFullScreen');
fullscreen.addEventListener("click", function() {
   // если элемент уже в полноэкранном режиме, выйти из него
   // В противном случае войти в полный экран
   if (video.fullscreenElement) {
    video.exitFullscreen();
   } else {
    video.requestFullscreen();
   }
  }, false);






