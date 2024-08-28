// h1 "Terminal Text" Animation
const terminalText = document.getElementById('terminal-text');
const textArray = ["Willkommen auf meiner Webseite", "Ich bin KX", "Nehmen Sie gerne Kontakt auf"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

function typeText() {
    const currentText = textArray[textIndex];
    if (!isDeleting) {
        terminalText.innerHTML = `&gt; ${currentText.slice(0, charIndex)}`;
        if (charIndex < currentText.length) {
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(typeText, pauseTime);
        }
    } else {
        terminalText.innerHTML = `&gt; ${currentText.slice(0, charIndex)}`;
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeText, deletingSpeed);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText, typingSpeed);
});

// Funktion für sanftes Scrollen
function smoothScroll(target) {
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
}

// Smooth Scroll für Navigationslinks
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });
});

// Smooth Scroll für "Kontakt aufnehmen" Button
document.querySelector('.kontakt-btn').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('kontakt');
});

// Smooth Scroll für Scroll-to-top Button
document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('top');
});

// Kontaktformular Validierung
document.getElementById('kontakt').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('nachricht').value;

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
    } else {
        alert("Vielen Dank für Ihre Nachricht!");
    }
});
