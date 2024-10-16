// Basic authentication function
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (you'll need to use server-side for real validation)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials, please try again.');
    }
    return false;
}

function logout() {
    window.location.href = 'index.html';
}
