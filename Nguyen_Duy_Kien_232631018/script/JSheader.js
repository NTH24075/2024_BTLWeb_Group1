
document.addEventListener("DOMContentLoaded", function () {
    var cartButton = document.getElementById("showPopup"); // Nút giỏ hàng
    var searchButton = document.getElementById("searchPopup"); // Nút tìm kiếm
    var popup = document.getElementById("popup"); // Popup chung
    var popupContent = document.querySelector(".popup-content h2"); // Phần nội dung của popup
    var close = document.querySelector(".close");

    cartButton.addEventListener("click", function () {
        popupContent.innerText = "Hiện chưa có chức năng giỏ hàng"; // Nội dung popup cho giỏ hàng
        popup.style.display = "block"; // Hiển thị popup khi nhấn vào giỏ hàng
    });

    searchButton.addEventListener("click", function () {
        popupContent.innerText = "Hiện chưa có chức năng tìm kiếm"; // Nội dung popup cho tìm kiếm
        popup.style.display = "block"; // Hiển thị popup khi nhấn vào icon tìm kiếm
    });

    close.addEventListener("click", function () {
        popup.style.display = "none"; // Đóng popup khi nhấn vào nút đóng
    });

    // Ẩn popup khi nhấn vào bất kỳ vị trí nào ngoài popup
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});












