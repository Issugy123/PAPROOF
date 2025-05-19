// js/product-detail.js

// Function to render product details
function renderProductDetail(product) {
  const container = document.getElementById("product-detail-container")
  if (!container) return

  // Calculate discount percentage if on sale
  let discountBadge = ""
  if (product.sale_price && product.sale_price < product.price) {
    const discountPercent = Math.round((1 - product.sale_price / product.price) * 100)
    discountBadge = `<span class="discount-badge">-${discountPercent}%</span>`
  }

  // New product badge
  const newBadge = product.is_new ? '<span class="new-badge">New</span>' : ""

  container.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}">
      ${discountBadge}
      ${newBadge}
    </div>
    <div class="product-detail-info">
      <h1>${product.name}</h1>
      
      <div class="product-detail-meta">
        <div class="product-rating">
          ${generateRatingStars(product.rating)}
          <span>(${product.rating.toFixed(1)})</span>
        </div>
        <span class="product-category">${capitalizeFirstLetter(product.category)}</span>
      </div>
      
      <div class="product-detail-price">
        ${
          product.sale_price
            ? `<span class="regular-price strikethrough">$${Number.parseFloat(product.price).toFixed(2)}</span>
              <span class="sale-price">$${Number.parseFloat(product.sale_price).toFixed(2)}</span>`
            : `<span class="regular-price">$${Number.parseFloat(product.price).toFixed(2)}</span>`
        }
      </div>
      
      <div class="product-detail-description">
        <p>${product.detailedDescription || product.description}</p>
      </div>
      
      <div class="product-detail-actions">
        <div class="product-detail-quantity">
          <button class="quantity-btn minus">-</button>
          <input type="number" value="1" min="1" max="${product.stock || 10}" id="product-quantity">
          <button class="quantity-btn plus">+</button>
        </div>
        
        <button class="add-to-cart-btn product-detail-add-to-cart">
          <i class="fas fa-shopping-bag"></i>
          <span>Add to Cart</span>
        </button>
        
        <button class="product-detail-wishlist">
          <i class="far fa-heart"></i>
        </button>
      </div>
      
      <div class="product-detail-info-grid">
        <div class="product-detail-info-item">
          <h4>SKU</h4>
          <p>BC-${product.id.toString().padStart(4, "0")}</p>
        </div>
        
        <div class="product-detail-info-item">
          <h4>Category</h4>
          <p>${capitalizeFirstLetter(product.category)}</p>
        </div>
        
        <div class="product-detail-info-item">
          <h4>Availability</h4>
          <p>${product.stock > 0 ? `In Stock (${product.stock} items)` : "Out of Stock"}</p>
        </div>
        
        <div class="product-detail-info-item">
          <h4>Tags</h4>
          <p>${product.category}, ${product.is_new ? "new" : "popular"}, beauty</p>
        </div>
      </div>
    </div>
  `

  // Set up event listeners
  setupProductDetailListeners(product)
}

// Function to render product tabs
function renderProductTabs(product) {
  // Description tab
  const descriptionTab = document.getElementById("product-description-content")
  if (descriptionTab) {
    descriptionTab.innerHTML = `
      <h3>Product Description</h3>
      <p>${product.detailedDescription || product.description}</p>
      
      <h4>Key Features</h4>
      <ul>
        <li>High-quality ingredients</li>
        <li>Long-lasting formula</li>
        <li>Cruelty-free and vegan</li>
        <li>Suitable for all skin types</li>
      </ul>
    `
  }

  // Details tab
  const detailsTab = document.getElementById("product-details-content")
  if (detailsTab) {
    detailsTab.innerHTML = `
      <h3>Product Details</h3>
      <table class="product-details-table">
        <tr>
          <th>Product Name</th>
          <td>${product.name}</td>
        </tr>
        <tr>
          <th>SKU</th>
          <td>BC-${product.id.toString().padStart(4, "0")}</td>
        </tr>
        <tr>
          <th>Category</th>
          <td>${capitalizeFirstLetter(product.category)}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>${
            product.sale_price
              ? `$${Number.parseFloat(product.sale_price).toFixed(2)} <span class="strikethrough">$${Number.parseFloat(
                  product.price,
                ).toFixed(2)}</span>`
              : `$${Number.parseFloat(product.price).toFixed(2)}`
          }</td>
        </tr>
        <tr>
          <th>Stock</th>
          <td>${product.stock} items</td>
        </tr>
        <tr>
          <th>Rating</th>
          <td>${product.rating.toFixed(1)} / 5</td>
        </tr>
        <tr>
          <th>New Arrival</th>
          <td>${product.is_new ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <th>Ingredients</th>
          <td>${product.ingredients || "Not specified"}</td>
        </tr>
        <tr>
          <th>How to Use</th>
          <td>${product.howToUse || "Not specified"}</td>
        </tr>
      </table>
    `
  }

  // Reviews tab
  const reviewsTab = document.getElementById("product-reviews-content")
  if (reviewsTab) {
    // Generate random reviews
    const reviewsCount = Math.floor(Math.random() * 10) + 5 // 5-15 reviews
    const reviews = []

    for (let i = 0; i < reviewsCount; i++) {
      const rating = Math.random() * 2 + 3 // 3-5 rating
      const date = new Date()
      date.setDate(date.getDate() - Math.floor(Math.random() * 60)) // Random date in the last 60 days

      reviews.push({
        name: getRandomName(),
        rating: rating,
        date: date,
        comment: getRandomReview(),
      })
    }

    // Sort reviews by date (newest first)
    reviews.sort((a, b) => b.date - a.date)

    // Calculate average rating
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

    // Render reviews
    reviewsTab.innerHTML = `
      <div class="reviews-summary">
        <div class="reviews-average">
          <h3>${averageRating.toFixed(1)}</h3>
          <div class="product-rating">
            ${generateRatingStars(averageRating)}
          </div>
          <p>Based on ${reviews.length} reviews</p>
        </div>
        
        <div class="reviews-distribution">
          <div class="review-bar">
            <span>5 stars</span>
            <div class="progress-bar">
              <div class="progress" style="width: ${
                (reviews.filter((r) => r.rating >= 4.5).length / reviews.length) * 100
              }%"></div>
            </div>
            <span>${reviews.filter((r) => r.rating >= 4.5).length}</span>
          </div>
          
          <div class="review-bar">
            <span>4 stars</span>
            <div class="progress-bar">
              <div class="progress" style="width: ${
                (reviews.filter((r) => r.rating >= 3.5 && r.rating < 4.5).length / reviews.length) * 100
              }%"></div>
            </div>
            <span>${reviews.filter((r) => r.rating >= 3.5 && r.rating < 4.5).length}</span>
          </div>
          
          <div class="review-bar">
            <span>3 stars</span>
            <div class="progress-bar">
              <div class="progress" style="width: ${
                (reviews.filter((r) => r.rating >= 2.5 && r.rating < 3.5).length / reviews.length) * 100
              }%"></div>
            </div>
            <span>${reviews.filter((r) => r.rating >= 2.5 && r.rating < 3.5).length}</span>
          </div>
          
          <div class="review-bar">
            <span>2 stars</span>
            <div class="progress-bar">
              <div class="progress" style="width: ${
                (reviews.filter((r) => r.rating >= 1.5 && r.rating < 2.5).length / reviews.length) * 100
              }%"></div>
            </div>
            <span>${reviews.filter((r) => r.rating >= 1.5 && r.rating < 2.5).length}</span>
          </div>
          
          <div class="review-bar">
            <span>1 star</span>
            <div class="progress-bar">
              <div class="progress" style="width: ${
                (reviews.filter((r) => r.rating < 1.5).length / reviews.length) * 100
              }%"></div>
            </div>
            <span>${reviews.filter((r) => r.rating < 1.5).length}</span>
          </div>
        </div>
      </div>
      
      <div class="reviews-list">
        <h3>Customer Reviews</h3>
        ${reviews
          .map(
            (review) => `
          <div class="review-item">
            <div class="review-header">
              <div class="review-author">
                <h4>${review.name}</h4>
                <div class="product-rating">
                  ${generateRatingStars(review.rating)}
                </div>
              </div>
              <div class="review-date">
                ${review.date.toLocaleDateString()}
              </div>
            </div>
            <div class="review-content">
              <p>${review.comment}</p>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <div class="review-form">
        <h3>Write a Review</h3>
        <form id="review-form">
          <div class="form-group">
            <label for="review-name">Your Name</label>
            <input type="text" id="review-name" required>
          </div>
          
          <div class="form-group">
            <label for="review-email">Your Email</label>
            <input type="email" id="review-email" required>
          </div>
          
          <div class="form-group">
            <label>Your Rating</label>
            <div class="rating-input">
              <i class="far fa-star" data-rating="1"></i>
              <i class="far fa-star" data-rating="2"></i>
              <i class="far fa-star" data-rating="3"></i>
              <i class="far fa-star" data-rating="4"></i>
              <i class="far fa-star" data-rating="5"></i>
            </div>
          </div>
          
          <div class="form-group">
            <label for="review-comment">Your Review</label>
            <textarea id="review-comment" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit Review</button>
        </form>
      </div>
    `

    // Set up rating input
    const ratingInput = document.querySelectorAll(".rating-input i")
    ratingInput.forEach((star) => {
      star.addEventListener("click", function () {
        const rating = Number.parseInt(this.dataset.rating)

        // Update stars
        ratingInput.forEach((s, index) => {
          if (index < rating) {
            s.classList.remove("far")
            s.classList.add("fas")
          } else {
            s.classList.remove("fas")
            s.classList.add("far")
          }
        })
      })

      star.addEventListener("mouseover", function () {
        const rating = Number.parseInt(this.dataset.rating)

        // Update stars on hover
        ratingInput.forEach((s, index) => {
          if (index < rating) {
            s.classList.remove("far")
            s.classList.add("fas")
          } else {
            s.classList.remove("fas")
            s.classList.add("far")
          }
        })
      })
    })

    // Set up review form
    const reviewForm = document.getElementById("review-form")
    if (reviewForm) {
      reviewForm.addEventListener("submit", function (e) {
        e.preventDefault()

        // Show success message
        showToast("Thank you for your review!", "success")

        // Reset form
        this.reset()

        // Reset rating
        ratingInput.forEach((s) => {
          s.classList.remove("fas")
          s.classList.add("far")
        })
      })
    }
  }
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Function to open quick view modal
function openQuickView(productId) {
  // Find product
  const product = findProductById(productId)

  if (!product) {
    showToast("Product not found", "error")
    return
  }

  // Create quick view modal
  const modal = document.createElement("div")
  modal.className = "quick-view-modal"

  modal.innerHTML = `
  <div class="quick-view-content">
    <div class="quick-view-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="quick-view-grid">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-details">
        <h2>${product.name}</h2>
        <div class="product-rating">
          ${generateRatingStars(product.rating)}
        </div>
        <div class="product-price">
          ${
            product.sale_price
              ? `<span class="regular-price strikethrough">$${Number.parseFloat(product.price).toFixed(2)}</span>
                <span class="sale-price">$${Number.parseFloat(product.sale_price).toFixed(2)}</span>`
              : `<span class="regular-price">$${Number.parseFloat(product.price).toFixed(2)}</span>`
          }
        </div>
        <div class="product-description">
          <p>${product.detailedDescription || product.description}</p>
        </div>
        <div class="product-actions">
          <div class="quantity">
            <button class="quantity-btn minus">-</button>
            <input type="number" value="1" min="1" max="${product.stock || 10}">
            <button class="quantity-btn plus">+</button>
          </div>
          <button class="add-to-cart-btn">
            <i class="fas fa-shopping-bag"></i>
            <span>Add to Cart</span>
          </button>
          <button class="wishlist-btn">
            <i class="far fa-heart"></i>
          </button>
        </div>
        <div class="product-meta">
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Availability:</strong> ${product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        </div>
      </div>
    </div>
  </div>
`

  // Add modal to body
  document.body.appendChild(modal)

  // Prevent body scrolling
  document.body.style.overflow = "hidden"

  // Add event listeners
  setupQuickViewListeners(modal, product)

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add("active")
  }, 10)
}

