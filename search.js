const wideSearchInput = document.getElementById('wide_search');
const mobileSearchInput = document.getElementById('mobile_search');
const wideSearchButton = document.getElementById('wide_search-btn');
const mobileSearchButton = document.getElementById('mobile_search-btn');


fetch('cars.json', { redirect: 'follow' })
  .then(response => response.json())
  .then(data => {
    window.carsData = data;

  
    wideSearchButton.addEventListener('click', (event) => searchCars(event, window.carsData));
    mobileSearchButton.addEventListener('click', (event) => searchCars(event, window.carsData));
  })
  .catch(error => console.error('Error loading cars data:', error));

function searchCars(event, carsData) {
  if (!carsData) {
    console.error("window.carsData is not defined");
    return;
  }

  const searchInput = event.target.previousElementSibling;
  const query = searchInput.value.trim();
  if (query === '') {
    return;
  }

  const filteredData = carsData.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));

  const searchResultsHtml = filteredData.reduce((html, car) => {
    html += `
      <div class="search_item">
        <div class="search_item_name">
          <p>${car.name}</p>
        </div>
        <div class="search_item_img_wrapper">
          <img src="${car.imgFront}" alt="">
          <div class="search_item_price">
            <p>${car.price}</p>
            <a href="/buy"><p id="buy_now">Buy Now</p></a>
            <a href="/product-desc?id=${car.id}"><p id="description">Description</p></a>
          </div>
        </div>
        <div class="rate">
          <p>${car.rate}</p>
        </div>
      </div>
    `;
    return html;
  }, '');

  let searchResultsContainer;
  if (searchInput.id === 'wide_search') {
    searchResultsContainer = document.getElementById('search_results');
  } else if (searchInput.id === 'mobile_search') {
    searchResultsContainer = document.getElementById('mobile_search_results');
  }

  if (searchResultsContainer) {
    searchResultsContainer.innerHTML = searchResultsHtml;
  } else {
    console.error("Could not find .search_body element");
  }
}