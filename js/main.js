// Sticky Navbar
const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",  window.scrollY > 0);
});


// Menu Icon
let menu = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

// Scroll To Top
let btn = document.getElementById('top');

window.onscroll = function () {
    if ( window.scrollY > 650 ) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}


// Year Now In Footer
let year = document.getElementById('year-now');

let dateNow = new Date();

year.innerHTML = dateNow.getFullYear();


//Wow Plugin
new WOW().init();