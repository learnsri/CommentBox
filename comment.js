document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload/redirect

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Message submitted!');
      form.reset(); // Clear form fields
    } else {
      response.json().then(data => {
        if (data.errors) {
          alert('Error: ' + data.errors.map(error => error.message).join(', '));
        } else {
          alert('Oops! There was a problem submitting your form');
        }
      });
    }
  })
  .catch(() => {
    alert('Oops! There was a problem submitting your form');
  });
});
