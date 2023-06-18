function search() {
  // Get the search query entered by the user
  var query = document.getElementById("searchInput").value;

  // Clear previous search results
  document.getElementById("searchResults").innerHTML = "";

  // Perform the search
  const results = performSearch(query);

  // Display the search results
  displayResults(results);
}

function performSearch(query) {
  var items = Array.from(document.querySelectorAll("#offers a"));

  var filteredResults = items.filter(function (item) {
    // Perform search matching on items
    return item.textContent.toLowerCase().includes(query.toLowerCase());
  });

  return filteredResults;
}


function displayResults(results) {
  var resultsContainer = document.getElementById("searchResults");

  if (results.length === 0) {
    resultsContainer.innerHTML = "No results found.";
    return;
  }

  var ul = document.createElement("ul");

  results.forEach(function (result) {
    var h3 = document.createElement("h3");
    h3.textContent = result.textContent;
    ul.appendChild(h3);
  });

    resultsContainer.appendChild(ul);
}

