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

/* Service buttons handler starts */

const cardsLoop = (element) => {
    document.querySelectorAll('.service__main-item').forEach((item) => {
        if (item.classList.contains(element)) {
            item.classList.toggle('iactive');
        }
    })
}

const buttonHandler = (mainButton, secondaryButton, thirdButton, mainItem, secondItem, thirdItem) => {
    const orangeState = 'orange-state';
    mainButton.addEventListener('click', () => {
        mainButton.classList.toggle(orangeState);
        if (secondaryButton.classList.contains(orangeState) || thirdButton.classList.contains(orangeState)) {
            cardsLoop(mainItem);
        } else {
            cardsLoop(secondItem) || cardsLoop(thirdItem);
        }
    })
}

(function () {
    const gardensButton = document.querySelector('.bgardens');
    const lawnCareButton = document.querySelector('.blawn');
    const plantingButton = document.querySelector('.bplanting')
    const itemGardenCareString = 'item-garden-care';
    const itemPlantingString = 'item-planting';
    const itemLawnCareString = 'item-lawn-care';

    buttonHandler(gardensButton, lawnCareButton, plantingButton, itemGardenCareString, itemPlantingString, itemLawnCareString);

    buttonHandler(lawnCareButton, gardensButton, plantingButton, itemLawnCareString, itemPlantingString, itemGardenCareString);

    buttonHandler(plantingButton, gardensButton, lawnCareButton, itemPlantingString, itemGardenCareString, itemLawnCareString);

}());

/* Service buttons handler ends */

/* Prices handler starts */

(function () {
    document.querySelectorAll('details').forEach((accordion) => {
        accordion.addEventListener('click', (e) => {
            document.querySelectorAll('details').forEach((event) => {
                if (accordion !== event) {
                    event.removeAttribute('open');
                }
            })
        });
    })
}());

/* Prices handler ends */

/* Select handler starts */

(function () {
    const selectItem = document.querySelectorAll('.select__item');
    const selectHeader = document.querySelectorAll('.select__header');
    const card1 = document.querySelector('.a1');
    const card2 = document.querySelector('.a2');
    const card3 = document.querySelector('.a3');
    const card4 = document.querySelector('.a4');

    card1.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card1').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card1').classList.add('show-card');
        }
    })

    card2.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card2').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card2').classList.add('show-card');
        }
    })

    card3.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card3').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card3').classList.add('show-card');
        }
    })

    card4.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card4').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card4').classList.add('show-card');
        }
    })


    selectItem.forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('.contacts__dropdown').style.backgroundColor = '#C1E698';
        })
    })

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggleState)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectUpdateCurrentValue)
    });

    function selectToggleState() {
        this.parentElement.classList.toggle('caactive');
    }

    function selectUpdateCurrentValue() {
        let text = this.innerText,
            select = this.closest('.contacts__dropdown'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('caactive');
    }
}());

/* Select handler ends */