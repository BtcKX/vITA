// Terminal Text Animation
const textArray = ["Willkommen auf meiner Seite", "Ich bin KX", "Jetzt Kontakt aufnehmen"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseTime = 1500;

const terminalText = document.getElementById('terminal-text');

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

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Bitte alle Felder ausfüllen.");
    } else {
        alert("Vielen Dank für Ihre Nachricht!");
    }
});
