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


/* Splash page dynamics */
const splash = document.getElementById('splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('fade-out');
    }, 5000);
    setTimeout(()=>{
        splash.classList.add('hidden');
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
const service = document.querySelector("#service-page");

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
const clients = document.querySelector("#clients-page");

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

// contacts section
const navContact = document.querySelector(".nav-contact");
const contact = document.querySelector("#contact-page");

const contactObserver = new IntersectionObserver(function(
    entries, 
    contactObserver
) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navContact.classList.add('active');
        } else {
            navContact.classList.remove('active');
        }
    });
}, thresholdOptions);

contactObserver.observe(contact);

// cookies

let date = new Date();
date.setFullYear(date.getFullYear() + 1);

const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
            return cookies[key]
    },
    setItem: (key, value) => {

        document.cookie = `${key}=${value};expires=`+date+`;SameSite=Lax`;
    },
};

const storageType = cookieStorage;

const shouldShowPopup = () => !storageType.getItem('clmax_consent');
const saveConsentToStorage = () => storageType.setItem('clmax_consent', true);

// const shouldShowSplash = () => !storageType.getItem('clmax_splash');
// const saveSplashToStorage = () => storageType.setItem('clmax_splash', true);

window.onload = () => {
    
    // splash cookie
    // if(!shouldShowSplash(storageType)) {
    //     splash.classList.add('hidden'); 
    // } else {
    //     setTimeout(() => {
    //     saveSplashToStorage(storageType);
    //     splash.classList.add('hidden');
    // }, 7000);
    // }
    
    // consent cookie
    const consentPopup = document.getElementById('cookie-container');
    const acceptBtn = document.getElementById('cookie-accept');

    const acceptFn = event => {
        saveConsentToStorage(storageType);
        consentPopup.classList.add('fade');
        setTimeout(() => {
            consentPopup.classList.add('hidden'); 
         }, 1000);
    };

    acceptBtn.addEventListener('click', acceptFn);


    if(shouldShowPopup(storageType)) {
        consentPopup.classList.remove('hidden'); 
        setTimeout(() => {
           consentPopup.classList.remove('fade'); 
        }, 2000);
        
    }
};



