// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "10px 10px -100px 10px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Booking Form Submit (Dummy)
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you your details is submitted!');
  this.reset();
});