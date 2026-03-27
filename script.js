const themeOptions = ['blue', 'red', 'orange', 'yellow', 'purple', 'green', 'pink'];
let currentThemeIndex = 0;

const themeToggler = document.getElementById('theme-toggler');

// Event listener for toggling
themeToggler.addEventListener('click', () => {
    // next theme
    currentThemeIndex = (currentThemeIndex + 1) % themeOptions.length;
    const newTheme = themeOptions[currentThemeIndex];
    document.body.setAttribute('data-theme', newTheme);
});

// Animated Title Logic
const titles = ["Creative Developer", "AI/ML Enthusiast", "Software Architect"];
let titleIndex = 0;
const animatedTitle = document.getElementById('animated-title');

setInterval(() => {
    // Fade out
    animatedTitle.style.opacity = '0';
    
    // After fade out, change text and fade back in
    setTimeout(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        animatedTitle.textContent = titles[titleIndex];
        animatedTitle.style.opacity = '1';
    }, 500); // 500ms matches the CSS transition duration
}, 2000); // Change text every 2 seconds