// Remove old one if it exists.
const oldPresets = document.querySelector('#github-project-helper-presets');
if (oldPresets) {
  oldPresets.remove();
}

const searchForm = document.querySelector('.js-project-search-form');
const searchField = searchForm.querySelector('input[name="q"]');

const filterPresets = document.createElement('div');
filterPresets.id = 'github-project-helper-presets';
filterPresets.innerHTML = `
  <h5 class="f5" style="margin: 5px 0">Filter Presets</h5>
  <button class="preset-open btn btn-small">Open</button>
  <button class="preset-closed btn btn-small">Closed</button>
  <button class="preset-past-week btn btn-small">Past Week</button>
`;
filterPresets.addEventListener('click', e => {
  const preset = Array.from(e.target.classList).find(
    className => className.startsWith('preset-')
  );

  if (preset === 'preset-open') {
    searchField.value = 'state:open';
  } else if (preset === 'preset-closed') {
    searchField.value = 'state:closed';
  } else if (preset === 'preset-past-week') {
    const weekAgo = moment().subtract(7, 'days');
    searchField.value = `created:>=${weekAgo.format("YYYY-MM-DD")}`;
  }
});

searchField.parentNode.appendChild(filterPresets);
