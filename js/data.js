// Sample data for the application
const modulesData = [
    {
        id: 1,
        title: 'RGPD - Protection des données personnelles',
        category: 'gdpr',
        description: 'Comprendre les principes fondamentaux du RGPD et leurs applications dans le secteur des assurances.',
        duration: '45 min',
        difficulty: 'Débutant',
        progress: 65,
        status: 'in-progress',
        lessons: 8,
        quizScore: null
    },
    {
        id: 2,
        title: 'Lutte anti-blanchiment (LCB-FT)',
        category: 'aml',
        description: 'Maîtriser les obligations en matière de lutte contre le blanchiment d\'argent et le financement du terrorisme.',
        duration: '60 min',
        difficulty: 'Intermédiaire',
        progress: 0,
        status: 'not-started',
        lessons: 12,
        quizScore: null
    },
    {
        id: 3,
        title: 'Éthique et déontologie professionnelle',
        category: 'ethics',
        description: 'Découvrir les principes éthiques et les règles déontologiques applicables aux professionnels de l\'assurance.',
        duration: '30 min',
        difficulty: 'Débutant',
        progress: 100,
        status: 'completed',
        lessons: 6,
        quizScore: 92
    },
    {
        id: 4,
        title: 'Sécurité des systèmes d\'information',
        category: 'security',
        description: 'Apprenez à protéger les données et les systèmes contre les cybermenaces.',
        duration: '50 min',
        difficulty: 'Intermédiaire',
        progress: 100,
        status: 'completed',
        lessons: 10,
        quizScore: 88
    },
    {
        id: 5,
        title: 'Directive sur la distribution d\'assurances (DDA)',
        category: 'gdpr',
        description: 'Comprendre les exigences de la DDA et leur impact sur la distribution d\'assurances.',
        duration: '40 min',
        difficulty: 'Avancé',
        progress: 35,
        status: 'in-progress',
        lessons: 9,
        quizScore: null
    },
    {
        id: 6,
        title: 'Gestion des conflits d\'intérêts',
        category: 'ethics',
        description: 'Identifier et gérer les situations de conflits d\'intérêts dans le secteur des assurances.',
        duration: '25 min',
        difficulty: 'Débutant',
        progress: 0,
        status: 'not-started',
        lessons: 5,
        quizScore: null
    }
];

const notificationsData = [
    {
        id: 1,
        title: 'Nouvelle formation disponible',
        message: 'Le module "Gestion des conflits d\'intérêts" est maintenant disponible.',
        time: 'Il y a 2 heures',
        read: false
    },
    {
        id: 2,
        title: 'Formation à compléter',
        message: 'N\'oubliez pas de terminer le module "RGPD" avant la fin du mois.',
        time: 'Il y a 1 jour',
        read: false
    },
    {
        id: 3,
        title: 'Certificat disponible',
        message: 'Votre certificat pour "Éthique et déontologie" est prêt à être téléchargé.',
        time: 'Il y a 3 jours',
        read: true
    }
];

const certificatesData = [
    {
        id: 1,
        moduleId: 3,
        moduleName: 'Éthique et déontologie professionnelle',
        completionDate: '2025-11-10',
        score: 92,
        certificateNumber: 'CERT-2025-001234'
    },
    {
        id: 2,
        moduleId: 4,
        moduleName: 'Sécurité des systèmes d\'information',
        completionDate: '2025-11-05',
        score: 88,
        certificateNumber: 'CERT-2025-001198'
    }
];

const usersData = [
    {
        id: 1,
        name: 'Utilisateur Démo',
        email: 'user@demo.com',
        password: 'user123',
        role: 'learner',
        department: 'Ventes',
        completedModules: 2,
        inProgressModules: 2
    },
    {
        id: 2,
        name: 'Administrateur',
        email: 'admin@demo.com',
        password: 'admin123',
        role: 'admin',
        department: 'IT',
        completedModules: 0,
        inProgressModules: 0
    }
];

// Get modules by status
function getModulesByStatus(status) {
    return modulesData.filter(module => module.status === status);
}

// Get module by ID
function getModuleById(id) {
    return modulesData.find(module => module.id === id);
}

// Get user certificates
function getUserCertificates() {
    return certificatesData;
}

// Get user notifications
function getUserNotifications() {
    return notificationsData;
}

// Update module progress
function updateModuleProgress(moduleId, progress) {
    const module = getModuleById(moduleId);
    if (module) {
        module.progress = progress;
        if (progress === 100) {
            module.status = 'completed';
        } else if (progress > 0) {
            module.status = 'in-progress';
        }
    }
}

// Complete module with score
function completeModule(moduleId, score) {
    const module = getModuleById(moduleId);
    if (module) {
        module.progress = 100;
        module.status = 'completed';
        module.quizScore = score;

        // Add certificate
        const certificate = {
            id: certificatesData.length + 1,
            moduleId: moduleId,
            moduleName: module.title,
            completionDate: new Date().toISOString().split('T')[0],
            score: score,
            certificateNumber: `CERT-2025-${String(certificatesData.length + 1000).padStart(6, '0')}`
        };
        certificatesData.push(certificate);

        return certificate;
    }
    return null;
}
