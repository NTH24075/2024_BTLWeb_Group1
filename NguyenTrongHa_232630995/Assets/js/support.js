var check_phone = /^(\+?84|0)[3|5|7|8|9][0-9]{8}$/;
var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var formMessage = document.querySelector(".form-message");
var formMessageText = document.querySelector(".message-text");

function checkNull(value) {
    return value.trim().length === 0; // Sửa lại logic check null
}

function checkNum(value) {
    return !isNaN(value) && Number(value) === parseInt(value);
}

function stringMatch(value, reg) {
    return reg.test(value);
}
function showsuccess(){
    formMessage.classList.add("success", "message-show");
            formMessageText.innerHTML = `<h3>Thành công</h3> <p>Bạn đã đăng kí nhận tư vấn thành công.</p>`;
            setTimeout(function () {
                formMessage.classList.remove("success", "message-show");
            }, 3000);
}
function showfail() {
    formMessage.classList.add("fail", "message-show");
    formMessageText.innerHTML = `<h3>Thất bại! </h3> <p>Bạn vui lòng điền đầy đủ thông tin và đúng định dạng.</p>`;
    setTimeout(function () {
        formMessage.classList.remove("fail", "message-show");
    }, 3000);
}
function valid(form) {
    const name = form.querySelector('.name').value; // Sửa cách lấy giá trị
    const number = form.querySelector('.number').value;
    const email = form.querySelector('.email').value;
    const exit = form.querySelector('.title_trouble');
    if(checkNull(name)) { // Không cần phủ định vì đã sửa hàm checkNull
        showfail();
        form.querySelector('.name').focus();
        return;
    }
    
    if(checkNull(number)) {
        showfail();
        form.querySelector('.number').focus();
        return;
    }
    
    if(checkNull(email)) {
        showfail();
        form.querySelector('.email').focus();
        return;
    }

    if(!stringMatch(number, check_phone)) {
        showfail();
        form.querySelector('.number').focus();
        return;
    }
    
    if(!stringMatch(email, check_email)) {
        showfail();
        form.querySelector('.email').focus();
        return;
    }
    showsuccess();
    setTimeout(() => {
        if(exit) {
            exit.click(); // Tự động click vào element
        }
    }, 3000);
}