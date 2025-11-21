// Course viewing and navigation functionality

class CourseViewer {
    constructor() {
        this.currentCourse = null;
        this.currentChapter = 0;
        this.currentSection = 0;
        this.completedSections = new Set();
        this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('courseProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.completedSections = new Set(progress.completed || []);
        }
    }

    saveProgress() {
        localStorage.setItem('courseProgress', JSON.stringify({
            completed: Array.from(this.completedSections),
            lastAccessed: new Date().toISOString()
        }));
    }

    openCourse(courseId) {
        if (!coursesContent[courseId]) {
            toast.error('Contenu du cours non disponible');
            return;
        }

        this.currentCourse = coursesContent[courseId];
        this.currentChapter = 0;
        this.currentSection = 0;
        this.renderCoursePage();
    }

    renderCoursePage() {
        const course = this.currentCourse;
        const mainContent = document.querySelector('.main-content') || document.body;

        const courseHTML = `
            <div class="course-viewer-container">
                <!-- Course Header -->
                <div class="course-header">
                    <div class="course-header-content">
                        <div class="breadcrumb">
                            <a href="#" onclick="courseViewer.closeCourse(); return false;">📚 Catalogue</a>
                            <span class="separator">›</span>
                            <span>${course.title}</span>
                        </div>
                        <h1>${course.title}</h1>
                        <p class="course-subtitle">${course.subtitle}</p>
                        
                        <div class="course-meta">
                            <div class="course-meta-item">
                                <span class="icon">⏱️</span>
                                <span>${course.duration}</span>
                            </div>
                            <div class="course-meta-item">
                                <span class="icon">📖</span>
                                <span>${course.lessons} leçons</span>
                            </div>
                            <div class="course-meta-item">
                                <span class="icon">📊</span>
                                <span>${course.level}</span>
                            </div>
                            <div class="course-meta-item">
                                <span class="icon">⭐</span>
                                <span>${course.rating}/5 (${course.students} étudiants)</span>
                            </div>
                            <div class="course-meta-item">
                                <span class="icon">🔄</span>
                                <span>Mis à jour le ${course.lastUpdated}</span>
                            </div>
                        </div>

                        <div class="instructor-card">
                            <div class="instructor-avatar">${course.instructorImage}</div>
                            <div class="instructor-info">
                                <h4>${course.instructor}</h4>
                                <p>${course.instructorTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Course Stats -->
                <div class="course-stats">
                    <div class="stat-box">
                        <div class="stat-value">${course.objectives.length}</div>
                        <div class="stat-label">Objectifs</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${course.chapters.length}</div>
                        <div class="stat-label">Chapitres</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${this.getTotalSections()}</div>
                        <div class="stat-label">Sections</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${this.getCompletionPercentage()}%</div>
                        <div class="stat-label">Complété</div>
                    </div>
                </div>

                <!-- Learning Objectives -->
                <div class="objectives-section">
                    <h3>🎯 Objectifs d'apprentissage</h3>
                    <p>À la fin de cette formation, vous serez capable de :</p>
                    <div class="objectives-list">
                        ${course.objectives.map(obj => `
                            <div class="objective-item">
                                <span class="objective-icon">✓</span>
                                <span>${obj}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Prerequisites -->
                ${course.prerequisites && course.prerequisites.length > 0 ? `
                    <div class="prerequisites-section">
                        <h3>📋 Prérequis</h3>
                        <ul>
                            ${course.prerequisites.map(pre => `<li>${pre}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                <!-- Course Curriculum -->
                <div class="curriculum-section">
                    <h3>📚 Programme du cours</h3>
                    <div class="chapter-list">
                        ${course.chapters.map((chapter, index) => this.renderChapter(chapter, index)).join('')}
                    </div>
                </div>

                <!-- Resources -->
                ${course.resources && course.resources.length > 0 ? `
                    <div class="resources-section">
                        <h3>📎 Ressources complémentaires</h3>
                        <div class="resources-grid">
                            ${course.resources.map(resource => this.renderResource(resource)).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Start Course Button -->
                <div class="course-actions">
                    <button class="btn-primary-large" onclick="courseViewer.startCourse()">
                        🚀 Commencer le cours
                    </button>
                </div>
            </div>
        `;

        mainContent.innerHTML = courseHTML;
        this.attachEventListeners();
    }

    renderChapter(chapter, chapterIndex) {
        const totalSections = chapter.sections.length;
        const completedInChapter = chapter.sections.filter(s =>
            this.completedSections.has(`${this.currentCourse.id}-${chapterIndex}-${chapter.sections.indexOf(s)}`)
        ).length;

        return `
            <div class="chapter-card ${chapterIndex === 0 ? 'expanded' : ''}" data-chapter="${chapterIndex}">
                <div class="chapter-header" onclick="courseViewer.toggleChapter(${chapterIndex})">
                    <div class="chapter-title-group">
                        <div class="chapter-number">${chapterIndex + 1}</div>
                        <div class="chapter-info">
                            <h4>${chapter.title}</h4>
                            <div class="chapter-meta">
                                <span>⏱️ ${chapter.duration}</span>
                                <span>📄 ${totalSections} section${totalSections > 1 ? 's' : ''}</span>
                                <span>✓ ${completedInChapter}/${totalSections} complété${completedInChapter > 1 ? 's' : ''}</span>
                            </div>
                        </div>
                    </div>
                    <div class="chapter-actions">
                        <span class="chapter-badge">${chapter.type === 'video' ? '🎥 Vidéo' : chapter.type === 'text' ? '📝 Texte' : chapter.type === 'quiz' ? '📝 Quiz' : '💡 Interactif'}</span>
                        <span class="chapter-expand-icon">▼</span>
                    </div>
                </div>
                <div class="chapter-content">
                    <div class="section-list">
                        ${chapter.sections.map((section, sectionIndex) => this.renderSection(section, chapterIndex, sectionIndex)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderSection(section, chapterIndex, sectionIndex) {
        const sectionId = `${this.currentCourse.id}-${chapterIndex}-${sectionIndex}`;
        const isCompleted = this.completedSections.has(sectionId);

        return `
            <div class="section-item" onclick="courseViewer.openSection(${chapterIndex}, ${sectionIndex})">
                <div class="section-icon">📄</div>
                <div class="section-title">${section.title}</div>
                <span class="section-status ${isCompleted ? 'completed' : 'in-progress'}">
                    ${isCompleted ? '✓ Terminé' : '○ À faire'}
                </span>
            </div>
        `;
    }

    renderResource(resource) {
        const icons = {
            'pdf': '📄',
            'link': '🔗',
            'video': '🎥',
            'template': '📋'
        };

        return `
            <a href="${resource.url}" class="resource-card" target="_blank">
                <div class="resource-icon">${icons[resource.type] || '📎'}</div>
                <div class="resource-info">
                    <h4>${resource.title}</h4>
                    <p>${resource.description}</p>
                    ${resource.size ? `<span class="resource-meta">${resource.size}</span>` : ''}
                    ${resource.duration ? `<span class="resource-meta">${resource.duration}</span>` : ''}
                </div>
            </a>
        `;
    }

    toggleChapter(chapterIndex) {
        const chapterCard = document.querySelector(`[data-chapter="${chapterIndex}"]`);
        if (chapterCard) {
            chapterCard.classList.toggle('expanded');
        }
    }

    openSection(chapterIndex, sectionIndex) {
        this.currentChapter = chapterIndex;
        this.currentSection = sectionIndex;
        this.renderSectionContent();
    }

    startCourse() {
        this.openSection(0, 0);
    }

    renderSectionContent() {
        const course = this.currentCourse;
        const chapter = course.chapters[this.currentChapter];
        const section = chapter.sections[this.currentSection];
        const sectionId = `${course.id}-${this.currentChapter}-${this.currentSection}`;

        const mainContent = document.querySelector('.main-content') || document.body;

        const sectionHTML = `
            <div class="section-viewer-container">
                <!-- Section Header -->
                <div class="section-header">
                    <div class="breadcrumb">
                        <a href="#" onclick="courseViewer.openCourse(${course.id}); return false;">📚 ${course.title}</a>
                        <span class="separator">›</span>
                        <span>Chapitre ${this.currentChapter + 1}</span>
                        <span class="separator">›</span>
                        <span>${section.title}</span>
                    </div>
                    <h1>${chapter.title}</h1>
                    <h2>${section.title}</h2>
                </div>

                <!-- Progress Bar -->
                <div class="section-progress-bar">
                    <div class="progress-info">
                        <span>Progression du cours</span>
                        <span>${this.getCompletionPercentage()}% complété</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${this.getCompletionPercentage()}%"></div>
                    </div>
                </div>

                <!-- Section Content -->
                <div class="course-content-viewer">
                    <!-- Sidebar Navigation -->
                    <div class="content-sidebar">
                        <h3>📖 Navigation</h3>
                        <div class="chapters-nav">
                            ${course.chapters.map((ch, idx) => `
                                <div class="nav-chapter ${idx === this.currentChapter ? 'active' : ''}">
                                    <div class="nav-chapter-title" onclick="courseViewer.toggleNavChapter(${idx})">
                                        <span>${idx + 1}. ${ch.title}</span>
                                        <span>▼</span>
                                    </div>
                                    <div class="nav-sections ${idx === this.currentChapter ? 'expanded' : ''}">
                                        ${ch.sections.map((s, sidx) => {
            const secId = `${course.id}-${idx}-${sidx}`;
            const isComp = this.completedSections.has(secId);
            const isCurrent = idx === this.currentChapter && sidx === this.currentSection;
            return `
                                                <div class="nav-section ${isCurrent ? 'current' : ''} ${isComp ? 'completed' : ''}" 
                                                     onclick="courseViewer.openSection(${idx}, ${sidx})">
                                                    <span>${isComp ? '✓' : '○'}</span>
                                                    <span>${s.title}</span>
                                                </div>
                                            `;
        }).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="content-main">
                        <div class="content-block">
                            ${section.content}
                        </div>

                        <!-- Video if present -->
                        ${section.videoUrl ? `
                            <div class="video-container">
                                <iframe 
                                    src="${section.videoUrl}" 
                                    frameborder="0" 
                                    allowfullscreen
                                ></iframe>
                            </div>
                        ` : ''}

                        <!-- Quiz if present -->
                        ${section.quiz ? this.renderInlineQuiz(section.quiz) : ''}

                        <!-- Navigation Buttons -->
                        <div class="content-navigation">
                            ${this.hasPreviousSection() ? `
                                <button class="nav-button" onclick="courseViewer.previousSection()">
                                    ← Section précédente
                                </button>
                            ` : '<div></div>'}
                            
                            <button class="btn-complete-section" onclick="courseViewer.markAsComplete('${sectionId}')">
                                ${this.completedSections.has(sectionId) ? '✓ Terminé' : '✓ Marquer comme terminé'}
                            </button>
                            
                            ${this.hasNextSection() ? `
                                <button class="nav-button" onclick="courseViewer.nextSection()">
                                    Section suivante →
                                </button>
                            ` : `
                                <button class="nav-button btn-finish" onclick="courseViewer.finishCourse()">
                                    🎉 Terminer le cours
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        `;

        mainContent.innerHTML = sectionHTML;
        window.scrollTo(0, 0);
    }

    renderInlineQuiz(quiz) {
        return `
            <div class="inline-quiz">
                <h4>💡 Question de compréhension</h4>
                <p class="quiz-question">${quiz.question}</p>
                <div class="quiz-options">
                    ${quiz.options.map((option, index) => `
                        <label class="quiz-option">
                            <input type="radio" name="inline-quiz" value="${index}">
                            <span>${option}</span>
                        </label>
                    `).join('')}
                </div>
                <button class="btn-check-answer" onclick="courseViewer.checkQuizAnswer(${quiz.correctAnswer}, '${quiz.explanation}')">
                    Vérifier ma réponse
                </button>
                <div class="quiz-feedback" style="display: none;"></div>
            </div>
        `;
    }

    checkQuizAnswer(correctAnswer, explanation) {
        const selectedOption = document.querySelector('input[name="inline-quiz"]:checked');
        const feedback = document.querySelector('.quiz-feedback');

        if (!selectedOption) {
            toast.warning('Veuillez sélectionner une réponse');
            return;
        }

        const selectedValue = parseInt(selectedOption.value);
        const isCorrect = selectedValue === correctAnswer;

        feedback.style.display = 'block';
        feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `
            <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="feedback-content">
                <h5>${isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte'}</h5>
                <p>${explanation}</p>
            </div>
        `;

        if (isCorrect) {
            toast.success('Excellente réponse !');
        }
    }

    toggleNavChapter(chapterIndex) {
        const navChapter = document.querySelectorAll('.nav-chapter')[chapterIndex];
        if (navChapter) {
            const sections = navChapter.querySelector('.nav-sections');
            sections.classList.toggle('expanded');
        }
    }

    hasPreviousSection() {
        if (this.currentSection > 0) return true;
        if (this.currentChapter > 0) return true;
        return false;
    }

    hasNextSection() {
        const chapter = this.currentCourse.chapters[this.currentChapter];
        if (this.currentSection < chapter.sections.length - 1) return true;
        if (this.currentChapter < this.currentCourse.chapters.length - 1) return true;
        return false;
    }

    previousSection() {
        if (this.currentSection > 0) {
            this.currentSection--;
        } else if (this.currentChapter > 0) {
            this.currentChapter--;
            this.currentSection = this.currentCourse.chapters[this.currentChapter].sections.length - 1;
        }
        this.renderSectionContent();
    }

    nextSection() {
        const chapter = this.currentCourse.chapters[this.currentChapter];
        if (this.currentSection < chapter.sections.length - 1) {
            this.currentSection++;
        } else if (this.currentChapter < this.currentCourse.chapters.length - 1) {
            this.currentChapter++;
            this.currentSection = 0;
        }
        this.renderSectionContent();
    }

    markAsComplete(sectionId) {
        this.completedSections.add(sectionId);
        this.saveProgress();
        toast.success('Section marquée comme terminée !');

        // Update gamification
        if (typeof gamification !== 'undefined') {
            gamification.addPoints(10, 'Section complétée');
        }

        this.renderSectionContent();
    }

    getTotalSections() {
        return this.currentCourse.chapters.reduce((sum, ch) => sum + ch.sections.length, 0);
    }

    getCompletionPercentage() {
        const total = this.getTotalSections();
        const completed = this.currentCourse.chapters.reduce((sum, ch, chIdx) => {
            return sum + ch.sections.filter((s, sIdx) => {
                const secId = `${this.currentCourse.id}-${chIdx}-${sIdx}`;
                return this.completedSections.has(secId);
            }).length;
        }, 0);
        return Math.round((completed / total) * 100);
    }

    finishCourse() {
        const completionPercentage = this.getCompletionPercentage();

        if (completionPercentage >= 70) {
            modal.alert(`
                <div style="text-align: center;">
                    <h3>🎉 Félicitations !</h3>
                    <p>Vous avez terminé le cours avec ${completionPercentage}% de progression.</p>
                    <p>Vous pouvez maintenant passer au quiz final pour obtenir votre certificat.</p>
                </div>
            `, {
                title: 'Cours terminé',
                confirmText: 'Passer au Quiz',
                onConfirm: () => {
                    // Start the quiz
                    if (typeof startQuiz === 'function') {
                        startQuiz(this.currentCourse.id);
                    }
                }
            });

            // Track completion
            if (typeof gamification !== 'undefined') {
                gamification.trackModuleCompletion(completionPercentage);
            }
        } else {
            toast.warning(`Complétez au moins 70% du cours avant le quiz final (actuellement: ${completionPercentage}%)`);
        }
    }

    closeCourse() {
        navigateLearner('catalog');
    }

    attachEventListeners() {
        // Add any additional event listeners if needed
    }
}

// Initialize course viewer
const courseViewer = new CourseViewer();
