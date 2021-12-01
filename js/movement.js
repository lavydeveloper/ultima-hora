const openNav = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");
const opacity = document.querySelector(".courtain");

/*DESPLEGABLE LISTA DE MENÚ*/ 
openNav.addEventListener("click", () => {
    navList.classList.toggle("active");
    opacity.classList.toggle("active");
});
/*BARRA DE PROGRESO CON SCROLL*/ 
window.addEventListener("scroll", () => {

    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(height)
    let scrolled = (winScroll / height) * 100;
    let stickyMenu = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
});

/*BURGER MENU*/
const btn = document.querySelector('.menu-btn')

btn.addEventListener('click', function () {
  this.classList.toggle('is-active')
})

