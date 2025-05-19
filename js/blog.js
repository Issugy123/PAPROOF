// Blog functionality
document.addEventListener("DOMContentLoaded", () => {
    // Blog category filtering
    const categoryItems = document.querySelectorAll(".blog-category-item")
    const blogCards = document.querySelectorAll(".blog-card")
  
    if (categoryItems.length > 0) {
      categoryItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault()
  
          // Remove active class from all items
          categoryItems.forEach((cat) => cat.classList.remove("active"))
  
          // Add active class to clicked item
          item.classList.add("active")
  
          const category = item.getAttribute("data-category")
  
          // Filter blog cards
          blogCards.forEach((card) => {
            if (category === "all" || card.getAttribute("data-category") === category) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          })
        })
      })
    }
  
    // Load more functionality
    const loadMoreBtn = document.getElementById("load-more-btn")
  
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        // Add loading state
        loadMoreBtn.classList.add("loading")
        loadMoreBtn.textContent = "Loading..."
  
        // Simulate loading delay
        setTimeout(() => {
          // In a real application, you would fetch more posts from the server
          // For this demo, we'll just show a message
          loadMoreBtn.classList.remove("loading")
          loadMoreBtn.textContent = "No More Articles"
          loadMoreBtn.disabled = true
        }, 1500)
      })
    }
  
    // Blog search functionality
    const searchForm = document.querySelector(".search-form")
  
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const searchInput = document.getElementById("search-input")
        const searchTerm = searchInput.value.trim().toLowerCase()
  
        if (searchTerm) {
          // Filter blog cards based on search term
          // In a real application, you would send this to the server
          // For this demo, we'll just filter the existing cards
  
          let foundResults = false
  
          blogCards.forEach((card) => {
            const title = card.querySelector("h3").textContent.toLowerCase()
            const content = card.querySelector("p").textContent.toLowerCase()
  
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
              card.style.display = "block"
              foundResults = true
            } else {
              card.style.display = "none"
            }
          })
  
          // Show all categories
          categoryItems.forEach((cat) => cat.classList.remove("active"))
          document.querySelector('[data-category="all"]').classList.add("active")
  
          // Close search overlay
          document.getElementById("search-overlay").classList.remove("active")
  
          // Scroll to blog section
          document.querySelector(".latest-posts").scrollIntoView({ behavior: "smooth" })
  
          // Show message if no results found
          if (!foundResults) {
            alert("No articles found matching your search term.")
          }
        }
      })
    }
  })
  