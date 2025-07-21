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
});