// Function to close quick view modal
function closeQuickView(modal) {
  // Hide modal with animation
  modal.classList.remove("active")

  // Remove modal after animation
  setTimeout(() => {
    document.body.removeChild(modal)

    // Restore body scrolling
    document.body.style.overflow = ""
  }, 300)
}

// Function to set up event listeners for quick view modal
function setupQuickViewListeners(modal, product) {
  // Close button
  const closeButton = modal.querySelector(".close-modal")
  closeButton.addEventListener("click", () => {
    closeQuickView(modal)
  })

  // Close on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeQuickView(modal)
    }
  })

  // Quantity buttons
  const quantityInput = modal.querySelector(".quantity input")
  const minusButton = modal.querySelector(".quantity-btn.minus")
  const plusButton = modal.querySelector(".quantity-btn.plus")

  minusButton.addEventListener("click", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value > 1) {
      quantityInput.value = value - 1
    }
  })

  plusButton.addEventListener("click", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value < (product.stock || 10)) {
      quantityInput.value = value + 1
    }
  })

  // Add to cart button
  const addToCartButton = modal.querySelector(".add-to-cart-btn")
  addToCartButton.addEventListener("click", () => {
    const quantity = Number.parseInt(quantityInput.value)

    // Add product to cart with quantity
    const cartProduct = { ...product, quantity }

    if (typeof window.addToCart === "function") {
      window.addToCart(cartProduct)
    } else {
      // Dispatch event for cart.js to handle
      const event = new CustomEvent("add-to-cart", { detail: { product: cartProduct } })
      document.dispatchEvent(event)
    }

    showToast("Product added to cart!")
    closeQuickView(modal)
  })

  // Wishlist button
  const wishlistButton = modal.querySelector(".wishlist-btn")
  if (wishlistButton) {
    wishlistButton.addEventListener("click", () => {
      const icon = wishlistButton.querySelector("i")

      // Toggle wishlist icon
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        showToast("Product added to wishlist!")
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        showToast("Product removed from wishlist!")
      }
    })
  }
}

