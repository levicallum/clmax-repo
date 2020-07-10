/* Splash page dynamics */
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('fade-out');
    }, 5000);
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 7000);
});


/* Nav Button Section Change */
const thresholdOptions = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5
};

// about section
const navAbout = document.querySelector(".nav-about");
const about = document.querySelector("#about-page");

const aboutObserver = new IntersectionObserver(function(
    entries, 
    aboutObserver
) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navAbout.classList.add('active');
        } else {
            navAbout.classList.remove('active');
        }
    });
}, thresholdOptions);

aboutObserver.observe(about);

// service section
const navService = document.querySelector(".nav-service");
const service = document.querySelector("#service");

const serviceObserver = new IntersectionObserver(function(
    entries, 
    serviceObserver
) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navService.classList.add('active');
        } else {
            navService.classList.remove('active');
        }
    });
}, thresholdOptions);

serviceObserver.observe(service);

// clients section
const navClients = document.querySelector(".nav-clients");
const clients = document.querySelector("#clients");

const clientsObserver = new IntersectionObserver(function(
    entries, 
    clientsObserver
) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navClients.classList.add('active');
        } else {
            navClients.classList.remove('active');
        }
    });
}, thresholdOptions);

clientsObserver.observe(clients);

/* Toggle Mobile Nav */

const navToggle = document.querySelector('.mobile-nav-toggle');
const mobileNavLinks = document.querySelector('.mobile-nav-links');

navToggle.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('mobile-nav-open');
    navToggle.classList.toggle('mobile-nav-open');
});

mobileNavLinks.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('mobile-nav-open');
    navToggle.classList.toggle('mobile-nav-open');
});

