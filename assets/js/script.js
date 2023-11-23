//menumobile
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src= "assets/images/barra-de-menu.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src= "assets/images/marca-x.png";
    }
}



//slide
let slides = document.querySelectorAll('.slide-container');

let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 10000);