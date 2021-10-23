let humburger = document.querySelector('.humburger');

let navbar = document.querySelector('.navbar');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');

humburger.addEventListener('click', showNav);

function showNav(e) {
    navbar.classList.toggle('h-class-resp');
    navLeft.classList.toggle('v-class-resp');
    navRight.classList.toggle('v-class-resp');
    humburger.classList.toggle('change')
}


document.onclick = function (e) {
    if (e.target.classList == 'nav-list' || e.target.classList == 'main-heading') {
        navbar.classList.toggle('h-class-resp');
        navLeft.classList.toggle('v-class-resp');
        navRight.classList.toggle('v-class-resp');
        humburger.classList.toggle('change')
    }
}