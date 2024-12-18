var products = [
    {
      item: 1,
      name: "Apple iPhone 12",
      category: "Electronics",
      price: 799,
      features: [
        { name: "Screen Size", value: "6.1 inches" },
        { name: "RAM", value: "6GB" },
        { name: "Storage", value: "64GB" },
        { name: "Camera", value: "Dual 12MP" }
      ],
      reviews: [
        { rating: 5, comment: "Best phone I've ever had!" },
        { rating: 4, comment: "Great camera, but battery life could be better" }
      ]
    },
    {
      item: 2,
      name: "Samsung Galaxy S21",
      category: "Electronics",
      price: 999,
      features: [
        { name: "Screen Size", value: "6.2 inches" },
        { name: "RAM", value: "8GB" },
        { name: "Storage", value: "128GB" },
        { name: "Camera", value: "Quad 50MP" }
      ],
      reviews: [
        { rating: 5, comment: "Amazing display and performance!" },
        { rating: 3, comment: "Not a fan of the new design" }
      ]
    },
    {
      item: 3,
      name: "Nike Air Max 270",
      category: "Fashion",
      price: 129,
      features: [
        { name: "Color", value: "Black/White" },
        { name: "Size", value: "10" },
        { name: "Material", value: "Leather" }
      ],
      reviews: [
        { rating: 5, comment: "Most comfortable shoes I've ever worn!" },
        { rating: 4, comment: "Love the style, but wish they were cheaper" }
      ]
    },
    {
      item: 4,
      name: "Canon EOS Rebel T8i",
      category: "Electronics",
      price: 749,
      features: [
        { name: "Sensor Size", value: "APS-C" },
        { name: "Megapixels", value: "24.2MP" },
        { name: "Lens Mount", value: "EF-S" }
      ],
      reviews: [
        { rating: 5, comment: "Best entry-level DSLR on the market!" },
        { rating: 4, comment: "Great image quality, but autofocus could be faster" }
      ]
    }
  ];
  
  function createProductHTML(product) {
    var featuresHTML = '';
    var reviewsHTML = '';
  
    for (var i = 0; i < product.features.length; i++) {
      featuresHTML += `<li><strong>${product.features[i].name}:</strong> ${product.features[i].value}</li>`;
    }
  
    for (var i = 0; i < product.reviews.length; i++) {
      reviewsHTML += `<p><strong>Rating:</strong> ${product.reviews[i].rating} - ${product.reviews[i].comment}</p>`;
    }
  
    return `
      <div class="product">
        <h2>${product.name}</h2>
        <img src="placehilder.png" alt="${product.name}">
        <ul>${featuresHTML}</ul>
        <div class="reviews">${reviewsHTML}</div>
        <button class="buy-button">Buy Now - $${product.price}</button>
      </div>
    `;
  }
  
  function displayProducts() {
    var productsContainer = document.getElementById('products');
  
    for (var i = 0; i < products.length; i++) {
      productsContainer.innerHTML += createProductHTML(products[i]);
    }
  }
  
  displayProducts();
  