// Learner dashboard functions

function loadLearnerDashboard() {
    updateStats();
    loadCurrentModules();
    loadNotifications();
    loadCatalog();
    loadCertificates();
}

function updateStats() {
    const inProgress = getModulesByStatus('in-progress').length;
    const completed = getModulesByStatus('completed').length;
    const notStarted = getModulesByStatus('not-started').length;
    const certificates = getUserCertificates().length;

    document.getElementById('statInProgress').textContent = inProgress;
    document.getElementById('statCompleted').textContent = completed;
    document.getElementById('statPending').textContent = notStarted;
    document.getElementById('statCertificates').textContent = certificates;
}

function loadCurrentModules() {
    const container = document.getElementById('currentModules');
    const inProgressModules = getModulesByStatus('in-progress');

    if (inProgressModules.length === 0) {
        container.innerHTML = '<p style="color: var(--color-text-secondary);">Aucun module en cours</p>';
        return;
    }

    container.innerHTML = inProgressModules.map(module => `
        <div class="module-list-item" onclick="openModule(${module.id})">
            <div class="module-list-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="module-list-content">
                <div class="module-list-title">${module.title}</div>
                <div class="module-list-subtitle">${module.progress}% complété</div>
                <div class="module-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${module.progress}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function loadNotifications() {
    const container = document.getElementById('notificationsList');
    const notifications = getUserNotifications();

    container.innerHTML = notifications.map(notif => `
        <div class="notification-item ${!notif.read ? 'unread' : ''}">
            <div class="notification-header">
                <div class="notification-title">${notif.title}</div>
                <div class="notification-time">${notif.time}</div>
            </div>
            <div class="notification-message">${notif.message}</div>
        </div>
    `).join('');
}

function loadCatalog() {
    const container = document.getElementById('modulesCatalog');

    container.innerHTML = modulesData.map(module => {
        const statusBadge = module.status === 'completed' ? 'Terminé' :
            module.status === 'in-progress' ? 'En cours' : 'Nouveau';
        const statusClass = module.status === 'completed' ? 'success' :
            module.status === 'in-progress' ? 'warning' : 'info';

        return `
            <div class="module-card" onclick="openModule(${module.id})">
                <div class="module-header">
                    <svg class="module-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="module-badge ${statusClass}">${statusBadge}</span>
                </div>
                <div class="module-body">
                    <span class="module-category">${getCategoryName(module.category)}</span>
                    <h3 class="module-title">${module.title}</h3>
                    <p class="module-description">${module.description}</p>
                    <div class="module-meta">
                        <div class="meta-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                                <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            ${module.duration}
                        </div>
                        <div class="meta-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            ${module.lessons} leçons
                        </div>
                    </div>
                    ${module.progress > 0 ? `
                        <div class="module-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${module.progress}%"></div>
                            </div>
                            <div class="progress-text">${module.progress}% complété</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function loadCertificates() {
    const container = document.getElementById('certificatesList');
    const certificates = getUserCertificates();

    if (certificates.length === 0) {
        container.innerHTML = '<p style="color: var(--color-text-secondary);">Aucun certificat disponible</p>';
        return;
    }

    container.innerHTML = certificates.map(cert => `
        <div class="certificate-card">
            <svg class="certificate-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 class="certificate-title">${cert.moduleName}</h3>
            <div class="certificate-date">Obtenu le ${formatDate(cert.completionDate)}</div>
            <div class="certificate-score">Score: ${cert.score}%</div>
            <button class="btn btn-primary" onclick="downloadCertificate(${cert.id})">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="7 10 12 15 17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Télécharger PDF
            </button>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const categories = {
        'gdpr': 'RGPD',
        'aml': 'Lutte anti-blanchiment',
        'ethics': 'Éthique',
        'security': 'Sécurité'
    };
    return categories[category] || category;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

function openModule(moduleId) {
    const module = getModuleById(moduleId);
    if (!module) return;

    // Simple alert for demo - in production this would open a modal with module content
    alert(`Ouverture du module: ${module.title}\n\nDans une version complète, ceci ouvrirait le contenu interactif du module avec des vidéos, du texte et des quiz intégrés.`);

    // Simulate progress for demo
    if (module.status === 'not-started') {
        updateModuleProgress(moduleId, 10);
        loadLearnerDashboard();
    }
}

function downloadCertificate(certificateId) {
    const cert = certificatesData.find(c => c.id === certificateId);
    if (!cert) return;

    // In production, this would generate and download a real PDF
    alert(`Téléchargement du certificat:\n\n${cert.moduleName}\nNuméro: ${cert.certificateNumber}\nScore: ${cert.score}%\n\nDans une version complète, un PDF professionnel serait généré automatiquement.`);
}

// Navigation between learner views
function navigateLearner(viewName) {
    // Hide all views
    document.querySelectorAll('#learnerDashboard .view').forEach(view => {
        view.classList.remove('active');
    });

    // Show selected view
    document.getElementById(viewName + 'View').classList.add('active');

    // Update nav links
    document.querySelectorAll('#learnerDashboard .nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') === viewName);
    });
}

// Search and filter functionality
function searchModules(query) {
    const filtered = modulesData.filter(module =>
        module.title.toLowerCase().includes(query.toLowerCase()) ||
        module.description.toLowerCase().includes(query.toLowerCase())
    );
    displayFilteredModules(filtered);
}

function filterByCategory(category) {
    const filtered = category === 'all'
        ? modulesData
        : modulesData.filter(module => module.category === category);
    displayFilteredModules(filtered);
}

function displayFilteredModules(modules) {
    const container = document.getElementById('modulesCatalog');

    if (modules.length === 0) {
        container.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center;">Aucun module trouvé</p>';
        return;
    }

    // Use the same rendering logic as loadCatalog but with filtered data
    container.innerHTML = modules.map(module => {
        const statusBadge = module.status === 'completed' ? 'Terminé' :
            module.status === 'in-progress' ? 'En cours' : 'Nouveau';

        return `
            <div class="module-card" onclick="openModule(${module.id})">
                <div class="module-header">
                    <svg class="module-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span class="module-badge">${statusBadge}</span>
                </div>
                <div class="module-body">
                    <span class="module-category">${getCategoryName(module.category)}</span>
                    <h3 class="module-title">${module.title}</h3>
                    <p class="module-description">${module.description}</p>
                    <div class="module-meta">
                        <div class="meta-item">⏱ ${module.duration}</div>
                        <div class="meta-item">📚 ${module.lessons} leçons</div>
                    </div>
                    ${module.progress > 0 ? `
                        <div class="module-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${module.progress}%"></div>
                            </div>
                            <div class="progress-text">${module.progress}% complété</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}
