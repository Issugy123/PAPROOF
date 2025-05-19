// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle")
  const mobileNav = document.getElementById("mobile-nav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active")
    })
  }

  // Search toggle
  const searchToggle = document.getElementById("search-toggle")
  const searchOverlay = document.getElementById("search-overlay")
  const closeSearch = document.getElementById("close-search")

  if (searchToggle && searchOverlay && closeSearch) {
    searchToggle.addEventListener("click", (e) => {
      e.preventDefault()
      searchOverlay.classList.add("active")
      document.getElementById("search-input").focus()
    })

    closeSearch.addEventListener("click", () => {
      searchOverlay.classList.remove("active")
    })

    // Close search on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
        searchOverlay.classList.remove("active")
      }
    })
  }

  // Enhanced search functionality
  const searchForm = document.querySelector(".search-form")
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const searchTerm = document.getElementById("search-input").value.trim()
      if (searchTerm) {
        // Store search term in sessionStorage
        sessionStorage.setItem("searchTerm", searchTerm)
        // Redirect to products page
        window.location.href = "products.html"
      }
    })
  }

  // User account icon functionality
  const userIcon = document.querySelector(".header-icons .icon-btn:nth-child(2)")
  if (userIcon) {
    userIcon.addEventListener("click", (e) => {
      e.preventDefault()
      // For now, just show an alert
      alert("User account functionality coming soon!")
      // In a real implementation, you would show a login/register modal
    })
  }

  // Set current year in footer
  const yearSpan = document.getElementById("current-year")
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString()
  }

  // Add animations for elements as they scroll into view
  const animateElements = () => {
    const elements = document.querySelectorAll("[data-aos]")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight * 0.85) {
        element.classList.add("animated")

        // Handle delay
        const delay = element.getAttribute("data-aos-delay")
        if (delay) {
          setTimeout(() => {
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
          }, Number.parseInt(delay))
        } else {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      }
    })
  }

  // Initial animation check
  setTimeout(animateElements, 100)

  // Trigger animations on scroll
  window.addEventListener("scroll", animateElements)

  // Newsletter form submission
  const newsletterForms = document.querySelectorAll("#newsletter-form")

  if (newsletterForms.length > 0) {
    newsletterForms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const emailInput = form.querySelector("#newsletter-email")
        const successMessage = document.getElementById("newsletter-success")

        if (emailInput && emailInput.value.trim() && successMessage) {
          // In a real application, you would submit the form data to a server
          console.log("Newsletter subscription:", emailInput.value)

          // Show success message
          successMessage.classList.add("active")

          // Hide form
          form.style.display = "none"

          // Reset form
          form.reset()

          // Hide success message and show form after 5 seconds
          setTimeout(() => {
            successMessage.classList.remove("active")
            form.style.display = "flex"
          }, 5000)
        }
      })
    })
  }

  // Add animation classes to elements with data-aos attribute
  const elementsToAnimate = document.querySelectorAll("[data-aos]")

  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Floating Go to Top Button
  const goToTopFloatBtn = document.getElementById("goToTopFloatBtn");
  if (goToTopFloatBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        goToTopFloatBtn.classList.add("show");
      } else {
        goToTopFloatBtn.classList.remove("show");
      }
    });

    goToTopFloatBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})
