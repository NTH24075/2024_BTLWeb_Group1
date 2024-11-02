document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const qrCode = document.getElementById('qrCode');
        if (this.value === 'transfer') {
            qrCode.style.display = 'block';
        } else {
            qrCode.style.display = 'none';
        }
    });
});

document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');

    const title = document.querySelector('input[name="title"]:checked');
    if (!title) {
        document.getElementById('titleError').style.display = 'block';
        isValid = false;
    }

    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^(0[0-9]{9})$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const address = document.getElementById('address').value.trim();
    if (!address) {
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    }

    const payment = document.querySelector('input[name="payment"]:checked');
    if (!payment) {
        document.getElementById('paymentError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Thông tin đã được gửi thành công!');
        this.reset();
        document.getElementById('qrCode').style.display = 'none';
    }
});