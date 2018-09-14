'use strict';

document.getElementById('submit').onclick = function () {
    function sizeCalculate() {
        if (document.getElementById('small').checked) {
            return 'small';
        } else {
            return 'big';
        }
    }

    let size = sizeCalculate();
    let stuffing = document.getElementById('stuffing').value;
    let spice = document.getElementById('spice').checked;
    let mayo = document.getElementById('mayo').checked;

    let hamburger = new Hamburger(size, stuffing, spice, mayo);
    let total = document.querySelector('p');
    total.innerHTML = `Ваш гамбургер будет стоить ${hamburger.calculatePrice()} рублей и содержать ${hamburger.calculateCalories()} калорий`;
};