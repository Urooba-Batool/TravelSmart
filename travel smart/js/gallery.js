const imageData = [
    {
      "src": "../images/destinations/hero-slider-3.jpg",
      "alt": "Cinque Terre",
      "description": "Cinque Terre"
    },
    {
        "src": "../images/destinations/hero-slider-3.jpg",
        "alt": "Forest",
      "description": "Forest"
    },
    {
        "src": "../images/destinations/hero-slider-3.jpg",
        "alt": "Northern Lights",
      "description": "Northern Lights"
    },
    {
        "src": "../images/destinations/hero-slider-3.jpg",
        "alt": "Northern Lights",
      "description": "Northern Lights"
    },
    {
        "src": "../images/destinations/hero-slider-3.jpg",
        "alt": "Cinque Terre",
        "description": "Cinque Terre"
      },
      {
          "src": "../images/destinations/hero-slider-3.jpg",
          "alt": "Forest",
        "description": "Forest"
      },
      {
          "src": "../images/destinations/hero-slider-3.jpg",
          "alt": "Northern Lights",
        "description": "Northern Lights"
      },
      {
          "src": "../images/destinations/hero-slider-3.jpg",
          "alt": "Northern Lights",
        "description": "Northern Lights"
      },
    {
        "src": "../images/destinations/hero-slider-3.jpg",
        "alt": "Mountains",
      "description": "Mountains"
    }
  ];
  
  // Function to generate gallery items
  function createGallery() {
    const galleryContainer = document.getElementById('galleryy-container');
    imageData.forEach(image => {
      // Create gallery div
      const galleryDiv = document.createElement('div');
      galleryDiv.className = 'gallery';
  
      // Create anchor tag for image link
      const anchor = document.createElement('a');
      anchor.href = image.src;
      anchor.target = '_blank';
  
      // Create image element
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
  
      // Create overlay div
      const overlayDiv = document.createElement('div');
      overlayDiv.className = 'overlay';
      overlayDiv.textContent = image.description;
  
      // Append elements
      anchor.appendChild(img);
      galleryDiv.appendChild(anchor);
      galleryDiv.appendChild(overlayDiv);
      galleryContainer.appendChild(galleryDiv);
    });
  }
  
  // Initialize the gallery on page load
  createGallery();