// Function to generate rating stars
function generateRatingStars(rating) {
  let stars = ""
  for (let i = 0; i < Math.floor(rating); i++) {
    stars += '<i class="fas fa-star"></i>'
  }
  if (rating % 1 !== 0) {
    stars += '<i class="fas fa-star-half-alt"></i>'
  }
  for (let i = Math.ceil(rating); i < 5; i++) {
    stars += '<i class="far fa-star"></i>'
  }
  return stars
}

// Function to show toast notification
function showToast(message, type = "success") {
  // Create toast element
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = message

  // Add toast to body
  document.body.appendChild(toast)

  // Show toast with animation
  setTimeout(() => {
    toast.classList.add("active")
  }, 10)

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("active")

    // Remove toast after animation
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 3000)
}

// Function to get random name for reviews
function getRandomName() {
  const firstNames = [
    "Emma",
    "Olivia",
    "Ava",
    "Isabella",
    "Sophia",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn",
    "Liam",
    "Noah",
    "William",
    "James",
    "Oliver",
    "Benjamin",
    "Elijah",
    "Lucas",
    "Mason",
    "Logan",
  ]

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
  ]

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

  return `${firstName} ${lastName}`
}

// Function to get random review comment
function getRandomReview() {
  const reviews = [
    "I absolutely love this product! It's exactly what I was looking for and the quality is amazing.",
    "Great product, fast shipping, and excellent customer service. Will definitely buy again!",
    "This product exceeded my expectations. The color is beautiful and it works perfectly.",
    "I've been using this for a few weeks now and I'm very happy with it. Highly recommend!",
    "Good quality for the price. Not perfect, but definitely worth it.",
    "I bought this as a gift and they loved it! The packaging was beautiful too.",
    "This is my second time purchasing this product. It's that good!",
    "The product is good, but the shipping took longer than expected.",
    "I was hesitant to buy this at first, but I'm so glad I did. It's amazing!",
    "This product has become an essential part of my daily routine. Can't live without it!",
    "The quality is excellent and it looks even better in person than in the photos.",
    "I've tried many similar products, but this one is by far the best.",
    "Great value for money. Will definitely repurchase when I run out.",
    "This product works exactly as described. Very satisfied with my purchase.",
    "I'm impressed with how well this works. Will be recommending to all my friends!",
  ]

  return reviews[Math.floor(Math.random() * reviews.length)]
}

