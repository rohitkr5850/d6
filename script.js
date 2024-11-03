document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    // Name Validation
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    if (!/^[a-zA-Z]+$/.test(name)) {
        nameError.textContent = "Name should contain only alphabetic characters.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (password.length < 8) {
        passwordError.textContent = "Password should be at least 8 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        // Here you can add code to actually submit the form
    }
});