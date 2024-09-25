document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('remember-me');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Load saved username if available
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
    }

    form.addEventListener('submit', (event) => {
        let hasErrors = false;

        // Clear previous errors
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Validate username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            hasErrors = true;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            hasErrors = true;
        }

        // Prevent form submission if there are errors
        if (hasErrors) {
            event.preventDefault();
        } else if (rememberMeCheckbox.checked) {
            localStorage.setItem('savedUsername', usernameInput.value);
        } else {
            localStorage.removeItem('savedUsername');
        }
    });
});