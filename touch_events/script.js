'use strict';

// touchstart - Коснулись экрана
// touchend - Палец убрали
// touchmove - Двигаем пальцем
// touchenter 
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });
});

//console.log(e.touches);
//console.log(e.targetTouches);
//console.log(e.changedTouches);
