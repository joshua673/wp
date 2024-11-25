// Get form elements
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const submitButton = document.getElementById("submitButton");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const phoneError = document.getElementById("phoneError");
const ageError = document.getElementById("ageError");

// Validation flags
let isNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isPhoneValid = false;
let isAgeValid = false;

// Regular expressions
const nameRegex = /^[a-zA-Z\s]{3,}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const phoneRegex = /^\d{10}$/;

// Validation functions
fullName.addEventListener("input", () => {
    if (nameRegex.test(fullName.value)) {
        nameError.textContent = "";
        isNameValid = true;
    } else {
        nameError.textContent = "Name must be at least 3 characters long and only contain letters and spaces.";
        isNameValid = false;
    }
    toggleSubmitButton();
});

email.addEventListener("input", () => {
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
        isEmailValid = true;
    } else {
        emailError.textContent = "Please enter a valid email address.";
        isEmailValid = false;
    }
    toggleSubmitButton();
});

password.addEventListener("input", () => {
    if (passwordRegex.test(password.value)) {
        passwordError.textContent = "";
        isPasswordValid = true;
    } else {
        passwordError.textContent = "Password must be at least 6 characters long and contain letters and numbers.";
        isPasswordValid = false;
    }
    toggleSubmitButton();
});

phone.addEventListener("input", () => {
    if (phoneRegex.test(phone.value)) {
        phoneError.textContent = "";
        isPhoneValid = true;
    } else {
        phoneError.textContent = "Phone number must be 10 digits.";
        isPhoneValid = false;
    }
    toggleSubmitButton();
});

age.addEventListener("input", () => {
    if (age.value >= 18 && age.value <= 120) {
        ageError.textContent = "";
        isAgeValid = true;
    } else {
        ageError.textContent = "Age must be between 18 and 120.";
        isAgeValid = false;
    }
    toggleSubmitButton();
});

// Enable submit button only if all fields are valid
function toggleSubmitButton() {
    submitButton.disabled = !(isNameValid && isEmailValid && isPasswordValid && isPhoneValid && isAgeValid);
}

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Registration successful!");
});
