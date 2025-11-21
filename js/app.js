// Main application initialization and event handlers

document.addEventListener('DOMContentLoaded', function () {
    // Initialize language
    initLanguage();

    // Initialize authentication
    initAuth();

    // Initialize gamification tracking
    if (typeof gamification !== 'undefined' && isAuthenticated()) {
        gamification.trackLogin();
    }

    // Setup event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (login(email, password)) {
                // Clear form
                loginForm.reset();
                // Track login for gamification
                if (typeof gamification !== 'undefined') {
                    gamification.trackLogin();
                }
            } else {
                showNotification('Email ou mot de passe incorrect. Veuillez utiliser les identifiants de démonstration.', 'error');
            }
        });
    }

    // Logout buttons
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            logout();
        });
    }

    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            logout();
        });
    }

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Learner navigation
    document.querySelectorAll('#learnerDashboard .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                navigateLearner(page);
            }
        });
    });

    // Admin navigation
    document.querySelectorAll('#adminDashboard .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-admin-page');
            if (page) {
                navigateAdmin(page);
            }
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchModules');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchModules(this.value);
            }, 300);
        });
    }

    // Category filter
    const categoryFilter = document.getElementById('filterCategory');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function () {
            filterByCategory(this.value);
        });
    }

    // Export report buttons
    document.querySelectorAll('[data-export]').forEach(btn => {
        btn.addEventListener('click', function () {
            const type = this.getAttribute('data-export');
            exportReport(type);
        });
    });

    // Create module button (admin)
    const createModuleBtn = document.getElementById('createModuleBtn');
    if (createModuleBtn) {
        createModuleBtn.addEventListener('click', function () {
            const message = `
                <p>Dans une version complète, ceci ouvrirait un formulaire permettant de:</p>
                <ul style="text-align: left; padding-left: 20px;">
                    <li>Définir le titre et la description</li>
                    <li>Choisir la catégorie</li>
                    <li>Ajouter du contenu (texte, vidéos, images)</li>
                    <li>Créer des quiz intégrés</li>
                    <li>Configurer le quiz final</li>
                    <li>Définir les critères de réussite</li>
                </ul>
            `;
            if (typeof modal !== 'undefined') {
                modal.alert(message, { title: 'Création d\'un nouveau module' });
            }
        });
    }

    // Add user button (admin)
    const addUserBtn = document.getElementById('addUserBtn');
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function () {
            const message = `
                <p>Dans une version complète, ceci ouvrirait un formulaire permettant de:</p>
                <ul style="text-align: left; padding-left: 20px;">
                    <li>Saisir les informations de l'utilisateur</li>
                    <li>Définir le rôle (Admin/Apprenant)</li>
                    <li>Assigner des formations</li>
                    <li>Envoyer un email de bienvenue</li>
                </ul>
            `;
            if (typeof modal !== 'undefined') {
                modal.alert(message, { title: 'Ajout d\'un nouvel utilisateur' });
            }
        });
    }

    // Export main report button
    const exportReportBtn = document.getElementById('exportReportBtn');
    if (exportReportBtn) {
        exportReportBtn.addEventListener('click', function () {
            const message = `
                <p><strong>Format:</strong> Excel</p>
                <p>Dans une version complète, un fichier Excel complet serait généré avec:</p>
                <ul style="text-align: left; padding-left: 20px;">
                    <li>Vue d'ensemble des statistiques</li>
                    <li>Progression par utilisateur</li>
                    <li>Taux de complétion par module</li>
                    <li>Scores moyens</li>
                    <li>Certificats délivrés</li>
                </ul>
            `;
            if (typeof modal !== 'undefined') {
                modal.alert(message, { title: 'Export du rapport général' });
            }
        });
    }
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    if (typeof toast !== 'undefined') {
        toast[type](message);
    } else {
        console.log(`[${type.toUpperCase()}] ${message}`);
    }
}

// Global error handler
window.addEventListener('error', function (e) {
    console.error('Application error:', e.error);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function () {
    if (isAuthenticated()) {
        // Refresh current view
        if (isAdmin()) {
            loadAdminDashboard();
        } else {
            loadLearnerDashboard();
        }
    }
});
