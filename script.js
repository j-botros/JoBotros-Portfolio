function filterSections(target) {
  const wanted = target.dataset.filter;

  document.querySelectorAll('[data-section]').forEach(el => {
    const show = wanted === 'all' || el.dataset.section === wanted;
    el.classList.toggle('d-none', !show);
  });

  document.querySelectorAll('.skillpush').forEach(btn =>
    btn.classList.toggle('active', btn === target)
  );
}

document.querySelectorAll('.skillpush').forEach(btn =>
  btn.addEventListener('click', () => filterSections(btn))
);

filterSections(document.querySelector('.skillpush.active'));