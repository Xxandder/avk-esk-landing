var BURGER_CLASS = 'burger';

var burgerMenu = document.getElementsByClassName('burger')[0];
var closeBurger = document.getElementsByClassName('burger__close-button')[0];
var openBurger = document.getElementsByClassName('burger__button')[0];
var isBurgerOpened = false;

function toggleBurger() {
    if (isBurgerOpened) {
        burgerMenu.className = BURGER_CLASS + ' closed';
    } else {
        burgerMenu.className = BURGER_CLASS + ' open';
    }
    isBurgerOpened = !isBurgerOpened;
}

closeBurger.addEventListener('click', function() {
    toggleBurger();
});

openBurger.addEventListener('click', function() {
    toggleBurger();
});