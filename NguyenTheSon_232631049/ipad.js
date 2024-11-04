$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Js phần modal
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.openModalLink').forEach(link => {
        link.onclick = function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

            // Lấy thông tin từ thuộc tính data
            const productName = this.getAttribute('data-product-name');
            const productImage = this.getAttribute('data-product-image');
            const productColors = JSON.parse(this.getAttribute('data-product-colors')); // Lấy màu sắc

            // Cập nhật nội dung modal
            document.querySelector('#myModal h1').innerText = productName; // Cập nhật tên sản phẩm
            document.querySelector('#myModal img').src = productImage; // Cập nhật hình ảnh sản phẩm

            // Cập nhật màu sắc
            const colorOptionsContainer = document.querySelector('.color-options');
            colorOptionsContainer.innerHTML = ''; // Xóa nội dung cũ
            productColors.forEach(color => {
                const colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = color;
                colorDiv.style.width = '30px'; // Kích thước tùy chỉnh
                colorDiv.style.height = '30px'; // Kích thước tùy chỉnh
                colorDiv.style.border = '1px solid #000'; // Đường viền
                colorDiv.style.display = 'inline-block';
                colorDiv.style.margin = '0 5px'; // Khoảng cách giữa các màu
                colorDiv.onclick = () => {
                    console.log(`Màu đã chọn: ${color}`);
                };
                colorOptionsContainer.appendChild(colorDiv);
            });

            // Hiển thị modal
            document.getElementById('myModal').style.display = 'flex';
        };
    });

    // Đóng modal khi nhấn ra ngoài modal-content
    const modal = document.getElementById('myModal');
    modal.onclick = function(event) {
        if (event.target === modal) { // Kiểm tra nếu nhấn vào modal
            closeModal();
        }
    };
});

// Hàm đóng modal và reset lựa chọn
function closeModal() {
    // Ẩn modal bằng cách set display thành 'none'
    document.getElementById('myModal').style.display = 'none';
    // Tìm tất cả các nút chọn dung lượng và xóa class 'active'
    document.querySelectorAll('.storage-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Hàm hiển thị modal thông báo
function showNotification() {
    // Hiển thị modal thông báo bằng cách set display thành 'flex'
    document.getElementById('notificationModal').style.display = 'flex';
}

// Hàm đóng modal thông báo
function closeNotification() {
    // Ẩn modal thông báo
    document.getElementById('notificationModal').style.display = 'none';
}

// Lấy element modal thông báo
const modal = document.getElementById('notificationModal');
// Thêm sự kiện click cho modal
modal.onclick = function(event) {
    // Kiểm tra nếu click vào vùng ngoài nội dung modal
    if (event.target === modal) {
        // Đóng modal thông báo
        closeNotification();
    }
};

// Hàm xử lý khi chọn dung lượng
function selectStorage(button, storage) {
    // Tìm tất cả các nút chọn dung lượng và xóa class 'active'
    document.querySelectorAll('.storage-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Thêm class 'active' cho nút được chọn
    button.classList.add('active');
    
    
}
