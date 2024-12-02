// secureFormValidation.js

function validateForm() {
    const firstName = sanitizeInput(document.getElementById('firstName').value);
    const lastName = sanitizeInput(document.getElementById('lastName').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const password = sanitizeInput(document.getElementById('password').value);
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value);

    // Error Messages
    let messages = [];

    if (!firstName) {
        messages.push("First name is required.");
    }
    if (!lastName) {
        messages.push("Last name is required.");
    }
    if (!validateEmail(email)) {
        messages.push("Enter a valid email.");
    }
    if (password.length < 6) {
        messages.push("Password must be at least 6 characters long.");
    }
    if (password !== confirmPassword) {
        messages.push("Passwords do not match.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n"));
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Sanitize user input
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(input));
    return div.innerHTML;
}

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailRegex.test(email);
}
