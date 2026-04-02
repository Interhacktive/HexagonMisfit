// ─── Portfolio Filter ──────────────────────────────────────────────────────
(function () {
  const filterBtns       = document.querySelectorAll('.filter-btn:not(.filter-btn--client)');
  const clientFilterBtns = document.querySelectorAll('.filter-btn--client');
  const cards            = document.querySelectorAll('.portfolio-card');

  if (!filterBtns.length || !cards.length) return;

  let activeCategory   = 'all';
  let activeClientType = 'all';

  function applyFilters() {
    cards.forEach(card => {
      const catMatch    = activeCategory   === 'all' || card.dataset.category   === activeCategory;
      const clientMatch = activeClientType === 'all' || card.dataset.clientType === activeClientType;
      card.classList.toggle('hidden', !(catMatch && clientMatch));
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.filter;
      filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      history.replaceState(null, '', activeCategory === 'all' ? '#work' : `#work?filter=${activeCategory}`);
      applyFilters();
    });
  });

  clientFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeClientType = btn.dataset.clientFilter;
      clientFilterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      applyFilters();
    });
  });

  // Restore category filter from URL on load
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const initFilter = urlParams.get('filter');
  if (initFilter) {
    const matchBtn = document.querySelector(`.filter-btn:not(.filter-btn--client)[data-filter="${initFilter}"]`);
    if (matchBtn) matchBtn.click();
  }
})();
