function showProducts(category) {
    // Ẩn tất cả các danh sách sản phẩm
    const productLists = document.getElementsByClassName('product-list');
    for(let list of productLists) {
        list.style.display = 'none';
    }
    
    // Hiển thị danh sách sản phẩm được chọn
    document.getElementById(category).style.display = 'block';
}

// Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.slider-container');

let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 20;
    const containerWidth = container.offsetWidth;
    const visibleSlides = Math.floor(containerWidth / slideWidth);
    const maxIndex = slides.length - visibleSlides;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    let translateX = currentIndex * slideWidth;

    if (currentIndex === maxIndex && (slides.length * slideWidth > containerWidth)) {
        translateX = (slides.length * slideWidth) - containerWidth;
    }

    slider.style.transform = `translateX(-${translateX}px)`;
}


prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    const slideWidth = slides[0].offsetWidth + 20;
    const containerWidth = container.offsetWidth;
    const visibleSlides = Math.floor(containerWidth / slideWidth);
    const maxIndex = slides.length - visibleSlides;

    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});

window.addEventListener('resize', updateSlider);
updateSlider();
