(function () {
  const STORAGE_KEY = 'xls-site-theme';

  function safeGetTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (_) { return null; }
  }

  function safeSetTheme(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (_) { /* file:// may restrict storage */ }
  }

  function initTheme() {
    const root = document.documentElement;
    const saved = safeGetTheme();
    const preferredLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = saved || (preferredLight ? 'light' : 'dark');
    root.dataset.theme = initial;

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const next = root.dataset.theme === 'light' ? 'dark' : 'light';
        root.dataset.theme = next;
        safeSetTheme(next);
      });
    });
  }

  window.SiteTheme = { initTheme };
})();
