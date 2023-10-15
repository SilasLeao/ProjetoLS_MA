const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    currentSlide = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide].style.display = 'block';
}

prevButton.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

showSlide(currentSlide);
