const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('inputField').value;

    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    if (alphanumericPattern.test(inputValue)) {
      const confirmation = document.createElement('p');
    
      confirmation.textContent = 'Form submitted successfully!';
      form.appendChild(confirmation);
      
      // form.submit(); 

      
    } else {
      const error = document.createElement('p');
      error.textContent = 'Error: Please enter alphanumeric characters only.';
      form.appendChild(error);
    }
  });