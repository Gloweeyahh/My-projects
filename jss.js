function openMenu() {
    document.getElementById("sideMenu").classList.add("show-menu");
}

function closeMenu() {
document.getElementById("sideMenu").classList.remove("show-menu");
}window.onscroll = function() {
var line = document.querySelector('.line');
var nav = document.querySelector('nav'); 
var navHeight = nav.offsetHeight;


if (window.pageYOffset > navHeight) {
line.classList.add('fixed');
} else {
line.classList.remove('fixed');
}
};
