// Example app.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the form element
    const form = document.querySelector('#contact-form');
  
    // Add an event listener for form submission
    form.addEventListener('submit', async (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
  
      try {
        // Send form data to the server using fetch API
        const response = await fetch('/submit-form', {
          method: 'POST',
          body: formData
        });
  
        // Check if the request was successful
        if (response.ok) {
          // Parse the JSON response
          const data = await response.json();
          console.log(data); // Log the response from the server
          // Optionally, update the UI or display a success message
        } else {
          console.error('Error:', response.statusText);
          // Optionally, display an error message to the user
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle any network errors or other exceptions
      }
    });
  });
  