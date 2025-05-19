// Cart functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart
  initCart()

  // Set up event listeners
  setupCartListeners()
})

/**
 * Initialize cart
 */
function initCart() {
  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  // Update cart count
  updateCartCount(cartItems)

  // Render cart items
  renderCartItems(cartItems)
}

/**
 * Update cart count in header
 * @param {Array} cartItems - Cart items
 */
function updateCartCount(cartItems = []) {
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.querySelector(".cart-count")
  if (cartCount) {
    // Calculate total quantity
    const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
    cartCount.textContent = totalQuantity
  }
}

/**
 * Render cart items
 * @param {Array} cartItems - Cart items
 */
function renderCartItems(cartItems) {
  const cartItemsContainer = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (!cartItemsContainer) return

  // Clear container
  cartItemsContainer.innerHTML = ""

  // If cart is empty
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
        <a href="products.html" class="btn btn-primary">Shop Now</a>
      </div>
    `

    if (cartTotal) {
      cartTotal.textContent = "$0.00"
    }

    return
  }

  // Calculate total
  let total = 0

  // Create cart items
  cartItems.forEach((item) => {
    // Calculate item total
    const itemPrice = item.sale_price || item.price
    const itemTotal = itemPrice * (item.quantity || 1)
    total += itemTotal

    // Create cart item element
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"
    cartItem.dataset.productId = item.id

    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-name">${item.name}</h3>
        <div class="cart-item-price">$${Number.parseFloat(itemPrice).toFixed(2)}</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn minus">-</button>
          <input type="number" class="quantity-input" value="${item.quantity || 1}" min="1" max="${item.stock || 10}">
          <button class="quantity-btn plus">+</button>
          <button class="remove-item"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="cart-item-subtotal">$${itemTotal.toFixed(2)}</div>
      </div>
    `

    cartItemsContainer.appendChild(cartItem)
  })

  // Update cart total
  if (cartTotal) {
    cartTotal.textContent = `$${total.toFixed(2)}`
  }

  // Set up event listeners for cart items
  setupCartItemListeners()
}

/**
 * Set up event listeners for cart items
 */
function setupCartItemListeners() {
  // Quantity buttons
  document.querySelectorAll(".cart-item .quantity-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector(".quantity-input")
      const productId = this.closest(".cart-item").dataset.productId
      let value = Number.parseInt(input.value)

      if (this.classList.contains("minus") && value > 1) {
        value--
      } else if (this.classList.contains("plus")) {
        value++
      }

      input.value = value

      // Update cart item
      updateCartItem(productId, value)
    })
  })

  // Quantity input
  document.querySelectorAll(".cart-item .quantity-input").forEach((input) => {
    input.addEventListener("change", function () {
      const productId = this.closest(".cart-item").dataset.productId
      let value = Number.parseInt(this.value)

      // Ensure value is at least 1
      if (value < 1) {
        value = 1
        this.value = value
      }

      // Update cart item
      updateCartItem(productId, value)
    })
  })

  // Remove item button
  document.querySelectorAll(".cart-item .remove-item").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.closest(".cart-item").dataset.productId
      removeCartItem(productId)
    })
  })
}

/**
 * Update cart item
 * @param {string|number} productId - Product ID
 * @param {number} quantity - New quantity
 */
function updateCartItem(productId, quantity) {
  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  // Find item index
  const itemIndex = cartItems.findIndex((item) => item.id == productId)

  if (itemIndex !== -1) {
    // Update quantity
    cartItems[itemIndex].quantity = quantity

    // Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    // Update cart UI
    renderCartItems(cartItems)
    updateCartCount(cartItems)
  }
}

/**
 * Remove cart item
 * @param {string|number} productId - Product ID
 */
function removeCartItem(productId) {
  // Get cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  // Filter out item
  cartItems = cartItems.filter((item) => item.id != productId)

  // Save updated cart to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems))

  // Update cart UI
  renderCartItems(cartItems)
  updateCartCount(cartItems)

  // Show toast
  showToast("Item removed from cart")
}

/**
 * Set up event listeners for cart
 */
function setupCartListeners() {
  // Cart icon click
  const cartIcon = document.getElementById("cart-icon")
  const cartSidebar = document.getElementById("cart-sidebar")
  const closeCart = document.getElementById("close-cart")

  if (cartIcon && cartSidebar) {
    cartIcon.addEventListener("click", (e) => {
      e.preventDefault()
      cartSidebar.classList.add("active")
    })
  }

  if (closeCart && cartSidebar) {
    closeCart.addEventListener("click", () => {
      cartSidebar.classList.remove("active")
    })
  }

  // Listen for add-to-cart events
  document.addEventListener("add-to-cart", (e) => {
    if (e.detail && e.detail.product) {
      addToCart(e.detail.product)
    }
  })
}

/**
 * Add product to cart
 * @param {Object} product - Product object
 */
function addToCart(product) {
  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  // Check if product already exists in cart
  const existingItemIndex = cartItems.findIndex((item) => item.id === product.id)

  if (existingItemIndex !== -1) {
    // Update quantity if product already in cart
    cartItems[existingItemIndex].quantity += product.quantity || 1
  } else {
    // Add new product to cart
    cartItems.push({
      ...product,
      quantity: product.quantity || 1,
    })
  }

  // Save updated cart to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems))

  // Update cart UI
  renderCartItems(cartItems)
  updateCartCount(cartItems)

  // Show cart sidebar
  const cartSidebar = document.getElementById("cart-sidebar")
  if (cartSidebar) {
    cartSidebar.classList.add("active")
  }
}

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning)
 */
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
