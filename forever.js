const bar = document.getElementById('bar')
const close = document.getElementById('close')

const nav = document.getElementById('navbar')


if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}


if (close) {
    bar.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


const slider = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;
let currentSlide = 0;

// Next slide function
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Previous slide function
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatically slide every 3 seconds
setInterval(nextSlide, 3000);
  