// Function to load product detail
function loadProductDetail() {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("id")

  if (!productId) {
    // Redirect to products page if no ID provided
    window.location.href = "products.html"
    return
  }

  // Find product by ID
  const product = findProductById(productId)

  if (!product) {
    // Show error message if product not found
    const container = document.getElementById("product-detail-container")
    if (container) {
      container.innerHTML = `
        <div class="error-message">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
          <a href="products.html" class="btn btn-primary">Back to Products</a>
        </div>
      `
    }
    return
  }

  // Update page title
  document.title = `${product.name} - Bubble Cosmetics`

  // Update breadcrumb
  const breadcrumbName = document.getElementById("product-breadcrumb-name")
  if (breadcrumbName) {
    breadcrumbName.textContent = product.name
  }

  // Render product detail
  renderProductDetail(product)

  // Render product tabs content
  renderProductTabs(product)

  // Load related products
  loadRelatedProducts(product)
}

// Function to find product by ID
function findProductById(productId) {
  // Get all products
  const productsData = window.loadProductsFromData ? window.loadProductsFromData() : []
  return productsData.find((p) => p.id == productId) || null
}

// Function to load related products
function loadRelatedProducts(product) {
  const container = document.getElementById("related-products-container")
  if (!container) return

  // Get all products
  const productsData = window.loadProductsFromData ? window.loadProductsFromData() : []

  // Filter related products (same category, excluding current product)
  let relatedProducts = productsData.filter((p) => p.category === product.category && p.id !== product.id)

  // If not enough products in the same category, add some from other categories
  if (relatedProducts.length < 4) {
    const otherProducts = productsData.filter((p) => p.category !== product.category && p.id !== product.id)
    relatedProducts = [...relatedProducts, ...otherProducts].slice(0, 4)
  } else {
    relatedProducts = relatedProducts.slice(0, 4)
  }

  // Render related products
  relatedProducts.forEach((relatedProduct) => {
    const productCard = createProductCard(relatedProduct)
    container.appendChild(productCard)
  })

  // Set up event listeners for product cards
  setupProductCardListeners()
}

