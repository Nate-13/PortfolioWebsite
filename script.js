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

// Function to update circle position and color
function updateCirclePosition(x, y) {
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

function setGradientImageForMode() {
    const gradient = document.getElementById('gradient-img');
    if (!gradient) return;
    if (document.body.classList.contains('dark-mode')) {
        gradient.src = './media/transition-blur-dark.png';
    } else {
        gradient.src = './media/transition-blur.png';
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
    updateSunColor();
    setGradientImageForMode(); // Update gradient image on mode switch
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

// Gradient scroll transition effect - smooth scaling approach
(function() {
  const gradient = document.getElementById('gradient-img');
  const transitionContainer = document.getElementById('gradient-transition');
  if (!gradient || !transitionContainer) return;
  
  function handleScroll() {
    const rect = transitionContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const transitionStart = rect.top - windowHeight;
    const transitionEnd = rect.bottom - windowHeight;
    
    // Calculate progress - only start when we're actually in the transition area
    let progress = 0;
    if (transitionEnd < 0) {
      progress = 1;
    } else if (transitionStart < 0) {
      progress = Math.min(1, Math.max(0, 1 - transitionEnd / rect.height));
    }
    
    // Only show gradient when progress > 0.1 (about 10% into transition)
    const visibilityThreshold = 0.1;
    if (progress < visibilityThreshold) {
      gradient.style.opacity = '0';
      gradient.style.transform = 'scaleY(0)';
    } else {
      gradient.style.opacity = '1';
      // Adjust progress to start from 0 after the threshold
      const adjustedProgress = (progress - visibilityThreshold) / (1 - visibilityThreshold);
      
      const minScale = 0.01; // Start very small instead of 8px
      const maxScale = 1.5;
      const scaleY = minScale + (maxScale - minScale) * adjustedProgress;
      
      gradient.style.transform = `scaleY(${scaleY})`;
    }
    
    gradient.style.transformOrigin = 'bottom';
    
    // Handle positioning based on progress
    if (progress >= 1) {
      gradient.style.position = 'absolute';
      gradient.style.bottom = '0';
      gradient.classList.add('stretched');
    } else {
      gradient.style.position = 'fixed';
      gradient.style.bottom = '0';
      gradient.classList.remove('stretched');
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  document.addEventListener('DOMContentLoaded', handleScroll);
})();

document.addEventListener('DOMContentLoaded', function() {
    setGradientImageForMode(); // Set correct gradient on load
    updateSunColor();
});


