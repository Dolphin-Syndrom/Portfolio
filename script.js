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

const achievementCarouselTracks = Array.from(document.querySelectorAll('.achievement-carousel-track'));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

achievementCarouselTracks.forEach((track) => {
    const slides = Array.from(track.querySelectorAll('.achievement-slide'));

    if (slides.length <= 1) {
        return;
    }

    let activeSlideIndex = 0;
    const slideCount = slides.length;
    const configuredDuration = Number.parseInt(track.dataset.slideDuration || '', 10);
    const slideDurationMs = Number.isFinite(configuredDuration) && configuredDuration > 600
        ? configuredDuration
        : 3400;
    let carouselTimer = null;

    const moveToSlide = (index) => {
        activeSlideIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    const startCarousel = () => {
        if (prefersReducedMotion || carouselTimer) {
            return;
        }

        carouselTimer = setInterval(() => {
            const nextIndex = (activeSlideIndex + 1) % slideCount;
            moveToSlide(nextIndex);
        }, slideDurationMs);
    };

    const stopCarousel = () => {
        if (!carouselTimer) {
            return;
        }

        clearInterval(carouselTimer);
        carouselTimer = null;
    };

    moveToSlide(0);
    startCarousel();

    const carouselContainer = track.closest('.achievement-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarousel);
        carouselContainer.addEventListener('mouseleave', startCarousel);
    }
});