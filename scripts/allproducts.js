// Filter code
let filterButton = document.querySelector("main > section button");
let closeFilterButton = document.querySelector("main ul li button");
filterButton.addEventListener("click", toggleMenu);
closeFilterButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    let hamburgerMenu = document.querySelector("main > ul");
    hamburgerMenu.classList.toggle("filterToggle");
}