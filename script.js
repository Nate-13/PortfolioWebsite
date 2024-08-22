const move = document.getElementById("sun");
const header = document.getElementById("header");
const projects = document.getElementById("projects");

// Sun Cursor Control

function isMobile() {
    return window.innerWidth <= 1000;
}

document.body.onpointermove = event => {

    if (isMobile()) return;

    const { clientX, clientY } = event;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    // Get header dimensions and position
    const headerRect = header.getBoundingClientRect();

    // Check if the cursor is within the header
    if (
        clientY >= headerRect.top &&
        clientY <= headerRect.bottom &&
        clientX >= headerRect.left &&
        clientX <= headerRect.right
    ) {
        move.classList.remove("projects-mode"); // Remove projects mode class

        // Adjust for scroll position
        const oppositeX = window.innerWidth - clientX - move.offsetWidth / 2 + scrollX;
        const oppositeY = window.innerHeight - clientY - move.offsetHeight / 2 + scrollY;

        move.animate({
            left: `${oppositeX}px`,
            top: `${oppositeY}px`,
            width: "35vw", 
            height: "35vw",
            filter: "blur(5vw)"
        }, {duration: 1000, fill: "forwards"});
    }
    else{
        move.classList.add("projects-mode"); // Apply projects mode class

        // Adjust for scroll position
        const offsetX = clientX - move.offsetWidth / 2 + scrollX;
        const offsetY = clientY - move.offsetHeight / 2 + scrollY;

        move.animate({
            left: `${offsetX}px`, // Center the element on the cursor
            top: `${offsetY}px`,  // Center the element on the cursor
            width: "30px", // Shrink to 20x20px
            height: "30px", // Shrink to 20x20px
            filter: "blur(0px)" // Remove blur
        }, {duration: 1000, fill: "forwards"});
    }
   
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


