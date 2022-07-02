"use strict";

window.addEventListener("load", () => {
    document.getElementById("loader").classList.remove("active");
    document.body.classList.remove("cutY");
})

const hamburger = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".nav-menu");
const navigationLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active");
});

navigationLinks.forEach( (link) => 
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navigationMenu.classList.remove("active");
}));



/* test */

const resizeBtn = document.querySelector(".change-fit-image");
const pullBtn = document.getElementById("pulledImage");
resizeBtn.addEventListener("click", () => {
    pullBtn.classList.toggle("active");
})
