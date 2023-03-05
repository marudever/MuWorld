const header = document.querySelector('header');
const navwrap = document.querySelector('.nav-wrap');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
    navwrap.classList.add('nav-scroll');
  } else {
    header.classList.remove('scrolled');
    navwrap.classList.remove('nav-scroll');
  }
});


// REVIEW SLIDER
const slider = document.querySelector('.review-card-slider');
const backBtn = document.querySelector('.review-back-btn');
const nextBtn = document.querySelector('.review-next-btn');
const cardWidth = 610; // adjust as needed
let scrollPosition = 0;
let interval;

function startAutoSlide() {
  interval = setInterval(() => {
    if (slider.scrollWidth - slider.clientWidth <= slider.scrollLeft + cardWidth) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
      scrollPosition = 0;
    } else {
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
      scrollPosition += cardWidth;
    }
  }, 5000);
}

startAutoSlide();

nextBtn.addEventListener('click', () => {
  clearInterval(interval); // clear interval on button click
  if (slider.scrollWidth - slider.clientWidth <= slider.scrollLeft + cardWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
    scrollPosition = 0;
  } else {
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    scrollPosition += cardWidth;
  }
  startAutoSlide(); // restart interval after button click
});

backBtn.addEventListener('click', () => {
  clearInterval(interval); // clear interval on button click
  if (slider.scrollLeft === 0) {
    slider.scrollTo({ left: slider.scrollWidth - slider.clientWidth, behavior: 'smooth' });
    scrollPosition = slider.scrollWidth - slider.clientWidth;
  } else {
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    scrollPosition -= cardWidth;
  }
  startAutoSlide(); // restart interval after button click
});
