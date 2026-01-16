const move = document.getElementById("sun");
const header = document.getElementById("header");
const projects = document.getElementById("projects");

// Store the last known cursor position
let lastCursorX = 0;
let lastCursorY = 0;

// Sun Cursor Control

const COLOR_SUN_LIGHT = '#FFC800';
const COLOR_SUN_DARK = '#123CE7';
const SUN_SIZE = '35vw';
const SUN_BLUR = '5vw';

function isMobile() {
    return window.innerWidth <= 1000;
}

function getCurrentSunColor() {
    return document.body.classList.contains('dark-mode') ? COLOR_SUN_DARK : COLOR_SUN_LIGHT;
}

// Track if animations have been initialized
let animationsInitialized = false;

// Function to update circle position and color
function updateCirclePosition(x, y) {
    if (!animationsInitialized) return; // Don't animate until user interaction
    
    const headerRect = header.getBoundingClientRect();
    // Only animate position, size, and blur. Color is set instantly elsewhere.
    if (
        y >= headerRect.top &&
        y <= headerRect.bottom &&
        x >= headerRect.left &&
        x <= headerRect.right
    ) {
        move.classList.remove("projects-mode");
        const oppositeX = window.innerWidth - x - move.offsetWidth / 2 + window.pageXOffset;
        const oppositeY = window.innerHeight - y - move.offsetHeight / 2 + window.pageYOffset;
        move.animate({
            left: `${oppositeX}px`,
            top: `${oppositeY}px`,
            width: SUN_SIZE,
            height: SUN_SIZE,
            filter: `blur(${SUN_BLUR})`
        }, {duration: 1000, fill: "forwards"});
    } else {
        move.classList.add("projects-mode");
        const pageX = x + window.pageXOffset;
        const pageY = y + window.pageYOffset;
        move.animate({
            left: `${pageX - move.offsetWidth / 2}px`,
            top: `${pageY - move.offsetHeight / 2}px`,
            width: "30px",
            height: "30px",
            filter: "blur(0px)"
        }, {duration: 750, fill: "forwards"});
    }
}

// Update sun color on dark mode toggle
function updateSunColor() {
    move.style.backgroundColor = getCurrentSunColor();
}

// Update position on pointer move
document.body.onpointermove = event => {
    if (isMobile()) return;
    
    // Initialize animations on first movement
    if (!animationsInitialized) {
        animationsInitialized = true;
    }

    lastCursorX = event.clientX;
    lastCursorY = event.clientY;
    updateCirclePosition(lastCursorX, lastCursorY);
};

// Update position on scroll
window.onscroll = () => {
    if (isMobile()) return;
    updateCirclePosition(lastCursorX, lastCursorY);
};

// Apply dark mode based on system preference
function applySystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateSunColor();
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);

const mobileMenu = document.getElementById("btn-mobile-menu");
const hiddenElements = document.querySelectorAll(".mobile-menu a.hidden, .mobile-menu button.hidden");

function toggleMobileMenu() {

    hiddenElements.forEach(element => {
        // Check if the elements are currently hidden
        if (element.style.display === "none" || element.style.display === "") {
            // Show the elements
            element.style.display = "block";
        } else {
            // Hide the elements
            element.style.display = "none";
        }
    });

    // Toggle the icon between "menu" and "close"
    if (mobileMenu.querySelector("span.main").textContent === "menu") {
        mobileMenu.querySelector("span.main").textContent = "close";
    } else {
        mobileMenu.querySelector("span.main").textContent = "menu";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applySystemTheme();
});
