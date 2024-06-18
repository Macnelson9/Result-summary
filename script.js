// 1. Define the URL of the JSON file
const dataUrl = 'data.json';

// 2. Fetch the data from the JSON file
fetch(dataUrl)
  .then(response => {
    // 3. Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // 4. Convert the response to JSON format
    return response.json();
  })
  .then(data => {
    // 5. Call a function to display the data
    displayData(data);
  })
  .catch(error => {
    // 6. Log any errors to the console
    console.error('There has been a problem with your fetch operation:', error);
  });

// 7. Function to display the data on the webpage
function displayData(data) {
  // 8. Get the container element where the data will be displayed
  const container = document.getElementById('cards-container');
  
  // 9. Loop through the data array
  data.forEach(item => {
    // 10. Create a new div element for each item
    const card = document.createElement('div');
    card.className = 'card';

    // 11. Set the inner HTML of the card with the item's data
    card.innerHTML = `
      <img src="${item.icon}" alt="${item.category} icon">
      <h3>${item.category}</h3>
      <p>Score: ${item.score}</p>
    `;

    // 12. Append the card to the container
    container.appendChild(card);
  });
}
  