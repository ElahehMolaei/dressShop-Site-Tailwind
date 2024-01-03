function showAlert(message) {
    alert(message);
}

function toggleForm(formId) {
    var formContainer1 = document.getElementById('formContainer1');
    var formContainer2 = document.getElementById('formContainer2');

    if (formId === 'register') {
        formContainer1.classList.toggle('hidden');
        formContainer1.classList.toggle('animate-slideIn');
        formContainer2.classList.add('hidden');
        formContainer2.classList.remove('animate-slideOut');
    } else if (formId === 'login') {
        formContainer2.classList.toggle('hidden');
        formContainer2.classList.toggle('animate-slideIn');
        formContainer1.classList.add('hidden');
        formContainer1.classList.remove('animate-slideOut');
    }
}

function submitForm(formId) {
    // Add your form submission logic here

    // After form submission, hide the form with animation
    if (formId === 'register') {
        var formContainer1 = document.getElementById('formContainer1');
        formContainer1.classList.add('animate-slideOut');
    } else if (formId === 'login') {
        var formContainer2 = document.getElementById('formContainer2');
        formContainer2.classList.add('animate-slideOut');
    }
}

function validateNumericInput(input) {
    // Remove non-numeric characters using a regular expression
    input.value = input.value.replace(/\D/g, '');
    
}

function togglePasswordVisibility(inputId, btnId) {
    var passwordInput = document.getElementById(inputId);
    var toggleBtn = document.getElementById(btnId);

    if (passwordInput.type === 'password' || passwordInput.type === 'confirmpassword') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}
function validateAlphaNumericInput(input) {
    input.value = input.value.replace(/[^a-zA-Z0-9!@#$%&*]/g, '');
}
// JavaScript function to scroll to the bottom
function scrollDown() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}