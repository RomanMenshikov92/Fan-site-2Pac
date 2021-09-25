///Обьявление переменных///
let video = document.querySelector('.video');

///Воспроизведение и стоп///
let playAndStop = document.querySelector('.buttonPlayAndStop');
playAndStop.addEventListener("click", function() {
    if(video.paused || video.ended) {
      video.play();
      playAndStop.img.src = "/icon/play.png";
    } else {
      video.pause();
      playAndStop.img.src = "/icon/stop.png";
    }
    }, false);
///Звук выключен и включен///
let sound = document.querySelector('.buttonSound');
sound.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    sound.value = "Mute";
  } else {
    video.muted = true;
    sound.value = "Unmute";
  }
  }, false);
///Полный экран и выход из него///
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
  
///Включение и выключение субтитров///
let sub = document.querySelector('.buttonSub');
sub.addEventListener("click", function() {
  if (video.subtitle) {
    video.subtitle = false;
    sub.value = 'disabled';
  } else {
    video.subtitle = true;
    sub.value = 'enabled';
  }
  }, false);
