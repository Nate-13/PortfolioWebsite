const move = document.getElementById("sun");
const header = document.getElementById("header");
const projects = document.getElementById("projects");

// Store the last known cursor position
let lastCursorX = 0;
let lastCursorY = 0;

// Sun Cursor Control

function isMobile() {
    return window.innerWidth <= 1000;
}

// Function to update circle position
function updateCirclePosition(x, y) {
    const headerRect = header.getBoundingClientRect();

    // Check if the cursor is within the header
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
            width: "35vw", 
            height: "35vw",
            filter: "blur(5vw)"
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

// Update position on pointer move
document.body.onpointermove = event => {
    if (isMobile()) return;
    
    lastCursorX = event.clientX;
    lastCursorY = event.clientY;
    updateCirclePosition(lastCursorX, lastCursorY);
};

// Update position on scroll
window.onscroll = () => {
    if (isMobile()) return;
    updateCirclePosition(lastCursorX, lastCursorY);
};

const darkMode = document.getElementById("btn-dark-mode");
const icon = darkMode.querySelector("span.material-symbols-outlined");
const mobileIcon = document.getElementById("btn-mobile-menu").querySelector("span.material-symbols-outlined.dark");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode"); // Toggle dark-mode class on the body

     // Toggle icon and button styles
     if (icon.textContent === "dark_mode") {
        icon.textContent = "light_mode";
        darkMode.style.backgroundColor = "#F3EEFF";
        darkMode.style.color = "#524D5C";
    } else {
        icon.textContent = "dark_mode";
        darkMode.style.backgroundColor = "#524D5C";
        darkMode.style.color = "#F3EEFF";
    }

    // Toggle mobile menu icon
    if(mobileIcon.textContent === "dark_mode") {
        mobileIcon.textContent = "light_mode";
    }
    else {
        mobileIcon.textContent = "dark_mode";
    }

}
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


