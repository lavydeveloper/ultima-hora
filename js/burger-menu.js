export const burgerMenu = () => {
    
    const openNav = document.querySelector(".menu-icon");
    const navList = document.querySelector(".nav-list");
    const opacity = document.querySelector(".courtain");

    openNav.addEventListener("click", () => {
    navList.classList.toggle("active");
    opacity.classList.toggle("active");

});
    const btn = document.querySelector('.menu-btn')
    btn.addEventListener('click', function () {
    this.classList.toggle('is-active')
});

}