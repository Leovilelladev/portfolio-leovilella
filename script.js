const themeToggle = document.querySelector('.theme-toggle');
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
const emptyState = document.querySelector('.empty-state');

themeToggle.addEventListener('click', () => {
  const light = document.body.classList.toggle('light');
  themeToggle.setAttribute('aria-pressed', String(light));
  themeToggle.querySelector('.theme-icon').textContent = light ? '☼' : '◐';
});

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    let visible = 0;

    filters.forEach((item) => item.classList.toggle('active', item === filter));
    projects.forEach((project) => {
      const matches = selected === 'all' || project.dataset.stack.includes(selected);
      project.classList.toggle('is-hidden', !matches);
      if (matches) visible += 1;
    });

    emptyState.hidden = visible > 0;
  });
});

