// Authentication system
let currentUser = null;

// Initialize authentication
function initAuth() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
    }
}

// Login function
function login(email, password) {
    const user = usersData.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showDashboard();
        return true;
    }

    return false;
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLoginPage();
}

// Show login page
function showLoginPage() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('loginPage').classList.add('active');
}

// Show appropriate dashboard
function showDashboard() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

    if (currentUser.role === 'admin') {
        document.getElementById('adminDashboard').classList.add('active');
        document.getElementById('adminName').textContent = currentUser.name;
        loadAdminDashboard();
    } else {
        document.getElementById('learnerDashboard').classList.add('active');
        document.getElementById('userName').textContent = currentUser.name;

        // Update user avatar
        const avatar = document.querySelector('#learnerDashboard .user-avatar');
        avatar.textContent = currentUser.name.charAt(0).toUpperCase();

        loadLearnerDashboard();
    }
}

// Check if user is authenticated
function isAuthenticated() {
    return currentUser !== null;
}

// Check if user is admin
function isAdmin() {
    return currentUser && currentUser.role === 'admin';
}
