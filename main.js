var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton"),
    navBar = document.querySelector("header .navbar"),
    signup = document.querySelector(".signup");

mediaButton.onclick = function () {
    
    "use strict";
    
    navBar.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

navBar.onclick = function(){
    navBar.classList.remove("show_list");
}

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');

window.addEventListener( 'scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});