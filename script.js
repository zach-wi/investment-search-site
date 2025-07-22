document.getElementById('searchButton').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') return alert('Please enter a search term.');

  fetch(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (data.quotes && data.quotes.length > 0) {
    data.quotes.forEach(item => {
      const link = document.createElement('a');
      link.className = 'result-item';
      link.href = `https://finance.yahoo.com/quote/${item.symbol}`;
      link.target = '_blank';

      // Add logo if available
      const img = document.createElement('img');
      img.className = 'result-logo';
      // Yahoo doesn’t give logos; use Clearbit logo API or fallback icon
      img.src = `https://logo.clearbit.com/${item.exchange}.com`;
      img.onerror = () => img.style.display = 'none';

      const text = document.createElement('span');
      text.textContent = `${item.shortname || item.longname || item.symbol} (${item.symbol})`;

      link.appendChild(img);
      link.appendChild(text);

      resultsDiv.appendChild(link);
    });
  } else {
    resultsDiv.textContent = 'No results found.';
  }
}

document.getElementById('searchButton').addEventListener('click', search);
document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});

document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

function search() {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') return alert('Please enter a search term.');

  fetch(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (data.quotes && data.quotes.length > 0) {
    data.quotes.forEach(item => {
      const link = document.createElement('a');
      link.className = 'result-item';
      link.href = `https://finance.yahoo.com/quote/${item.symbol}`;
      link.target = '_blank';

      // Add logo if available
      const img = document.createElement('img');
      img.className = 'result-logo';
      img.src = `https://logo.clearbit.com/${item.exchange}.com`;
      img.onerror = () => img.style.display = 'none';

      const text = document.createElement('span');
      text.textContent = `${item.shortname || item.longname || item.symbol} (${item.symbol})`;

      link.appendChild(img);
      link.appendChild(text);

      resultsDiv.appendChild(link);
    });
  } else {
    resultsDiv.textContent = 'No results found.';
  }
}