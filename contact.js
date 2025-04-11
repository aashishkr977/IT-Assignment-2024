document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get form values
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
  
      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      // Optionally, you can use a more advanced email validation here
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Success message
      alert(`Thank you, ${name}! Your message has been sent.`);
  
      // Optionally, reset the form
      form.reset();
    });
  });
  