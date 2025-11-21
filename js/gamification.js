// Gamification System - Badges, Points, Levels

// Badge definitions
const badges = {
    'first_login': {
        id: 'first_login',
        name: 'Premier pas',
        description: 'Connecté pour la première fois',
        icon: '👋',
        points: 10,
        rarity: 'common'
    },
    'first_module': {
        id: 'first_module',
        name: 'Étudiant débutant',
        description: 'Premier module complété',
        icon: '📚',
        points: 25,
        rarity: 'common'
    },
    'five_modules': {
        id: 'five_modules',
        name: 'Apprenant assidu',
        description: '5 modules complétés',
        icon: '🎓',
        points: 100,
        rarity: 'uncommon'
    },
    'all_modules': {
        id: 'all_modules',
        name: 'Maître de la conformité',
        description: 'Tous les modules complétés',
        icon: '🏆',
        points: 500,
        rarity: 'legendary'
    },
    'perfect_score': {
        id: 'perfect_score',
        name: 'Perfectionniste',
        description: 'Score de 100% à un quiz',
        icon: '💯',
        points: 150,
        rarity: 'rare'
    },
    'quick_learner': {
        id: 'quick_learner',
        name: 'Apprenant rapide',
        description: '3 modules en une journée',
        icon: '⚡',
        points: 200,
        rarity: 'rare'
    },
    'night_owl': {
        id: 'night_owl',
        name: 'Oiseau de nuit',
        description: 'Module complété après 22h',
        icon: '🦉',
        points: 50,
        rarity: 'uncommon'
    },
    'early_bird': {
        id: 'early_bird',
        name: 'Lève-tôt',
        description: 'Module complété avant 6h',
        icon: '🌅',
        points: 50,
        rarity: 'uncommon'
    },
    'streak_7': {
        id: 'streak_7',
        name: 'Série hebdomadaire',
        description: '7 jours consécutifs de connexion',
        icon: '🔥',
        points: 150,
        rarity: 'rare'
    },
    'streak_30': {
        id: 'streak_30',
        name: 'Série mensuelle',
        description: '30 jours consécutifs de connexion',
        icon: '💪',
        points: 500,
        rarity: 'legendary'
    },
    'quiz_master': {
        id: 'quiz_master',
        name: 'Maître des quiz',
        description: 'Moyenne de 90%+ sur tous les quiz',
        icon: '🧠',
        points: 300,
        rarity: 'epic'
    },
    'helping_hand': {
        id: 'helping_hand',
        name: 'Main secourable',
        description: 'Partagé une formation avec un collègue',
        icon: '🤝',
        points: 75,
        rarity: 'uncommon'
    }
};

// Level system
const levels = [
    { level: 1, name: 'Novice', minPoints: 0, maxPoints: 100, color: '#9CA3AF' },
    { level: 2, name: 'Apprenti', minPoints: 100, maxPoints: 250, color: '#10B981' },
    { level: 3, name: 'Étudiant', minPoints: 250, maxPoints: 500, color: '#3B82F6' },
    { level: 4, name: 'Confirmé', minPoints: 500, maxPoints: 1000, color: '#8B5CF6' },
    { level: 5, name: 'Expert', minPoints: 1000, maxPoints: 2000, color: '#F59E0B' },
    { level: 6, name: 'Maître', minPoints: 2000, maxPoints: 5000, color: '#EF4444' },
    { level: 7, name: 'Grand Maître', minPoints: 5000, maxPoints: 10000, color: '#EC4899' },
    { level: 8, name: 'Légende', minPoints: 10000, maxPoints: Infinity, color: '#FFD700' }
];

// Gamification Manager
class GamificationManager {
    constructor() {
        this.userProgress = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('gamification_progress');
        if (saved) {
            return JSON.parse(saved);
        }

        // Initialize default progress
        return {
            points: 0,
            level: 1,
            badges: [],
            streak: 0,
            lastLoginDate: null,
            modulesCompleted: 0,
            modulesCompletedToday: 0,
            lastModuleDate: null,
            quizScores: [],
            totalTimeSpent: 0
        };
    }

