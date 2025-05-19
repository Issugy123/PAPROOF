// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal elements
    const privacyPolicyModal = document.getElementById("privacy-policy-modal");
    const privacyPolicyLinks = document.querySelectorAll(".privacy-policy-link");
    const closeModalButtons = document.querySelectorAll(".close-modal, #close-privacy-policy");
    
    // Function to open the modal
    function openModal(modal) {
      modal.classList.add("show");
      document.body.classList.add("modal-open");
    }
    
    // Function to close the modal
    function closeModal(modal) {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
    
    // Add click event listeners to all privacy policy links
    privacyPolicyLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        openModal(privacyPolicyModal);
      });
    });
    
    // Add click event listeners to all close buttons
    closeModalButtons.forEach(button => {
      button.addEventListener("click", function() {
        closeModal(privacyPolicyModal);
      });
    });
    
    // Close the modal when clicking outside of it
    window.addEventListener("click", function(event) {
      if (event.target === privacyPolicyModal) {
        closeModal(privacyPolicyModal);
      }
    });
    
    // Close the modal when pressing the Escape key
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && privacyPolicyModal.classList.contains("show")) {
        closeModal(privacyPolicyModal);
      }
    });
  
    // Set current year in footer copyright
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  
    // Make social media links open in new tab
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  });