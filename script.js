// Print functionality
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'p') {
    e.preventDefault();
    window.print();
  }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.altKey) {
    if (e.key === 'ArrowRight') {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Print optimization
window.addEventListener('beforeprint', function() {
  document.body.style.backgroundColor = 'white';
});

window.addEventListener('afterprint', function() {
  document.body.style.backgroundColor = '';
});