    saveProgress() {
        localStorage.setItem('gamification_progress', JSON.stringify(this.userProgress));
    }

    addPoints(points, reason = '') {
        const oldLevel = this.userProgress.level;
        this.userProgress.points += points;

        // Check for level up
        const newLevel = this.calculateLevel();
        if (newLevel > oldLevel) {
            this.userProgress.level = newLevel;
            this.saveProgress();
            this.celebrateLevelUp(newLevel);
        } else {
            this.saveProgress();
        }

        if (reason) {
            toast.success(`+${points} points: ${reason}`);
        }
    }

    calculateLevel() {
        for (let i = levels.length - 1; i >= 0; i--) {
            if (this.userProgress.points >= levels[i].minPoints) {
                return levels[i].level;
            }
        }
        return 1;
    }

    getCurrentLevel() {
        return levels.find(l => l.level === this.userProgress.level) || levels[0];
    }

    getNextLevel() {
        return levels.find(l => l.level === this.userProgress.level + 1);
    }

    getLevelProgress() {
        const current = this.getCurrentLevel();
        const pointsInLevel = this.userProgress.points - current.minPoints;
        const levelRange = current.maxPoints - current.minPoints;
        return (pointsInLevel / levelRange) * 100;
    }

    unlockBadge(badgeId) {
        const badge = badges[badgeId];
        if (!badge) return;

        // Check if already unlocked
        if (this.userProgress.badges.includes(badgeId)) {
            return;
        }

        this.userProgress.badges.push(badgeId);
        this.addPoints(badge.points, `Badge débloqué: ${badge.name}`);
        this.showBadgeUnlock(badge);
    }

    showBadgeUnlock(badge) {
        const rarityColors = {
            'common': '#9CA3AF',
            'uncommon': '#10B981',
            'rare': '#3B82F6',
            'epic': '#8B5CF6',
            'legendary': '#FFD700'
        };

        const content = `
            <div class="badge-unlock-animation">
                <div class="badge-icon-large" style="font-size: 80px;">${badge.icon}</div>
                <h3 style="margin: 16px 0 8px; color: ${rarityColors[badge.rarity]};">
                    Badge débloqué !
                </h3>
                <h2 style="margin: 0 0 8px;">${badge.name}</h2>
                <p style="margin: 0 0 16px; color: var(--color-text-secondary);">${badge.description}</p>
                <div class="badge-points">+${badge.points} points</div>
            </div>
        `;

        modal.show(content, {
            title: '',
            size: 'small'
        });

        setTimeout(() => modal.close(), 3000);
    }

    celebrateLevelUp(newLevel) {
        const levelInfo = levels.find(l => l.level === newLevel);

        const content = `
            <div class="level-up-animation">
                <div class="level-up-icon">🎉</div>
                <h2 style="margin: 16px 0; font-size: 32px;">Niveau supérieur !</h2>
                <div class="new-level" style="font-size: 48px; font-weight: 800; color: ${levelInfo.color};">
                    Niveau ${newLevel}
                </div>
                <div class="level-name" style="font-size: 24px; margin: 8px 0; color: ${levelInfo.color};">
                    ${levelInfo.name}
                </div>
                <p style="margin-top: 16px; color: var(--color-text-secondary);">
                    Continuez comme ça ! 🚀
                </p>
            </div>
        `;

        modal.show(content, {
            title: '',
            size: 'small'
        });

        setTimeout(() => modal.close(), 4000);
    }

    trackLogin() {
        const today = new Date().toDateString();

        // First login ever
        if (!this.userProgress.lastLoginDate) {
            this.unlockBadge('first_login');
        }

        // Update streak
        if (this.userProgress.lastLoginDate) {
            const lastLogin = new Date(this.userProgress.lastLoginDate);
            const lastLoginDate = lastLogin.toDateString();
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayDate = yesterday.toDateString();

            if (lastLoginDate === yesterdayDate) {
                // Consecutive day
                this.userProgress.streak++;
            } else if (lastLoginDate !== today) {
                // Streak broken
                this.userProgress.streak = 1;
            }
        } else {
            this.userProgress.streak = 1;
        }

        this.userProgress.lastLoginDate = new Date().toISOString();

        // Check streak badges
        if (this.userProgress.streak === 7) {
            this.unlockBadge('streak_7');
        } else if (this.userProgress.streak === 30) {
            this.unlockBadge('streak_30');
        }

        // Reset daily counter if new day
        if (this.userProgress.lastModuleDate !== today) {
            this.userProgress.modulesCompletedToday = 0;
        }

        this.saveProgress();
    }