// Function to create product card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.dataset.productId = product.id

  // Calculate discount percentage if on sale
  let discountBadge = ""
  if (product.sale_price && product.sale_price < product.price) {
    const discountPercent = Math.round((1 - product.sale_price / product.price) * 100)
    discountBadge = `<span class="discount-badge">-${discountPercent}%</span>`
  }

  // New product badge
  const newBadge = product.is_new ? '<span class="new-badge">New</span>' : ""

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
      ${discountBadge}
      ${newBadge}
      <div class="product-actions">
        <button class="wishlist-btn" aria-label="Add to wishlist">
          <i class="far fa-heart"></i>
        </button>
        <button class="add-to-cart-btn" aria-label="Add to cart">
          <i class="fas fa-shopping-bag"></i>
          <span>Add to Cart</span>
        </button>
        <button class="quick-view-btn" aria-label="Quick view">
          <i class="fas fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-price">
        ${
          product.sale_price
            ? `<span class="regular-price strikethrough">$${Number.parseFloat(product.price).toFixed(2)}</span>
              <span class="sale-price">$${Number.parseFloat(product.sale_price).toFixed(2)}</span>`
            : `<span class="regular-price">$${Number.parseFloat(product.price).toFixed(2)}</span>`
        }
      </div>
      <div class="product-rating">
        ${generateRatingStars(product.rating)}
      </div>
    </div>
  `

  return card
}

// Function to set up event listeners for product cards
function setupProductCardListeners() {
  // Product image click
  document.querySelectorAll(".product-image img, .product-name").forEach((element) => {
    element.addEventListener("click", function () {
      const productCard = this.closest(".product-card")
      const productId = productCard.dataset.productId
      window.location.href = `product-detail.html?id=${productId}`
    })
  })

  // Wishlist button click
  document.querySelectorAll(".wishlist-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const icon = this.querySelector("i")

      // Toggle wishlist icon
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        showToast("Product added to wishlist!")
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        showToast("Product removed from wishlist!")
      }
    })
  })

  // Add to cart button click
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const productCard = this.closest(".product-card")
      const productId = productCard.dataset.productId

      // Find product in data
      const product = findProductById(productId)
      if (product) {
        // Add to cart
        if (typeof window.addToCart === "function") {
          window.addToCart(product)
        } else {
          // Dispatch event for cart.js to handle
          const event = new CustomEvent("add-to-cart", { detail: { product } })
          document.dispatchEvent(event)
        }

        showToast("Product added to cart!")
      }
    })
  })

  // Quick view button click
  document.querySelectorAll(".quick-view-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation() // Stop event propagation

      // Get the product ID directly from the closest product card
      const productCard = this.closest(".product-card")
      const productId = productCard.dataset.productId

      // Call openQuickView directly with the product ID
      openQuickView(productId)
    })
  })
}

// Function to set up event listeners for product detail
function setupProductDetailListeners(product) {
  // Quantity buttons
  const quantityInput = document.getElementById("product-quantity")
  const minusButton = document.querySelector(".product-detail-quantity .minus")
  const plusButton = document.querySelector(".product-detail-quantity .plus")

  if (quantityInput && minusButton && plusButton) {
    minusButton.addEventListener("click", () => {
      const value = Number.parseInt(quantityInput.value)
      if (value > 1) {
        quantityInput.value = value - 1
      }
    })

    plusButton.addEventListener("click", () => {
      const value = Number.parseInt(quantityInput.value)
      if (value < (product.stock || 10)) {
        quantityInput.value = value + 1
      }
    })
  }

  // Add to cart button
  const addToCartButton = document.querySelector(".product-detail-add-to-cart")
  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      const quantity = Number.parseInt(quantityInput.value)

      // Add product to cart with quantity
      const cartProduct = { ...product, quantity }

      if (typeof window.addToCart === "function") {
        window.addToCart(cartProduct)
      } else {
        // Dispatch event for cart.js to handle
        const event = new CustomEvent("add-to-cart", { detail: { product: cartProduct } })
        document.dispatchEvent(event)
      }

      showToast("Product added to cart!")
    })
  }

  // Wishlist button
  const wishlistButton = document.querySelector(".product-detail-wishlist")
  if (wishlistButton) {
    wishlistButton.addEventListener("click", () => {
      const icon = wishlistButton.querySelector("i")

      // Toggle wishlist icon and show appropriate message
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        showToast("Product added to wishlist!")
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        showToast("Product removed from wishlist!")
      }
    })
  }
}

// Function to set up tab functionality
function setupTabs() {
  const tabButtons = document.querySelectorAll(".product-detail-tab-button")
  const tabContents = document.querySelectorAll(".product-detail-tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const tabId = button.dataset.tab
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Load product detail
  loadProductDetail()

  // Set up tab functionality
  setupTabs()
})
