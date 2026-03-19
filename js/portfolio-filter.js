// ─── Portfolio Filter ──────────────────────────────────────────────────────
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.portfolio-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update URL hash without scrolling
      history.replaceState(null, '', filter === 'all' ? '#work' : `#work?filter=${filter}`);

      // Show/hide cards
      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Restore filter from URL on load
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const initFilter = urlParams.get('filter');
  if (initFilter) {
    const matchBtn = document.querySelector(`.filter-btn[data-filter="${initFilter}"]`);
    if (matchBtn) matchBtn.click();
  }
})();
