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
const reviewCards = document.querySelectorAll('.review-card');
const reviewCardHeight = 30; /* Actual height of the .review-card element in em units */
const reviewCardCount = reviewCards.length;
let currentIndex = 0;
let autoSlideIntervalId = setInterval(() => slide(1), 5000);

function slide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = reviewCardCount - 1;
  } else if (currentIndex >= reviewCardCount) {
    currentIndex = 0;
  }
  const translateY = `translateY(${-currentIndex * reviewCardHeight}em)`;
  reviewCards.forEach((card, index) => {
    card.style.transform = translateY;
    if (index === currentIndex) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

document.querySelector('.review-back-btn').addEventListener('click', () => {
  clearInterval(autoSlideIntervalId);
  slide(-1);
  autoSlideIntervalId = setInterval(() => slide(1), 5000);
});

document.querySelector('.review-next-btn').addEventListener('click', () => {
  clearInterval(autoSlideIntervalId);
  slide(1);
  autoSlideIntervalId = setInterval(() => slide(1), 5000);
});