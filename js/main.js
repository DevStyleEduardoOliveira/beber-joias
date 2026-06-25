const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

menuToggle.addEventListener('click', () => {

    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');

    document.body.classList.toggle('menu-open');

});

/* FECHAR MENU */

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        menuToggle.classList.remove('active');
        nav.classList.remove('active');

        document.body.classList.remove('menu-open');

    });

});

/* HEADER EFFECT */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 40){

        header.style.background =
            'rgba(255,255,255,0.96)';

        header.style.boxShadow =
            '0 8px 30px rgba(0,0,0,0.04)';

    } else {

        header.style.background =
            'rgba(255,255,255,0.92)';

        header.style.boxShadow =
            'none';
    }

});