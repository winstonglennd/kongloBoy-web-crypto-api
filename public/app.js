// Show elements animation when intersecting a section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// Scroll to a section with smooth scrolling animation
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar li a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);

            targetElement.scrollIntoView({ behavior: 'smooth'});
        })
    })
})

