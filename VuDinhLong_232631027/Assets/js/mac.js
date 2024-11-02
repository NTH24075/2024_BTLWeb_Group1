const video = document.querySelector('video');
const playPauseIcon = document.getElementById('playPauseIcon');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        video.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
}
video.addEventListener('click', togglePlayPause);

video.addEventListener('play', () => {
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
});

video.addEventListener('pause', () => {
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
});

document.addEventListener('DOMContentLoaded', function() {
    var carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
        interval: 3000,
        wrap: true
    });
});
//modal

const modal = document.getElementById("productModal");
const openModalLink = document.getElementById("openModalLink");
const closeModalButton = document.querySelector(".close");


openModalLink.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}


closeModalButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


