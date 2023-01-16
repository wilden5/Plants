console.log(" 1. Вёрстка соответствует макету. Ширина экрана 768px +24" +
    "\n 2. Вёрстка соответствует макету. Ширина экрана 380px +24" +
    "\n 3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. " +
    "\n 4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 \n Итоговая оценка: 75 баллов");


/* Burger handler starts */

(function () {
    const burgerItem = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav');
    const closeButton = document.querySelector('.nav-close');
    const main = document.querySelector('.main');
    burgerItem.addEventListener('click', () => {
        navMenu.classList.add('nav-active');
    });
    closeButton.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
    main.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
}())

/* Burger handler ends */