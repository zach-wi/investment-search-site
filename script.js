document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const resultsDiv = document.getElementById('results');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent actual form submission
    const query = input.value.trim();

    if(query) {
      // Create dummy results
      const dummyResults = [
        `Result 1 for "${query}"`,
        `Result 2 for "${query}"`,
        `Result 3 for "${query}"`
      ];

      // Show results
      resultsDiv.innerHTML = '<h2>Search Results:</h2><ul>' +
        dummyResults.map(result => `<li>${result}</li>`).join('') +
        '</ul>';
    }
  });
});document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const resultsDiv = document.getElementById('results');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = input.value.trim();
    if(query) {
      searchCompany(query);
    }
  });

  async function searchCompany(query) {
    const apiKey = 'NvsNCCfitzIgw6Yk5e9omZf4rGSeVrTO'; // replace with your actual key
    const url = `https://financialmodelingprep.com/stable/search-symbol?query=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if(!data || data.length === 0) {
        resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
      } else {
        resultsDiv.innerHTML = '<h2>Search Results:</h2><ul>' +
          data.map(item => `<li>${item.name} (${item.symbol}) - ${item.exchangeShortName}</li>`).join('') +
          '</ul>';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      resultsDiv.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    }
  }
});