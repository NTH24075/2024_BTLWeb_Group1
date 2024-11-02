
// Các Lần lặp chỉ thay thế tag name thiết bị



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
        height: 520px;
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
        height: 520px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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


/* ///*/
const stepContainer_watch = document.querySelector('.step_process_watch');
const steps_watch = document.querySelectorAll('.step_watch');
const buttonLeft_watch = document.querySelector('.left_watch');
const buttonRight_watch = document.querySelector('.right_watch');
let currentIndex_watch = 0;
let isMobile_watch = window.innerWidth <= 768;

function initializeSteps_watch() {
    const containerWidth_watch = stepContainer_watch.offsetWidth;
    const stepsToShow_watch = isMobile_watch ? 1 : 3;
    const stepWidth_watch = (containerWidth_watch - (20 * (stepsToShow_watch - 1))) / stepsToShow_watch;
    const gap_watch = 20;

    steps_watch.forEach((step_watch, index) => {
        step_watch.style.transition = 'all 0.5s ease-in-out';
        step_watch.style.transform = `translateX(${index * (stepWidth_watch + gap_watch)}px)`;
        step_watch.classList.remove('hidden');
        step_watch.style.position = 'absolute';
        step_watch.style.width = `${stepWidth_watch}px`;
    });
    updateVisibility_watch();
}
function updateStepsPosition_watch() {
    const containerWidth_watch = stepContainer_watch.offsetWidth;
    const stepsToShow_watch = isMobile_watch ? 1 : 3;
    const stepWidth_watch = (containerWidth_watch - (20 * (stepsToShow_watch - 1))) / stepsToShow_watch;
    const gap_watch = 20;
    
    steps_watch.forEach((step_watch, index) => {
        const position_watch = (index - currentIndex_watch) * (stepWidth_watch + gap_watch);
        step_watch.style.transform = `translateX(${position_watch}px)`;
        step_watch.style.opacity = (index >= currentIndex_watch && index < currentIndex_watch + stepsToShow_watch) ? '1' : '0';
    });
}

function updateVisibility_watch() {
    const maxIndex_watch = isMobile_watch ? steps_watch.length - 1 : steps_watch.length - 3;
    buttonLeft_watch.style.display = currentIndex_watch === 0 ? 'none' : 'block';
    buttonRight_watch.style.display = currentIndex_watch >= maxIndex_watch ? 'none' : 'block';
}

function moveLeft_watch() {
    if (currentIndex_watch > 0) {
        currentIndex_watch--;
        updateStepsPosition_watch();
        updateVisibility_watch();
    }
}

function moveRight_watch() {
    const maxIndex_watch = isMobile_watch ? steps_watch.length - 1 : steps_watch.length - 3;
    if (currentIndex_watch < maxIndex_watch) {
        currentIndex_watch++;
        updateStepsPosition_watch();
        updateVisibility_watch();
    }
}

