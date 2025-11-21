// Multilingual translations
const translations = {
    fr: {
        // Login
        'login.subtitle': 'Plateforme de formation pour professionnels de l\'assurance',
        'login.email': 'Email',
        'login.password': 'Mot de passe',
        'login.remember': 'Se souvenir de moi',
        'login.forgot': 'Mot de passe oublié?',
        'login.submit': 'Se connecter',
        
        // Navigation
        'nav.dashboard': 'Tableau de bord',
        'nav.catalog': 'Catalogue',
        'nav.certificates': 'Certificats',
        'nav.logout': 'Déconnexion',
        
        // Dashboard
        'dashboard.welcome': 'Bienvenue sur votre tableau de bord',
        'dashboard.subtitle': 'Suivez votre progression et accédez à vos formations',
        'dashboard.currentModules': 'Modules en cours',
        'dashboard.notifications': 'Notifications',
        
        // Stats
        'stats.inProgress': 'En cours',
        'stats.completed': 'Terminés',
        'stats.pending': 'À faire',
        'stats.certificates': 'Certificats',
        
        // Catalog
        'catalog.title': 'Catalogue de formations',
        'catalog.search': 'Rechercher un module...',
        'catalog.allCategories': 'Toutes les catégories',
        
        // Certificates
        'certificates.title': 'Mes certificats',
        'certificates.subtitle': 'Téléchargez vos attestations de formation',
        
        // Admin
        'admin.nav.overview': 'Vue d\'ensemble',
        'admin.nav.modules': 'Modules',
        'admin.nav.users': 'Utilisateurs',
        'admin.nav.reports': 'Rapports',
        'admin.overview.title': 'Vue d\'ensemble',
        'admin.stats.totalUsers': 'Total utilisateurs',
        'admin.stats.totalModules': 'Total modules',
        'admin.stats.completionRate': 'Taux de complétion',
        'admin.stats.certificatesIssued': 'Certificats délivrés'
    },
    en: {
        // Login
        'login.subtitle': 'Training platform for insurance professionals',
        'login.email': 'Email',
        'login.password': 'Password',
        'login.remember': 'Remember me',
        'login.forgot': 'Forgot password?',
        'login.submit': 'Sign in',
        
        // Navigation
        'nav.dashboard': 'Dashboard',
        'nav.catalog': 'Catalog',
        'nav.certificates': 'Certificates',
        'nav.logout': 'Logout',
        
        // Dashboard
        'dashboard.welcome': 'Welcome to your dashboard',
        'dashboard.subtitle': 'Track your progress and access your trainings',
        'dashboard.currentModules': 'Current modules',
        'dashboard.notifications': 'Notifications',
        
        // Stats
        'stats.inProgress': 'In Progress',
        'stats.completed': 'Completed',
        'stats.pending': 'To Do',
        'stats.certificates': 'Certificates',
        
        // Catalog
        'catalog.title': 'Training Catalog',
        'catalog.search': 'Search for a module...',
        'catalog.allCategories': 'All categories',
        
        // Certificates
        'certificates.title': 'My Certificates',
        'certificates.subtitle': 'Download your training certificates',
        
        // Admin
        'admin.nav.overview': 'Overview',
        'admin.nav.modules': 'Modules',
        'admin.nav.users': 'Users',
        'admin.nav.reports': 'Reports',
        'admin.overview.title': 'Overview',
        'admin.stats.totalUsers': 'Total Users',
        'admin.stats.totalModules': 'Total Modules',
        'admin.stats.completionRate': 'Completion Rate',
        'admin.stats.certificatesIssued': 'Certificates Issued'
    }
};

// Current language
let currentLanguage = 'fr';

// Function to update page translations
function updatePageTranslations() {
    const lang = currentLanguage;
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('appLanguage', lang);
    updatePageTranslations();
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Initialize language from localStorage or default to French
function initLanguage() {
    const savedLang = localStorage.getItem('appLanguage') || 'fr';
    changeLanguage(savedLang);
}
