// Number of menu items to be added:
const numberOfMenuItems = 16;

// Function to generate a random price within a specified range
function getRandomPrice(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

// Function to update the restaurant menu
function updateMenu(numberOfMenuItems) {
  const menuContainer = document
    .getElementById("main-content")
    .querySelector("section");

  // Clear existing menu items
  menuContainer.innerHTML = "";

  // Loop to generate specified number of menu items
  for (let i = 1; i <= numberOfMenuItems; i++) {
    // Generate random prices between specified range
    const basePrice = getRandomPrice(5, 10);
    const priceSmall = `$${basePrice}`;
    const priceLarge = `$${(basePrice * 1.2).toFixed(2)}`; // 20% price increase

    const menuItemHTML = `
      <div class="menu-item-tile col-md-6">
        <div class="row">
          <div class="col-sm-5">
            <div class="menu-item-photo">
              <div>D${i.toString().padStart(2, "0")}</div>
              <img class="img-responsive" width="250" height="150" src="/images/menu-item-tiles/starters/starters (${i}).jpg" alt="Item" />
            </div>
            <div class="menu-item-price">
              ${priceSmall}<span> (small)</span> ${priceLarge} <span>(large)</span>
            </div>
          </div>
          <div class="menu-item-description col-sm-7">
            <h3 class="menu-item-title">D${i.toString().padStart(2, "0")}</h3>
            <p class="menu-item-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque inventore esse minima incidunt impedit. Asperiores, voluptatem. Sint aspernatur provident, rem odio dolorem eaque voluptatibus modi reprehenderit minima, itaque cupiditate totam.</p>
          </div>
        </div>
        <hr class="visible-xs" />
      </div>
    `;

    // Append the menu item HTML to the container
    menuContainer.innerHTML += menuItemHTML;
  }
}

// Call the function to update the menu items
updateMenu(numberOfMenuItems);