    trackModuleCompletion(score) {
        const today = new Date().toDateString();

        this.userProgress.modulesCompleted++;
        this.userProgress.modulesCompletedToday++;
        this.userProgress.lastModuleDate = today;
        this.userProgress.quizScores.push(score);

        // Check badges
        if (this.userProgress.modulesCompleted === 1) {
            this.unlockBadge('first_module');
        } else if (this.userProgress.modulesCompleted === 5) {
            this.unlockBadge('five_modules');
        } else if (this.userProgress.modulesCompleted >= modulesData.length) {
            this.unlockBadge('all_modules');
        }

        if (this.userProgress.modulesCompletedToday === 3) {
            this.unlockBadge('quick_learner');
        }

        if (score === 100) {
            this.unlockBadge('perfect_score');
        }

        // Check time-based badges
        const hour = new Date().getHours();
        if (hour >= 22 || hour < 6) {
            if (hour >= 22) {
                this.unlockBadge('night_owl');
            } else {
                this.unlockBadge('early_bird');
            }
        }

        // Check average score
        const avgScore = this.userProgress.quizScores.reduce((a, b) => a + b, 0) / this.userProgress.quizScores.length;
        if (avgScore >= 90 && this.userProgress.quizScores.length >= 5) {
            this.unlockBadge('quiz_master');
        }

        // Add points based on score
        const points = Math.floor(score / 10) * 5;
        this.addPoints(points, 'Module complété');

        this.saveProgress();
    }

    getUserBadges() {
        return this.userProgress.badges.map(id => badges[id]).filter(Boolean);
    }

    getLockedBadges() {
        return Object.values(badges).filter(badge =>
            !this.userProgress.badges.includes(badge.id)
        );
    }

    renderUserStats() {
        const currentLevel = this.getCurrentLevel();
        const nextLevel = this.getNextLevel();
        const progress = this.getLevelProgress();
        const earnedBadges = this.getUserBadges();

        return `
            <div class="gamification-stats">
                <div class="level-card">
                    <div class="level-info">
                        <div class="level-badge" style="background: ${currentLevel.color};">
                            Niv. ${currentLevel.level}
                        </div>
                        <div class="level-details">
                            <h3>${currentLevel.name}</h3>
                            <p>${this.userProgress.points} points</p>
                        </div>
                    </div>
                    ${nextLevel ? `
                        <div class="level-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%; background: ${currentLevel.color};"></div>
                            </div>
                            <small>Prochain niveau: ${nextLevel.name} (${nextLevel.minPoints} points)</small>
                        </div>
                    ` : '<p>Niveau maximum atteint ! 🏆</p>'}
                </div>

                <div class="streak-card">
                    <div class="streak-icon">🔥</div>
                    <div class="streak-info">
                        <h3>${this.userProgress.streak} jours</h3>
                        <p>Série de connexion</p>
                    </div>
                </div>

                <div class="badges-showcase">
                    <h3>Badges débloqués (${earnedBadges.length}/${Object.keys(badges).length})</h3>
                    <div class="badges-grid">
                        ${earnedBadges.slice(0, 6).map(badge => `
                            <div class="badge-item earned" title="${badge.description}">
                                <span class="badge-icon">${badge.icon}</span>
                                <span class="badge-name">${badge.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    reset() {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser votre progression ?')) {
            localStorage.removeItem('gamification_progress');
            this.userProgress = this.loadProgress();
            toast.info('Progression réinitialisée');
        }
    }
}

// Global instance
const gamification = new GamificationManager();
