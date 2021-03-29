const header = document.querySelector('.header');
const menuTopBar = document.querySelector('.menu__top-bar');

window.addEventListener("scroll", function(){
  if (window.pageYOffset > header.offsetTop)
      showTopMenu()
  else 
      hideTopMenu()
})

function showTopMenu(){
  menuTopBar.style.top = "-50px";
  header.classList.add("header--sticky");
}

function hideTopMenu(){
  menuTopBar.style.top = "0px";
  header.classList.remove("header--sticky");
}