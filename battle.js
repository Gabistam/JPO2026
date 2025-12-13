let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('totalSlides').textContent = totalSlides;

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));

  if (n >= totalSlides) {
    currentSlide = totalSlides - 1;
  } else if (n < 0) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }

  slides[currentSlide].classList.add('active');
  document.getElementById('currentSlide').textContent = currentSlide + 1;

  // Update navigation buttons
  document.getElementById('prevBtn').disabled = currentSlide === 0;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    changeSlide(-1);
  } else if (e.key === 'ArrowRight') {
    changeSlide(1);
  }
});

// Initialize
showSlide(0);

// Optional: Timer countdown (visual only, doesn't actually count down)
// You can implement a real timer if needed
