const productStates = {
    series10: { colorSelected: false, sizeSelected: false },
    series9: { colorSelected: false, sizeSelected: false },
    se: { colorSelected: false, sizeSelected: false },
    ultra: { colorSelected: false, sizeSelected: false }
};

document.querySelectorAll('.btn-buy').forEach(button => {
    button.onclick = function(e) {
        e.preventDefault();
        const productCard = this.closest('.product-card');
        const productType = productCard.dataset.product;
        const modal = new bootstrap.Modal(document.getElementById(`modal-${productType}`));
        modal.show();
    }
});

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}
function selectColor(element, productType) {
    element.closest('.modal-body').querySelectorAll('.color-option').forEach(color => {
        color.classList.remove('selected');
    });
    element.classList.add('selected');
    productStates[productType].colorSelected = true;
    const newImage = element.getAttribute('data-image');
    element.closest('.modal-body').querySelector('.modal-watch-image').src = newImage;
    
    checkSelection(productType);
}

function selectSize(element, productType) {
    element.closest('.modal-body').querySelectorAll('.size-option').forEach(size => {
        size.classList.remove('selected');
    });
    element.classList.add('selected');
    productStates[productType].sizeSelected = true;
    const price = element.getAttribute('data-price');
    const priceContainer = document.getElementById(`price-${productType}`);
    const priceElement = priceContainer.querySelector('.product-price');
    priceElement.textContent = formatPrice(price);
    priceContainer.style.display = 'block';
    
    checkSelection(productType);
}
function checkSelection(productType) {
    if(productStates[productType].colorSelected && productStates[productType].sizeSelected) {
        document.getElementById(`buyButton-${productType}`).style.display = 'block';
    }
}