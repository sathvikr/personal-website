async function includeComponents() {
  const elements = document.querySelectorAll('[data-include]');
  await Promise.all(Array.from(elements).map(async (el) => {
    const url = el.getAttribute('data-include');
    if (!url) return;
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load ' + url);
      el.innerHTML = await res.text();
    } catch (err) {
      // Leave any server-rendered fallback content in place
      console.warn(err);
    }
  }));
}

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', async () => {
  await includeComponents();
  setYear();
});

