// ─── Contact Form ─────────────────────────────────────────────────────────
(function () {
  const form    = document.querySelector('.contact-form');
  const success = document.querySelector('.form-success');
  if (!form) return;

  const required = form.querySelectorAll('[required]');

  function validate() {
    let valid = true;
    required.forEach(field => {
      const group = field.closest('.form-group');
      if (!field.value.trim()) {
        group.classList.add('has-error');
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        group.classList.add('has-error');
        valid = false;
      } else {
        group.classList.remove('has-error');
      }
    });
    return valid;
  }

  // Live validation on blur
  required.forEach(field => {
    field.addEventListener('blur', () => {
      const group = field.closest('.form-group');
      if (!field.value.trim()) {
        group.classList.add('has-error');
      } else {
        group.classList.remove('has-error');
      }
    });
    field.addEventListener('input', () => {
      field.closest('.form-group').classList.remove('has-error');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const data = new FormData(form);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });

      if (res.ok) {
        form.style.display = 'none';
        if (success) success.classList.add('visible');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      const errEl = form.querySelector('.form-submit-error');
      if (errEl) errEl.style.display = 'block';
    }
  });
})();
