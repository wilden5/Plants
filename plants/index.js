console.log(" 1. Вёрстка валидная +10 \n 2. Вёрстка семантическая +20 \n 3. Вёрстка соответствует макету +48 " +
    "\n 4. Требования к css +12 \n 5. Интерактивность, реализуемая через css +20 \n Итоговая оценка: 100 баллов")


    /* Burger handler */

    (function () {
        const burgerItem = document.querySelector('.burger');
        const menu = document.querySelector('.nav');
        const closeMenu = document.querySelector('.nav-close');
        const main = document.querySelector('.main');
        burgerItem.addEventListener('click', () => {
            menu.classList.add('nav-active');
        });
        closeMenu.addEventListener('click', () => {
            menu.classList.remove('nav-active');
        });
        main.addEventListener('click', () => {
            menu.classList.remove('nav-active');
        });
    }())