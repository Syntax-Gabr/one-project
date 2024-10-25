document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this)
    if (username === '' || password === '') {
        displayMessage('Please fill in all fields', 'error');
    } else if (username === 'admin' && password === 'password') {
        displayMessage('Login successful!', 'success');
        // Redirect to another page or perform other actions
    } else {
        displayMessage('Invalid username or password', 'error');
    }
});

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // add a class to style the message based on type
    setTimeout(() => {
        messageDiv.textContent = ''; // clear the message after a few seconds
    }, 3000);
}
