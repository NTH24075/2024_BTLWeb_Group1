const buttonExtra = document.querySelector('.button_extra');
const buttonNone = document.querySelector('.button_none');
const genres = document.querySelectorAll('.genre');

buttonExtra.addEventListener('click', function() {
    genres[1].classList.remove('hidden');
    buttonExtra.classList.add('hidden');
    buttonNone.classList.remove('hidden');

    const objects = genres[1].querySelectorAll('.object');
    

    objects.forEach((obj, index) => {
        setTimeout(() => {
            obj.classList.add('show');
        }, index * 200);
    });
});

buttonNone.addEventListener('click', function() {

    const objects = genres[1].querySelectorAll('.object');
    

    objects.forEach((obj, index) => {
        setTimeout(() => {
            obj.classList.remove('show');
        }, index * 100);
    });

    setTimeout(() => {
        genres[1].classList.add('hidden');
        buttonNone.classList.add('hidden');
        buttonExtra.classList.remove('hidden');
    }, objects.length * 100 + 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const firstRowObjects = genres[0].querySelectorAll('.object');
    firstRowObjects.forEach((obj, index) => {
        setTimeout(() => {
            obj.classList.add('show');
        }, index * 200);
    });
});