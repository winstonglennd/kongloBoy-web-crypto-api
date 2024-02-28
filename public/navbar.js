const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }));
