// 1. Initialize Animate On Scroll Library
AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
});

// 2. Typing Effect
const textElement = document.querySelector(".typing-text");
const words = ["Frontend Developer", "Python Enthusiast", "Web Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);
    textElement.textContent = currentChars;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 2000);
    }
}
typeEffect();

// 3. Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// 4. Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
    });
});

// --- Certificate Modal Logic ---
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("certImage");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close-modal")[0];

// Function to open the modal
function openCert(imageSrc, caption) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = caption;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Also close if user clicks anywhere outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- Custom Cursor Logic ---
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Links pe hover karne par effect
const links = document.querySelectorAll('a, button, .tilt-box');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// --- Remove Preloader ---
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

const clickSound = document.getElementById("clickSound");
const buttons = document.querySelectorAll("button, a");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0; // Rewind to start
        clickSound.play();
    });
});

// --- Particles Background Logic ---
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00eaff" }, /* Neon Cyan Color */
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00eaff",
            "opacity": 0.4,
            "width": 1
        },
        "move": { "enable": true, "speed": 6 }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" }, /* Mouse aane pe door bhagenge */
            "onclick": { "enable": true, "mode": "push" }
        }
    },
    "retina_detect": true
});

// --- Scroll Progress Bar Logic ---
window.onscroll = function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
};

// --- FAQ Accordion Logic ---
const faqs = document.querySelectorAll(".faq-box");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// --- Digital Clock Logic ---
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero (e.g., 9 becomes 09)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;

    // Date formatting
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const dateString = now.toLocaleDateString('en-US', options);

    document.getElementById('time').innerText = timeString;
    document.getElementById('date').innerText = dateString;
}

setInterval(updateClock, 1000); // Har second update karega
updateClock(); // Page load hote hi chal jaye

// --- Hacker Terminal Logic ---
const terminalOverlay = document.getElementById("terminal-modal");
const terminalText = document.getElementById("terminal-text");

function openTerminal() {
    terminalOverlay.style.display = "flex";
    terminalText.innerHTML = ""; // Clear purana text
    typeWriter(); // Typing start karo
}

function closeTerminal() {
    terminalOverlay.style.display = "none";
}

const commands = [
    "Initializing connection...",
    "Accessing server...",
    "Fetching skills: [HTML, CSS, JS, React]...",
    "Success! User is highly skilled.",
    "Contacting database...",
    "Message: 'HIRE ME NOW!'"
];

let i = 0;
let txtIndex = 0;

function typeWriter() {
    if (i < commands.length) {
        // Line by line type karega
        terminalText.innerHTML += "> " + commands[i] + "<br>";
        i++;
        setTimeout(typeWriter, 800); // Har line ke beech 800ms ka gap
    }
}