
// Array of Temple Objects
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005-08-07",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-05-21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-06-07",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-05-02",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974-11-19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986-01-10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983-12-02",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Curitiba Brazil",
      location: "Curitiba, Brazil",
      dedicated: "2008-06-01",
      area: 27850,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/200x320/curitiba-brazil-temple-lds-851617-wallpaper.jpg"
  },
  {
      templeName: "Recife Brazil",
      location: "Recife, Brazil",
      dedicated: "1995-01-13",
      area: 37200,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/320x200/recife-brazil-temple-lds-700226-wallpaper.jpg"
  }
];

// Function to Create Temple Cards
function createTempleCard(filteredTemples = temples) {
  const resGrid = document.querySelector(".res-grid");
  resGrid.innerHTML = ""; // Clear existing cards

  filteredTemples.forEach(temple => {
      const card = document.createElement("div");
      card.className = "card";

      const name = document.createElement("h3");
      name.textContent = temple.templeName;

      const location = document.createElement("p");
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

      const dedication = document.createElement("p");
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

      const area = document.createElement("p");
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = `${temple.templeName} Temple`;
      image.loading = "lazy";

      // Append elements to the card
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);

      // Append card to the grid
      resGrid.appendChild(card);
  });
}

// Initialize the page with all temples
createTempleCard();

// Filter Functions for Menu
document.querySelector("#menu").addEventListener("click", (event) => {
  const filter = event.target.id;

  switch (filter) {
      case "nonutah":
          createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
          break;
      case "new":
          createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
          break;
      case "old":
          createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
          break;
      case "large":
          createTempleCard(temples.filter(temple => temple.area > 90000));
          break;
      case "small":
          createTempleCard(temples.filter(temple => temple.area < 10000));
          break;
      case "home":
      default:
          createTempleCard(); // Display all temples
  }
});

// Footer Year and Last Modified
document.querySelector("footer p").innerHTML = 
  `&copy; ${new Date().getFullYear()} - Moroni Bamvakiades Ramos - WDD 131 | Last Modified: ${document.lastModified}`;
