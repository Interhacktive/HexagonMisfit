// ─── Scroll Animations ────────────────────────────────────────────────────
(function () {
  const animated = document.querySelectorAll('[data-animate]');
  if (!animated.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  });

  animated.forEach(el => observer.observe(el));
})();
