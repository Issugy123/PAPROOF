// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // FAQs data
  const faqsData = [
    {
      question: "Are your products cruelty-free?",
      answer:
        "Yes, all Bubble Cosmetics products are 100% cruelty-free. We never test on animals and we work only with suppliers who share this commitment.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location. Please check our shipping policy for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused and unopened products. Please contact our customer service team to initiate a return.",
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer:
        "Many of our products are formulated for sensitive skin, but we always recommend checking the ingredients list and doing a patch test if you have specific sensitivities.",
    },
    {
      question: "Do you offer samples?",
      answer:
        "Yes, we offer sample sizes of select products. Orders over $50 qualify for free samples of your choice at checkout.",
    },
  ]

  // Render FAQs
  const faqContainer = document.getElementById("faq-container")
  if (faqContainer) {
    renderFAQs(faqsData, faqContainer)
  }

  // Contact form validation
  const contactForm = document.getElementById("contact-form")
  const formSuccess = document.getElementById("form-success")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form fields
      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const subjectInput = document.getElementById("subject")
      const messageInput = document.getElementById("message")

      // Reset previous error states
      const allInputs = [nameInput, emailInput, subjectInput, messageInput]
      allInputs.forEach((input) => {
        input.classList.remove("error")
      })

      // Validate fields
      let isValid = true

      // Check if fields are empty
      allInputs.forEach((input) => {
        if (!input.value.trim()) {
          input.classList.add("error")
          isValid = false
        }
      })

      // Basic email validation
      if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add("error")
        isValid = false
      }

      if (isValid) {
        // In a real application, you would submit the form data to a server
        console.log("Form submitted:", {
          name: nameInput.value,
          email: emailInput.value,
          subject: subjectInput.value,
          message: messageInput.value,
        })

        // Show success message
        if (formSuccess) {
          formSuccess.classList.add("active")
          contactForm.style.display = "none"

          // Reset form
          contactForm.reset()

          // Hide success message and show form after 5 seconds
          setTimeout(() => {
            formSuccess.classList.remove("active")
            contactForm.style.display = "block"
          }, 5000)
        } else {
          alert("Thank you for your message! We will get back to you soon.")
          contactForm.reset()
        }
      } else {
        // Show error message
        alert("Please fill in all required fields correctly.")
      }
    })
  }

  // Function to render FAQs
  function renderFAQs(faqs, container) {
    faqs.forEach((faq, index) => {
      const faqItem = document.createElement("div")
      faqItem.className = "faq-item"
      faqItem.setAttribute("data-aos", "fade-up")

      if (index > 0) {
        faqItem.setAttribute("data-aos-delay", (index * 100).toString())
      }

      faqItem.innerHTML = `
        <div class="faq-question">
          <h3>${faq.question}</h3>
          <span class="faq-toggle">
            <i class="fas fa-plus"></i>
          </span>
        </div>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      `

      container.appendChild(faqItem)

      // Add click event to toggle FAQ
      const question = faqItem.querySelector(".faq-question")
      question.addEventListener("click", () => {
        // Toggle active class
        faqItem.classList.toggle("active")

        // Update the icon
        const icon = question.querySelector(".faq-toggle i")
        if (faqItem.classList.contains("active")) {
          icon.className = "fas fa-minus"
        } else {
          icon.className = "fas fa-plus"
        }
      })
    })
  }

  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Add hover effects for social media icons
  const socialItems = document.querySelectorAll(".social-item")
  if (socialItems.length > 0) {
    socialItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)"
      })

      item.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    })
  }
})
