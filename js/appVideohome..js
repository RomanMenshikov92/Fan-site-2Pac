///Обьявление переменных///
let video = document.querySelector('.video');

///Воспроизведение и стоп///
let playAndStop = document.querySelector('.buttonPlayAndStop');
let imgChange1 = document.querySelector('.changeImg1');
playAndStop.addEventListener('click', function() {
    if(video.paused) {
      video.play();
      ///imgChange1.src = "icon/play.png";
    } else {
      video.pause();
      ///imgChange1.src = "icon/stop.png";
    }
    }, false);
///Звук выключен и включен///
let sound = document.querySelector('.buttonSound');
let imgChange2 = document.querySelector('.changeImg2');
sound.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    imgChange2.src = "icon/icon_sound_enabled.png";
  } else {
    video.muted = true;
    imgChange2.src = "icon/icon_sound_disabled.png";
  }
  },false);
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


