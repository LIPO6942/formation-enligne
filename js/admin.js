// Admin dashboard functions

function loadAdminDashboard() {
    loadAdminOverview();
    loadAdminModules();
    loadAdminUsers();
}

function loadAdminOverview() {
    // Load activity list
    const activityContainer = document.querySelector('#adminOverviewView .activity-list');
    if (activityContainer) {
        const activities = [
            { text: 'Marie Dupont a terminé le module "RGPD"', time: 'Il y a 15 minutes' },
            { text: 'Nouveau module "Compliance ACPR" créé', time: 'Il y a 1 heure' },
            { text: 'Jean Martin a obtenu un score de 95% en Éthique', time: 'Il y a 2 heures' },
            { text: '12 nouveaux utilisateurs ajoutés', time: 'Il y a 3 heures' },
            { text: 'Rapport mensuel généré', time: 'Il y a 1 jour' }
        ];

        activityContainer.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                    <div class="activity-text">${activity.text}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            </div>
        `).join('');
    }

    // Load progress chart
    const progressContainer = document.querySelector('#progressChart .progress-list');
    if (progressContainer) {
        const moduleProgress = modulesData.map(module => ({
            name: module.title,
            completion: Math.floor(Math.random() * 50) + 50 // Random for demo
        }));

        progressContainer.innerHTML = moduleProgress.map(item => `
            <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="font-size: 14px; color: var(--color-text-secondary);">${item.name}</span>
                    <span style="font-size: 14px; font-weight: 600; color: var(--color-text-primary);">${item.completion}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${item.completion}%"></div>
                </div>
            </div>
        `).join('');
    }
}

function loadAdminModules() {
    const container = document.getElementById('adminModulesList');
    if (!container) return;

    container.innerHTML = `
        <div class="admin-table-container">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Catégorie</th>
                        <th>Durée</th>
                        <th>Inscrits</th>
                        <th>Taux de réussite</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${modulesData.map(module => `
                        <tr>
                            <td style="font-weight: 600;">${module.title}</td>
                            <td>${getCategoryName(module.category)}</td>
                            <td>${module.duration}</td>
                            <td>${Math.floor(Math.random() * 50) + 20}</td>
                            <td>${Math.floor(Math.random() * 20) + 75}%</td>
                            <td>
                                <button class="btn btn-small btn-secondary" onclick="editModule(${module.id})">Modifier</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function loadAdminUsers() {
    const container = document.getElementById('adminUsersList');
    if (!container) return;

    const allUsers = [
        ...usersData,
        { id: 3, name: 'Marie Dupont', email: 'marie.dupont@demo.com', role: 'learner', department: 'Marketing', completedModules: 5, inProgressModules: 2 },
        { id: 4, name: 'Jean Martin', email: 'jean.martin@demo.com', role: 'learner', department: 'Ventes', completedModules: 3, inProgressModules: 3 },
        { id: 5, name: 'Sophie Bernard', email: 'sophie.bernard@demo.com', role: 'learner', department: 'RH', completedModules: 4, inProgressModules: 1 }
    ];

    container.innerHTML = `
        <div class="admin-table-container">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Département</th>
                        <th>Rôle</th>
                        <th>Terminés</th>
                        <th>En cours</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${allUsers.map(user => `
                        <tr>
                            <td style="font-weight: 600;">${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.department}</td>
                            <td><span style="padding: 4px 8px; background: ${user.role === 'admin' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(59, 130, 246, 0.15)'}; border-radius: 4px; font-size: 12px;">${user.role === 'admin' ? 'Admin' : 'Apprenant'}</span></td>
                            <td>${user.completedModules}</td>
                            <td>${user.inProgressModules}</td>
                            <td>
                                <button class="btn btn-small btn-secondary" onclick="viewUserDetails(${user.id})">Voir</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function editModule(moduleId) {
    const module = getModuleById(moduleId);
    if (!module) return;

    alert(`Modification du module: ${module.title}\n\nDans une version complète, ceci ouvrirait un formulaire d'édition permettant de:\n- Modifier le titre et la description\n- Ajouter/modifier le contenu (vidéos, texte, quiz)\n- Gérer les questions du quiz final\n- Définir les critères de réussite`);
}

function viewUserDetails(userId) {
    alert(`Détails de l'utilisateur #${userId}\n\nDans une version complète, ceci afficherait:\n- L'historique complet des formations\n- Les scores aux quiz\n- Les certificats obtenus\n- La progression détaillée par module\n- Les statistiques d'activité`);
}

function navigateAdmin(viewName) {
    // Hide all admin views
    document.querySelectorAll('#adminDashboard .view').forEach(view => {
        view.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById('admin' + viewName.charAt(0).toUpperCase() + viewName.slice(1) + 'View');
    if (targetView) {
        targetView.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('#adminDashboard .nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-admin-page') === viewName);
    });
}

function exportReport(type) {
    const reports = {
        'completion': 'Rapport de complétion des formations',
        'scores': 'Rapport des scores aux quiz',
        'certificates': 'Rapport des certificats délivrés',
        'activity': 'Rapport d\'activité des utilisateurs'
    };

    alert(`Export du rapport: ${reports[type] || type}\n\nFormat: CSV/Excel\n\nDans une version complète, un fichier serait automatiquement généré et téléchargé contenant toutes les données pertinentes.`);
}
