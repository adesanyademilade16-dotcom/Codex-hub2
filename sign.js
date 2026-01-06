
const STORAGE_KEY = 'cbtUsers';
    const DEVICE_GMAIL_KEY = 'device_gmail_lock';
    const REDIRECT_DELAY = 2000;

    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    const successModal = document.getElementById('successModal');

    function handleSignup(event) {
        event.preventDefault();
        const form = event.target;
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';

        const email = form.email.value.trim().toLowerCase();

        // ✅ Gmail-only check
        if (!email.endsWith('@gmail.com')) {
            return displayError('❌ Only Gmail accounts are allowed.');
        }

        // ✅ One Gmail per device check
        const lockedEmail = localStorage.getItem(DEVICE_GMAIL_KEY);
        if (lockedEmail && lockedEmail !== email) {
            return displayError(
                `❌ This device is already registered with ${lockedEmail}. Only one Gmail account is allowed per device.`
            );
        }

        const userData = {
            fullName: form.fullName.value.trim(),
            email: email,
            department: form.department.value.trim(),
            password: form.password.value,
            confirmPassword: form.confirmPassword.value
        };

        if (userData.password !== userData.confirmPassword) {
            return displayError("Passwords do not match.");
        }

        if (userData.password.length < 5) {
            return displayError("Password must be at least 5 characters long.");
        }

        const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

        // ✅ Prevent same Gmail from registering twice
        const emailExists = users.some(user => user.email === email);
        if (emailExists) {
            return displayError("❌ This Gmail is already registered. Please log in.");
        }

        // ✅ Save account
        const newUser = {
            id: Date.now(),
            fullName: userData.fullName,
            email: email,
            department: userData.department,
            password: userData.password,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

        // 🔒 Lock this Gmail to the device
        localStorage.setItem(DEVICE_GMAIL_KEY, email);

        successModal.style.display = 'flex';

        setTimeout(() => {
            window.location.href = 'Login.html';
        }, REDIRECT_DELAY);
    }

    function displayError(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        return false;
    }
