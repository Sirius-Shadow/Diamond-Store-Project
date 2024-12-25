// Function to open the login modal
window.onload = () => {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block'; // Open the modal when the page loads

    // Autofill username if "Remember Me" was checked
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('username').value = storedUsername;
    }

    // Handle closing the modal when the close button is clicked
    document.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
    };

    // Handle closing the modal when clicking outside of the modal content
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};

// Handle form submission and Remember Me functionality
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;

    if (username === '' || password === '') {
        alert('Both username and password are required.');
        return;
    }

    // Store username if Remember Me is checked
    if (rememberMe) {
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('username');
    }

    // Simulate login success
    alert(`Welcome, ${username}!`);

    // Close the modal after login
    document.getElementById('loginModal').style.display = 'none';
});

// Get the modal
var modal = document.getElementById("loginModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// To open the modal (call this function when needed)
function openModal() {
    modal.style.display = "block";
}
