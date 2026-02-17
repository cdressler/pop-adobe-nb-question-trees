function toggle(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('.chevron');
  body.classList.toggle('open');
  chevron.classList.toggle('open');
}

function filterQuestions(query) {
  const roots = document.querySelectorAll('[data-q]');
  const q = query.toLowerCase();
  roots.forEach(root => {
    const text = root.textContent.toLowerCase();
    root.style.display = text.includes(q) ? '' : 'none';
  });
}
