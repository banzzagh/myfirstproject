// script.js

// Smooth scrolling
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const smallmenu = document.querySelector('.smallmenu');
const navbar = document.querySelector('.navbar');

document.querySelector('.home').addEventListener('click', () => {
    smallmenu.classList.toggle('open');
});
