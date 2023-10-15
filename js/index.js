import { imagens } from "../imgs/imgs.js";


// const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let imagensCarrossel = document.querySelector('.teste');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = imagens.length - 1;
  } else if (slideIndex >= imagens.length) {
    currentSlide = 0;
  }
  imagensCarrossel.style.backgroundImage = `url(${imagens[currentSlide].url})`;
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
