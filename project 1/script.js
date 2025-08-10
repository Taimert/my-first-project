document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simple hover animation for projects
  document.querySelectorAll('.project').forEach(proj => {
    proj.addEventListener('mouseenter', () => {
      proj.style.transform = 'scale(1.02)';
      proj.style.transition = 'transform 0.3s ease';
    });
    proj.addEventListener('mouseleave', () => {
      proj.style.transform = 'scale(1)';
    });
  });
});
