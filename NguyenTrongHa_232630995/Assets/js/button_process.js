const stepContainer = document.querySelector('.step_process');
const steps = document.querySelectorAll('.step');
const buttonLeft = document.querySelector('.left');
const buttonRight = document.querySelector('.right');
let currentIndex = 0;
let isMobile = window.innerWidth <= 768;

function initializeSteps() {
    const containerWidth = stepContainer.offsetWidth;
    const stepsToShow = isMobile ? 1 : 3;
    const stepWidth = (containerWidth - (20 * (stepsToShow - 1))) / stepsToShow;
    const gap = 20;

    steps.forEach((step, index) => {
        step.style.transition = 'all 0.5s ease-in-out';
        step.style.transform = `translateX(${index * (stepWidth + gap)}px)`;
        step.classList.remove('hidden');
        step.style.position = 'absolute';
        step.style.width = `${stepWidth}px`;
    });
    updateVisibility();
}

function updateStepsPosition() {
    const containerWidth = stepContainer.offsetWidth;
    const stepsToShow = isMobile ? 1 : 3;
    const stepWidth = (containerWidth - (20 * (stepsToShow - 1))) / stepsToShow;
    const gap = 20;
    
    steps.forEach((step, index) => {
        const position = (index - currentIndex) * (stepWidth + gap);
        step.style.transform = `translateX(${position}px)`;
        step.style.opacity = (index >= currentIndex && index < currentIndex + stepsToShow) ? '1' : '0';
    });
}

function updateVisibility() {
    const maxIndex = isMobile ? steps.length - 1 : steps.length - 3;
    buttonLeft.style.display = currentIndex === 0 ? 'none' : 'block';
    buttonRight.style.display = currentIndex >= maxIndex ? 'none' : 'block';
}

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateStepsPosition();
        updateVisibility();
    }
}

function moveRight() {
    const maxIndex = isMobile ? steps.length - 1 : steps.length - 3;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateStepsPosition();
        updateVisibility();
    }
}

const style = document.createElement('style');
style.textContent = `
    .step_process {
        position: relative;
        height: 450px;
        overflow: hidden;
        padding: 10px;
        padding-left: 10px;
        max-width: 1250px;
        margin: 0 auto;
    }
    .step {
        position: absolute;
        left: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        height: 390px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .step img {
        width: 100%;
        height: 100%;
        max-height: 380px;
        object-fit: contain;
    }
    @media (max-width: 768px) {
        .step_process {
            height: 400px;
        }
        .step {
            width: 90% !important;
            max-width: none;
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style);

// Touch events
let touchStartX = 0;
let touchEndX = 0;

stepContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

stepContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    const maxIndex = isMobile ? steps.length - 1 : steps.length - 3;
    
    if(Math.abs(diff) > swipeThreshold) {
        if(diff > 0 && currentIndex < maxIndex) {
            moveRight();
        } else if(diff < 0 && currentIndex > 0) {
            moveLeft();
        }
    }
}

// Hover effects
steps.forEach(step => {
    step.addEventListener('mouseenter', () => {
        step.style.transform = `${step.style.transform.split(' ')[0]} scale(1.0)`;
    });
    
    step.addEventListener('mouseleave', () => {
        updateStepsPosition();
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        moveLeft();
    } else if(e.key === 'ArrowRight') {
        moveRight();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    if (isMobile && currentIndex > steps.length - 1) {
        currentIndex = steps.length - 1;
    }
    initializeSteps();
});

// Initialize on load
initializeSteps();