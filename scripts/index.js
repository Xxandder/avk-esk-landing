const BURGER_CLASS = 'burger';

const burgerMenu = document.getElementsByClassName('burger')[0]
const closeBurger = document.getElementsByClassName('burger__close-button')[0]
const openBurger = document.getElementsByClassName('burger__button')[0];
let isBurgerOpened = false;

const toggleBurger =() => {
    burgerMenu.classList = isBurgerOpened ?  `${BURGER_CLASS} closed` : `${BURGER_CLASS} open`; 
    isBurgerOpened = !isBurgerOpened;
}

closeBurger.addEventListener('click', ()=>{
    toggleBurger();
})

openBurger.addEventListener('click', ()=>{
    toggleBurger();
})


