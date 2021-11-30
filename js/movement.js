const openNav = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");
const opacity = document.querySelector(".courtain");

openNav.addEventListener("click", () => {
    navList.classList.toggle("active");
    opacity.classList.toggle("active");
});

window.addEventListener("scroll", () => {

    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    console.log(height);
    let scrolled = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
});