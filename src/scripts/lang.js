document.addEventListener('click', function (e) {
  var toggle = e.target.closest('#lang-toggle');
  if (toggle) {
    var html = document.documentElement;
    var current = html.dataset.lang || 'fr';
    var next = current === 'fr' ? 'en' : 'fr';
    html.dataset.lang = next;
    html.lang = next;
    localStorage.setItem('lang', next);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } }));
  }
});