const style_watch = document.createElement('style');
style_watch.textContent = `
    .step_process_watch {
        position: relative;
        height: 520px;
        overflow: hidden;
        padding: 10px;
        padding-left: 10px;
        max-width: 1250px;
        margin: 0 auto;
    }
    .step_watch {
        position: absolute;
        left: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        height: 520px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .step_watch img {
        width: 100%;
        height: 100%;
        max-height: 380px;
        object-fit: contain;
    }
    @media (max-width: 768px) {
        .step_process_watch {
            height: 400px;
        }
        .step_watch {
            width: 90% !important;
            max-width: none;
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style_watch);

// Touch events
let touchStartX_watch = 0;
let touchEndX_watch = 0;

stepContainer_watch.addEventListener('touchstart', e => {
    touchStartX_watch = e.changedTouches[0].screenX;
});

stepContainer_watch.addEventListener('touchend', e => {
    touchEndX_watch = e.changedTouches[0].screenX;
    handleSwipe_watch();
});

function handleSwipe_watch() {
    const swipeThreshold_watch = 50;
    const diff_watch = touchStartX_watch - touchEndX_watch;
    const maxIndex_watch = isMobile_watch ? steps_watch.length - 1 : steps_watch.length - 3;
    
    if(Math.abs(diff_watch) > swipeThreshold_watch) {
        if(diff_watch > 0 && currentIndex_watch < maxIndex_watch) {
            moveRight_watch();
        } else if(diff_watch < 0 && currentIndex_watch > 0) {
            moveLeft_watch();
        }
    }
}

// Hover effects
steps_watch.forEach(step_watch => {
    step_watch.addEventListener('mouseenter', () => {
        step_watch.style.transform = `${step_watch.style.transform.split(' ')[0]} scale(1.0)`;
    });
    
    step_watch.addEventListener('mouseleave', () => {
        updateStepsPosition_watch();
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        moveLeft_watch();
    } else if(e.key === 'ArrowRight') {
        moveRight_watch();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    isMobile_watch = window.innerWidth <= 768;
    if (isMobile_watch && currentIndex_watch > steps_watch.length - 1) {
        currentIndex_watch = steps_watch.length - 1;
    }
    initializeSteps_watch();
});

// Initialize on load
initializeSteps_watch();

/* audio*/
const stepContainer_audio = document.querySelector('.step_process_audio');
const steps_audio = document.querySelectorAll('.step_audio');
const buttonLeft_audio = document.querySelector('.left_audio');
const buttonRight_audio = document.querySelector('.right_audio');
let currentIndex_audio = 0;
let isMobile_audio = window.innerWidth <= 768;

function initializeSteps_audio() {
    const containerWidth_audio = stepContainer_audio.offsetWidth;
    const stepsToShow_audio = isMobile_audio ? 1 : 3;
    const stepWidth_audio = (containerWidth_audio - (20 * (stepsToShow_audio - 1))) / stepsToShow_audio;
    const gap_audio = 20;

    steps_audio.forEach((step_audio, index) => {
        step_audio.style.transition = 'all 0.5s ease-in-out';
        step_audio.style.transform = `translateX(${index * (stepWidth_audio + gap_audio)}px)`;
        step_audio.classList.remove('hidden');
        step_audio.style.position = 'absolute';
        step_audio.style.width = `${stepWidth_audio}px`;
    });
    updateVisibility_audio();
}

function updateStepsPosition_audio() {
    const containerWidth_audio = stepContainer_audio.offsetWidth;
    const stepsToShow_audio = isMobile_audio ? 1 : 3;
    const stepWidth_audio = (containerWidth_audio - (20 * (stepsToShow_audio - 1))) / stepsToShow_audio;
    const gap_audio = 20;
    
    steps_audio.forEach((step_audio, index) => {
        const position_audio = (index - currentIndex_audio) * (stepWidth_audio + gap_audio);
        step_audio.style.transform = `translateX(${position_audio}px)`;
        step_audio.style.opacity = (index >= currentIndex_audio && index < currentIndex_audio + stepsToShow_audio) ? '1' : '0';
    });
}

function updateVisibility_audio() {
    const maxIndex_audio = isMobile_audio ? steps_audio.length - 1 : steps_audio.length - 3;
    buttonLeft_audio.style.display = currentIndex_audio === 0 ? 'none' : 'block';
    buttonRight_audio.style.display = currentIndex_audio >= maxIndex_audio ? 'none' : 'block';
}

function moveLeft_audio() {
    if (currentIndex_audio > 0) {
        currentIndex_audio--;
        updateStepsPosition_audio();
        updateVisibility_audio();
    }
}

function moveRight_audio() {
    const maxIndex_audio = isMobile_audio ? steps_audio.length - 1 : steps_audio.length - 3;
    if (currentIndex_audio < maxIndex_audio) {
        currentIndex_audio++;
        updateStepsPosition_audio();
        updateVisibility_audio();
    }
}

const style_audio = document.createElement('style');
style_audio.textContent = `
    .step_process_audio {
        position: relative;
        height: 520px;
        overflow: hidden;
        padding: 10px;
        padding-left: 10px;
        max-width: 1250px;
        margin: 0 auto;
    }
    .step_audio {
        position: absolute;
        left: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        height: 520px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .step_audio img {
        width: 100%;
        height: 100%;
        max-height: 380px;
        object-fit: contain;
    }
    @media (max-width: 768px) {
        .step_process_audio {
            height: 400px;
        }
        .step_audio {
            width: 90% !important;
            max-width: none;
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style_audio);

// Touch events
let touchStartX_audio = 0;
let touchEndX_audio = 0;

stepContainer_audio.addEventListener('touchstart', e => {
    touchStartX_audio = e.changedTouches[0].screenX;
});

stepContainer_audio.addEventListener('touchend', e => {
    touchEndX_audio = e.changedTouches[0].screenX;
    handleSwipe_audio();
});

function handleSwipe_audio() {
    const swipeThreshold_audio = 50;
    const diff_audio = touchStartX_audio - touchEndX_audio;
    const maxIndex_audio = isMobile_audio ? steps_audio.length - 1 : steps_audio.length - 3;
    
    if(Math.abs(diff_audio) > swipeThreshold_audio) {
        if(diff_audio > 0 && currentIndex_audio < maxIndex_audio) {
            moveRight_audio();
        } else if(diff_audio < 0 && currentIndex_audio > 0) {
            moveLeft_audio();
        }
    }
}

// Hover effects
steps_audio.forEach(step_audio => {
    step_audio.addEventListener('mouseenter', () => {
        step_audio.style.transform = `${step_audio.style.transform.split(' ')[0]} scale(1.0)`;
    });
    
    step_audio.addEventListener('mouseleave', () => {
        updateStepsPosition_audio();
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        moveLeft_audio();
    } else if(e.key === 'ArrowRight') {
        moveRight_audio();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    isMobile_audio = window.innerWidth <= 768;
    if (isMobile_audio && currentIndex_audio > steps_audio.length - 1) {
        currentIndex_audio = steps_audio.length - 1;
    }
    initializeSteps_audio();
});

// Initialize on load
initializeSteps_audio();
/* ipad*/
const stepContainer_ipad = document.querySelector('.step_process_ipad');
const steps_ipad = document.querySelectorAll('.step_ipad');
const buttonLeft_ipad = document.querySelector('.left_ipad');
const buttonRight_ipad = document.querySelector('.right_ipad');
let currentIndex_ipad = 0;
let isMobile_ipad = window.innerWidth <= 768;

function initializeSteps_ipad() {
    const containerWidth_ipad = stepContainer_ipad.offsetWidth;
    const stepsToShow_ipad = isMobile_ipad ? 1 : 3;
    const stepWidth_ipad = (containerWidth_ipad - (20 * (stepsToShow_ipad - 1))) / stepsToShow_ipad;
    const gap_ipad = 20;

    steps_ipad.forEach((step_ipad, index) => {
        step_ipad.style.transition = 'all 0.5s ease-in-out';
        step_ipad.style.transform = `translateX(${index * (stepWidth_ipad + gap_ipad)}px)`;
        step_ipad.classList.remove('hidden');
        step_ipad.style.position = 'absolute';
        step_ipad.style.width = `${stepWidth_ipad}px`;
    });
    updateVisibility_ipad();
}

function updateStepsPosition_ipad() {
    const containerWidth_ipad = stepContainer_ipad.offsetWidth;
    const stepsToShow_ipad = isMobile_ipad ? 1 : 3;
    const stepWidth_ipad = (containerWidth_ipad - (20 * (stepsToShow_ipad - 1))) / stepsToShow_ipad;
    const gap_ipad = 20;
    
    steps_ipad.forEach((step_ipad, index) => {
        const position_ipad = (index - currentIndex_ipad) * (stepWidth_ipad + gap_ipad);
        step_ipad.style.transform = `translateX(${position_ipad}px)`;
        step_ipad.style.opacity = (index >= currentIndex_ipad && index < currentIndex_ipad + stepsToShow_ipad) ? '1' : '0';
    });
}

function updateVisibility_ipad() {
    const maxIndex_ipad = isMobile_ipad ? steps_ipad.length - 1 : steps_ipad.length - 3;
    buttonLeft_ipad.style.display = currentIndex_ipad === 0 ? 'none' : 'block';
    buttonRight_ipad.style.display = currentIndex_ipad >= maxIndex_ipad ? 'none' : 'block';
}

function moveLeft_ipad() {
    if (currentIndex_ipad > 0) {
        currentIndex_ipad--;
        updateStepsPosition_ipad();
        updateVisibility_ipad();
    }
}

function moveRight_ipad() {
    const maxIndex_ipad = isMobile_ipad ? steps_ipad.length - 1 : steps_ipad.length - 3;
    if (currentIndex_ipad < maxIndex_ipad) {
        currentIndex_ipad++;
        updateStepsPosition_ipad();
        updateVisibility_ipad();
    }
}

const style_ipad = document.createElement('style');
style_ipad.textContent = `
    .step_process_ipad {
        position: relative;
        height: 520px;
        overflow: hidden;
        padding: 10px;
        padding-left: 10px;
        max-width: 1250px;
        margin: 0 auto;
    }
    .step_ipad {
        position: absolute;
        left: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        height: 520px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .step_ipad img {
        width: 100%;
        height: 100%;
        max-height: 380px;
        object-fit: contain;
    }
    @media (max-width: 768px) {
        .step_process_ipad {
            height: 400px;
        }
        .step_ipad {
            width: 90% !important;
            max-width: none;
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style_ipad);

// Touch events
let touchStartX_ipad = 0;
let touchEndX_ipad = 0;

stepContainer_ipad.addEventListener('touchstart', e => {
    touchStartX_ipad = e.changedTouches[0].screenX;
});

stepContainer_ipad.addEventListener('touchend', e => {
    touchEndX_ipad = e.changedTouches[0].screenX;
    handleSwipe_ipad();
});

function handleSwipe_ipad() {
    const swipeThreshold_ipad = 50;
    const diff_ipad = touchStartX_ipad - touchEndX_ipad;
    const maxIndex_ipad = isMobile_ipad ? steps_ipad.length - 1 : steps_ipad.length - 3;
    
    if(Math.abs(diff_ipad) > swipeThreshold_ipad) {
        if(diff_ipad > 0 && currentIndex_ipad < maxIndex_ipad) {
            moveRight_ipad();
        } else if(diff_ipad < 0 && currentIndex_ipad > 0) {
            moveLeft_ipad();
        }
    }
}

// Hover effects
steps_ipad.forEach(step_ipad => {
    step_ipad.addEventListener('mouseenter', () => {
        step_ipad.style.transform = `${step_ipad.style.transform.split(' ')[0]} scale(1.0)`;
    });
    
    step_ipad.addEventListener('mouseleave', () => {
        updateStepsPosition_ipad();
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        moveLeft_ipad();
    } else if(e.key === 'ArrowRight') {
        moveRight_ipad();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    isMobile_ipad = window.innerWidth <= 768;
    if (isMobile_ipad && currentIndex_ipad > steps_ipad.length - 1) {
        currentIndex_ipad = steps_ipad.length - 1;
    }
    initializeSteps_ipad();
});

// Initialize on load
initializeSteps_ipad();

/*end ipad*/
/* mac*/
const stepContainer_mac = document.querySelector('.step_process_mac');
const steps_mac = document.querySelectorAll('.step_mac');
const buttonLeft_mac = document.querySelector('.left_mac');
const buttonRight_mac = document.querySelector('.right_mac');
let currentIndex_mac = 0;
let isMobile_mac = window.innerWidth <= 768;

function initializeSteps_mac() {
    const containerWidth_mac = stepContainer_mac.offsetWidth;
    const stepsToShow_mac = isMobile_mac ? 1 : 3;
    const stepWidth_mac = (containerWidth_mac - (20 * (stepsToShow_mac - 1))) / stepsToShow_mac;
    const gap_mac = 20;

    steps_mac.forEach((step_mac, index) => {
        step_mac.style.transition = 'all 0.5s ease-in-out';
        step_mac.style.transform = `translateX(${index * (stepWidth_mac + gap_mac)}px)`;
        step_mac.classList.remove('hidden');
        step_mac.style.position = 'absolute';
        step_mac.style.width = `${stepWidth_mac}px`;
    });
    updateVisibility_mac();
}

function updateStepsPosition_mac() {
    const containerWidth_mac = stepContainer_mac.offsetWidth;
    const stepsToShow_mac = isMobile_mac ? 1 : 3;
    const stepWidth_mac = (containerWidth_mac - (20 * (stepsToShow_mac - 1))) / stepsToShow_mac;
    const gap_mac = 20;
    
    steps_mac.forEach((step_mac, index) => {
        const position_mac = (index - currentIndex_mac) * (stepWidth_mac + gap_mac);
        step_mac.style.transform = `translateX(${position_mac}px)`;
        step_mac.style.opacity = (index >= currentIndex_mac && index < currentIndex_mac + stepsToShow_mac) ? '1' : '0';
    });
}

function updateVisibility_mac() {
    const maxIndex_mac = isMobile_mac ? steps_mac.length - 1 : steps_mac.length - 3;
    buttonLeft_mac.style.display = currentIndex_mac === 0 ? 'none' : 'block';
    buttonRight_mac.style.display = currentIndex_mac >= maxIndex_mac ? 'none' : 'block';
}

function moveLeft_mac() {
    if (currentIndex_mac > 0) {
        currentIndex_mac--;
        updateStepsPosition_mac();
        updateVisibility_mac();
    }
}

function moveRight_mac() {
    const maxIndex_mac = isMobile_mac ? steps_mac.length - 1 : steps_mac.length - 3;
    if (currentIndex_mac < maxIndex_mac) {
        currentIndex_mac++;
        updateStepsPosition_mac();
        updateVisibility_mac();
    }
}

const style_mac = document.createElement('style');
style_mac.textContent = `
    .step_process_mac {
        position: relative;
        height: 520px;
        overflow: hidden;
        padding: 10px;
        padding-left: 10px;
        max-width: 1250px;
        margin: 0 auto;
    }
    .step_mac {
        position: absolute;
        left: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        height: 520px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .step_mac img {
        width: 100%;
        height: 100%;
        max-height: 380px;
        object-fit: contain;
    }
    @media (max-width: 768px) {
        .step_process_mac {
            height: 400px;
        }
        .step_mac {
            width: 90% !important;
            max-width: none;
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style_mac);

// Touch events
let touchStartX_mac = 0;
let touchEndX_mac = 0;

stepContainer_mac.addEventListener('touchstart', e => {
    touchStartX_mac = e.changedTouches[0].screenX;
});

stepContainer_mac.addEventListener('touchend', e => {
    touchEndX_mac = e.changedTouches[0].screenX;
    handleSwipe_mac();
});

function handleSwipe_mac() {
    const swipeThreshold_mac = 50;
    const diff_mac = touchStartX_mac - touchEndX_mac;
    const maxIndex_mac = isMobile_mac ? steps_mac.length - 1 : steps_mac.length - 3;
    
    if(Math.abs(diff_mac) > swipeThreshold_mac) {
        if(diff_mac > 0 && currentIndex_mac < maxIndex_mac) {
            moveRight_mac();
        } else if(diff_mac < 0 && currentIndex_mac > 0) {
            moveLeft_mac();
        }
    }
}

// Hover effects
steps_mac.forEach(step_mac => {
    step_mac.addEventListener('mouseenter', () => {
        step_mac.style.transform = `${step_mac.style.transform.split(' ')[0]} scale(1.0)`;
    });
    
    step_mac.addEventListener('mouseleave', () => {
        updateStepsPosition_mac();
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        moveLeft_mac();
    } else if(e.key === 'ArrowRight') {
        moveRight_mac();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    isMobile_mac = window.innerWidth <= 768;
    if (isMobile_mac && currentIndex_mac > steps_mac.length - 1) {
        currentIndex_mac = steps_mac.length - 1;
    }
    initializeSteps_mac();
});

// Initialize on load
initializeSteps_mac();

/* end mac */
const stepContainer_airtag = document.querySelector('.step_process_airtag');
const steps_airtag = document.querySelectorAll('.step_airtag');
const buttonLeft_airtag = document.querySelector('.left_airtag');
const buttonRight_airtag = document.querySelector('.right_airtag');
let currentIndex_airtag = 0;
let isMobile_airtag = window.innerWidth <= 768;

function initializeSteps_airtag() {
    const containerWidth_airtag = stepContainer_airtag.offsetWidth;
    const stepsToShow_airtag = isMobile_airtag ? 1 : 3;
    const stepWidth_airtag = (containerWidth_airtag - (20 * (stepsToShow_airtag - 1))) / stepsToShow_airtag;
    const gap_airtag = 20;

    steps_airtag.forEach((step_airtag, index) => {
        step_airtag.style.transition = 'all 0.5s ease-in-out';
        step_airtag.style.transform = `translateX(${index * (stepWidth_airtag + gap_airtag)}px)`;
        step_airtag.classList.remove('hidden');
        step_airtag.style.position = 'absolute';
        step_airtag.style.width = `${stepWidth_airtag}px`;
    });
    updateVisibility_airtag();
}

function updateStepsPosition_airtag() {
    const containerWidth_airtag = stepContainer_airtag.offsetWidth;
    const stepsToShow_airtag = isMobile_airtag ? 1 : 3;
    const stepWidth_airtag = (containerWidth_airtag - (20 * (stepsToShow_airtag - 1))) / stepsToShow_airtag;
    const gap_airtag = 20;
    
    steps_airtag.forEach((step_airtag, index) => {
        const position_airtag = (index - currentIndex_airtag) * (stepWidth_airtag + gap_airtag);
        step_airtag.style.transform = `translateX(${position_airtag}px)`;
        step_airtag.style.opacity = (index >= currentIndex_airtag && index < currentIndex_airtag + stepsToShow_airtag) ? '1' : '0';
    });
}

function updateVisibility_airtag() {
    const maxIndex_airtag = isMobile_airtag ? steps_airtag.length - 1 : steps_airtag.length - 3;
    buttonLeft_airtag.style.display = currentIndex_airtag === 0 ? 'none' : 'block';
    buttonRight_airtag.style.display = currentIndex_airtag >= maxIndex_airtag ? 'none' : 'block';
}

function moveLeft_airtag() {
    if (currentIndex_airtag > 0) {
        currentIndex_airtag--;
        updateStepsPosition_airtag();
        updateVisibility_airtag();
    }
}

function moveRight_airtag() {
    const maxIndex_airtag = isMobile_airtag ? steps_airtag.length - 1 : steps_airtag.length - 3;
    if (currentIndex_airtag < maxIndex_airtag) {
        currentIndex_airtag++;
        updateStepsPosition_airtag();
        updateVisibility_airtag();
    }
}

const style_airtag = document.createElement('style');
style_airtag.textContent = `
    .step_process_airtag {
        position: relative;
        height: 520px;
        overflow: hidden;
        padding: 10px;
        padding-left: 10px;
        max-width: 1250px;
        margin: 0 auto;
    }
    .step_airtag {
        position: absolute;
        left: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        height: 520px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .step_airtag img {
        width: 100%;
        height: 100%;
        max-height: 380px;
        object-fit: contain;
    }
    @media (max-width: 768px) {
        .step_process_airtag {
            height: 400px;
        }
        .step_airtag {
            width: 90% !important;
            max-width: none;
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style_airtag);

// Touch events
let touchStartX_airtag = 0;
let touchEndX_airtag = 0;

stepContainer_airtag.addEventListener('touchstart', e => {
    touchStartX_airtag = e.changedTouches[0].screenX;
});

stepContainer_airtag.addEventListener('touchend', e => {
    touchEndX_airtag = e.changedTouches[0].screenX;
    handleSwipe_airtag();
});

function handleSwipe_airtag() {
    const swipeThreshold_airtag = 50;
    const diff_airtag = touchStartX_airtag - touchEndX_airtag;
    const maxIndex_airtag = isMobile_airtag ? steps_airtag.length - 1 : steps_airtag.length - 3;
    
    if(Math.abs(diff_airtag) > swipeThreshold_airtag) {
        if(diff_airtag > 0 && currentIndex_airtag < maxIndex_airtag) {
            moveRight_airtag();
        } else if(diff_airtag < 0 && currentIndex_airtag > 0) {
            moveLeft_airtag();
        }
    }
}

// Hover effects
steps_airtag.forEach(step_airtag => {
    step_airtag.addEventListener('mouseenter', () => {
        step_airtag.style.transform = `${step_airtag.style.transform.split(' ')[0]} scale(1.0)`;
    });
    
    step_airtag.addEventListener('mouseleave', () => {
        updateStepsPosition_airtag();
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        moveLeft_airtag();
    } else if(e.key === 'ArrowRight') {
        moveRight_airtag();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    isMobile_airtag = window.innerWidth <= 768;
    if (isMobile_airtag && currentIndex_airtag > steps_airtag.length - 1) {
        currentIndex_airtag = steps_airtag.length - 1;
    }
    initializeSteps_airtag();
});

// Initialize on load
initializeSteps_airtag();
