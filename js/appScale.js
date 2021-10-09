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

