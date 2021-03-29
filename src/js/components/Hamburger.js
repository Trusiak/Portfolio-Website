const hamburger = document.querySelector(".hamburger__button");
const hamburgerContainer = document.querySelector(".menu__wrapper");

hamburger.addEventListener("click", toogleHamburgerMenu)

function toogleHamburgerMenu(){
    hamburger.classList.toggle('opened')
    hamburgerContainer.classList.toggle('menu__wrapper--active');
}

function disableHamburgerMenu(){
    hamburger.classList.remove("opened");
    hamburgerContainer.classList.remove('menu__wrapper--active');
}