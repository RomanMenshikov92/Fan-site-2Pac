///Масштабирование
window.addEventListener('resize', AutoScale); // Масштабируем страницу при растягивании

AutoScale(); // Масштабируем страницу после загрузки

function AutoScale() {
let width = window.innerWidth; // Ширина окна

    if(width > 1280) {
        ChangeScale('big');
    }
    else if(width <= 1280 && width > 720) {
        ChangeScale('normal');
    }
    else if (width < 720) {
        ChangeScale('small');
    }
}

///Фиксированный Header при прокрутке
/*window.onscroll = function() {myFunction()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}*/