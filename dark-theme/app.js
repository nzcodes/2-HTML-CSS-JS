const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

// Check user preference on page load
const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

// Apply dark mode class if user preference is enabled
if (isDarkModeEnabled) {
  document.documentElement.classList.add('dark-theme');
}

toggleBtn.addEventListener('click', () => {
  // Toggle dark mode class
  document.documentElement.classList.toggle('dark-theme');

  // Store user preference
  const isCurrentlyDarkMode = document.documentElement.classList.contains('dark-theme');
  localStorage.setItem('darkModeEnabled', isCurrentlyDarkMode.toString());
});


const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;
