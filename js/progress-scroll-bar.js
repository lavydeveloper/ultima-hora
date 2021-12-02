export const progressScrollBar = () => {

window.addEventListener("scroll", () => {

    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(height)
    let scrolled = (winScroll / height) * 100;
    let stickyMenu = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
});

}



