import { imagens } from "./imgs/imgs.js";


let intervalId
const tituloNoticia = document.getElementById('tituloNoticia');
const descricaoNoticia = document.getElementById('descricaoNoticia');
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
  tituloNoticia.innerHTML = imagens[currentSlide].tituloNoticia
  descricaoNoticia.innerHTML = imagens[currentSlide].descricao
}

prevButton.addEventListener('click', () => {
  clearInterval(intervalId);
  currentSlide--;
  showSlide(currentSlide);
  startCarousel()
});

nextButton.addEventListener('click', () => {
  clearInterval(intervalId)
  currentSlide++;
  showSlide(currentSlide);
  startCarousel()
});

function startCarousel() {
  intervalId = setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 3000);
}


showSlide(currentSlide);
startCarousel()
