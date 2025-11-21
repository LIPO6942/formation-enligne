// Interactive Quiz System

class Quiz {
    constructor(moduleId, questions) {
        this.moduleId = moduleId;
        this.questions = questions;
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.startTime = Date.now();
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestion];
    }

    answerQuestion(answerIndex) {
        const question = this.getCurrentQuestion();
        const isCorrect = answerIndex === question.correctAnswer;
        
        this.answers.push({
            questionIndex: this.currentQuestion,
            answerIndex: answerIndex,
            isCorrect: isCorrect,
            timestamp: Date.now()
        });

        if (isCorrect) {
            this.score++;
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            return true;
        }
        return false;
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            return true;
        }
        return false;
    }

    getProgress() {
        return ((this.currentQuestion + 1) / this.questions.length) * 100;
    }

    getScore() {
        return (this.score / this.questions.length) * 100;
    }

    getTimeSpent() {
        return Math.floor((Date.now() - this.startTime) / 1000);
    }

    isComplete() {
        return this.answers.length === this.questions.length;
    }

    getResults() {
        return {
            score: this.getScore(),
            correctAnswers: this.score,
            totalQuestions: this.questions.length,
            timeSpent: this.getTimeSpent(),
            answers: this.answers
        };
    }
}

// Sample quiz questions for each module
const quizQuestions = {
    1: [ // RGPD
        {
            question: "Que signifie RGPD ?",
            options: [
                "Règlement Général sur la Protection des Données",
                "Règlement Général Pour les Données",
                "Registre Général de Protection Digitale",
                "Règles Générales de Protection et Digitalisation"
            ],
            correctAnswer: 0,
            explanation: "RGPD signifie Règlement Général sur la Protection des Données, entré en vigueur en mai 2018."
        },
        {
            question: "Quelle est la durée maximale de conservation des données personnelles selon le RGPD ?",
            options: [
                "Indéfiniment si le consentement est obtenu",
                "La durée nécessaire aux finalités du traitement",
                "5 ans maximum",
                "10 ans maximum"
            ],
            correctAnswer: 1,
            explanation: "Les données ne doivent être conservées que pour la durée nécessaire aux finalités pour lesquelles elles sont traitées."
        },
        {
            question: "Quel droit permet à une personne de demander l'effacement de ses données ?",
            options: [
                "Droit d'accès",
                "Droit de rectification",
                "Droit à l'oubli",
                "Droit d'opposition"
            ],
            correctAnswer: 2,
            explanation: "Le droit à l'oubli permet aux personnes de demander l'effacement de leurs données personnelles."
        },
        {
            question: "En cas de violation de données, dans quel délai faut-il notifier la CNIL ?",
            options: [
                "24 heures",
                "48 heures",
                "72 heures",
                "1 semaine"
            ],
            correctAnswer: 2,
            explanation: "La notification à la CNIL doit être faite dans les 72 heures suivant la prise de connaissance de la violation."
        },
        {
            question: "Qu'est-ce qu'un DPO ?",
            options: [
                "Délégué à la Protection des Données",
                "Directeur de la Protection Organisée",
                "Département de Protection Opérationnelle",
                "Données Protégées par l'Organisation"
            ],
            correctAnswer: 0,
            explanation: "Le DPO (Data Protection Officer) est le Délégué à la Protection des Données."
        }
    ],
    2: [ // LCB-FT
        {
            question: "Que signifie LCB-FT ?",
            options: [
                "Lutte Contre le Blanchiment - Financement du Terrorisme",
                "Loi sur le Contrôle Bancaire et Fiscal",
                "Législation du Commerce et des Banques",
                "Limitation des Capitaux et Blanchiment"
            ],
            correctAnswer: 0,
            explanation: "LCB-FT signifie Lutte Contre le Blanchiment et le Financement du Terrorisme."
        },
        {
            question: "À partir de quel montant une opération en espèces doit-elle faire l'objet d'une vigilance renforcée ?",
            options: [
                "1 000 €",
                "5 000 €",
                "10 000 €",
                "15 000 €"
            ],
            correctAnswer: 2,
            explanation: "Les transactions en espèces de 10 000 € ou plus nécessitent une vigilance renforcée."
        },
        {
            question: "Qu'est-ce qu'une déclaration de soupçon ?",
            options: [
                "Un signalement à TRACFIN",
                "Une déclaration fiscale",
                "Un rapport interne",
                "Une alerte client"
            ],
            correctAnswer: 0,
            explanation: "La déclaration de soupçon est un signalement obligatoire effectué auprès de TRACFIN."
        },
        {
            question: "Quelle institution française est chargée de la lutte anti-blanchiment ?",
            options: [
                "La Banque de France",
                "TRACFIN",
                "L'ACPR", 
                "La CNIL"
            ],
            correctAnswer: 1,
            explanation: "TRACFIN (Traitement du renseignement et action contre les circuits financiers clandestins) est l'organisme en charge."
        },
        {
            question: "Combien de temps doivent être conservés les documents relatifs à la connaissance client ?",
            options: [
                "3 ans",
                "5 ans",
                "7 ans",
                "10 ans"
            ],
            correctAnswer: 1,
            explanation: "Les documents de connaissance client doivent être conservés pendant 5 ans après la fin de la relation d'affaires."
        }
    ],
    3: [ // Éthique
        {
            question: "Qu'est-ce que la déontologie professionnelle ?",
            options: [
                "Un ensemble de règles juridiques",
                "Un code de conduite professionnelle",
                "Une loi européenne",
                "Un règlement interne"
            ],
            correctAnswer: 1,
            explanation: "La déontologie est un ensemble de règles et de devoirs qui régissent une profession."
        },
        {
            question: "Face à un conflit d'intérêt, quelle est la meilleure attitude ?",
            options: [
                "L'ignorer si le client ne le voit pas",
                "Le déclarer et s'abstenir",
                "Continuer en toute transparence",
                "Demander au client son avis"
            ],
            correctAnswer: 1,
            explanation: "Il faut déclarer le conflit d'intérêt à sa hiérarchie et s'abstenir d'intervenir dans la décision."
        },
        {
            question: "Qu'est-ce que le secret professionnel ?",
            options: [
                "Une obligation de discrétion",
                "Un droit du professionnel",
                "Une recommandation",
                "Un choix personnel"
            ],
            correctAnswer: 0,
            explanation: "Le secret professionnel est une obligation légale de ne pas divulguer les informations confidentielles."
        },
        {
            question: "Dans quel cas peut-on accepter un cadeau d'un client ?",
            options: [
                "Jamais",
                "Si c'est un usage courant et de faible valeur",
                "Si le client insiste",
                "À tout moment"
            ],
            correctAnswer: 1,
            explanation: "Les cadeaux de faible valeur conformes aux usages peuvent être acceptés, mais doivent être déclarés."
        },
        {
            question: "Que faire en cas de violation éthique constatée ?",
            options: [
                "Ne rien dire pour ne pas créer de problèmes",
                "En parler entre collègues",
                "Alerter immédiatement sa hiérarchie",
                "Attendre de voir si cela se reproduit"
            ],
            correctAnswer: 2,
            explanation: "Toute violation éthique doit être immédiatement signalée à la hiérarchie ou au référent éthique."
        }
    ],
    4: [ // Sécurité SI
        {
            question: "Qu'est-ce qu'un mot de passe fort ?",
            options: [
                "Un mot de passe facile à retenir",
                "Une combinaison de lettres, chiffres et symboles",
                "Son prénom + date de naissance",
                "Le nom de l'entreprise"
            ],
            correctAnswer: 1,
            explanation: "Un mot de passe fort combine majuscules, minuscules, chiffres et caractères spéciaux."
        },
        {
            question: "Qu'est-ce que le phishing ?",
            options: [
                "Un virus informatique",
                "Une technique d'hameçonnage par email",
                "Un logiciel de sécurité",
                "Un type de cryptage"
            ],
            correctAnswer: 1,
            explanation: "Le phishing est une technique frauduleuse visant à obtenir des informations confidentielles."
        },
        {
            question: "Que faire en cas de réception d'un email suspect ?",
            options: [
                "Cliquer pour vérifier",
                "Répondre pour confirmer",
                "Le signaler au service IT et le supprimer",
                "Le transférer aux collègues"
            ],
            correctAnswer: 2,
            explanation: "Un email suspect doit être signalé au service informatique puis supprimé sans interaction."
        },
        {
            question: "Quelle est la fréquence recommandée pour changer son mot de passe ?",
            options: [
                "Tous les mois",
                "Tous les 3 mois",
                "Tous les 6 mois",
                "Jamais si le mot de passe est fort"
            ],
            correctAnswer: 1,
            explanation: "Il est recommandé de changer son mot de passe tous les 3 mois minimum."
        },
        {
            question: "Qu'est-ce qu'un VPN ?",
            options: [
                "Un virus",
                "Un réseau privé virtuel",
                "Un pare-feu",
                "Un antivirus"
            ],
            correctAnswer: 1,
            explanation: "Un VPN (Virtual Private Network) est un réseau privé virtuel sécurisant les connexions."
        }
    ],
    5: [ // DDA
        {
            question: "Que signifie DDA ?",
            options: [
                "Directive sur la Distribution d'Assurances",
                "Droit Des Assurances",
                "Déclaration de Distribution Annuelle",
                "Directive de Déclaration Administrative"
            ],
            correctAnswer: 0,
            explanation: "DDA signifie Directive sur la Distribution d'Assurances (IDD en anglais)."
        },
        {
            question: "Quel est l'objectif principal de la DDA ?",
            options: [
                "Augmenter les ventes d'assurances",
                "Protéger les consommateurs",
                "Simplifier les procédures",
                "Réduire les coûts"
            ],
            correctAnswer: 1,
            explanation: "La DDA vise principalement à renforcer la protection des consommateurs d'assurances."
        },
        {
            question: "Quelle formation minimale est requise selon la DDA ?",
            options: [
                "15 heures par an",
                "20 heures par an",
                "10 heures par an",
                "Aucune obligation"
            ],
            correctAnswer: 0,
            explanation: "La DDA impose une formation continue d'au moins 15 heures par an."
        },
        {
            question: "Qu'est-ce que le devoir de conseil selon la DDA ?",
            options: [
                "Conseiller le produit le plus cher",
                "Recommander un produit adapté aux besoins du client",
                "Vendre rapidement",
                "Proposer tous les produits disponibles"
            ],
            correctAnswer: 1,
            explanation: "Le devoir de conseil impose de recommander un produit adapté aux besoins et à la situation du client."
        },
        {
            question: "Depuis quand la DDA est-elle applicable ?",
            options: [
                "2016",
                "2017",
                "2018",
                "2019"
            ],
            correctAnswer: 2,
            explanation: "La DDA est applicable depuis le 1er octobre 2018 dans l'Union Européenne."
        }
    ],
    6: [ // Conflits d'intérêts
        {
            question: "Qu'est-ce qu'un conflit d'intérêt ?",
            options: [
                "Un désaccord entre collègues",
                "Une situation où l'intérêt personnel interfère avec l'intérêt professionnel",
                "Un problème juridique",
                "Une divergence d'opinion"
            ],
            correctAnswer: 1,
            explanation: "Un conflit d'intérêt survient quand un intérêt personnel peut influencer une décision professionnelle."
        },
        {
            question: "Comment prévenir les conflits d'intérêts ?",
            options: [
                "Les ignorer",
                "Les déclarer systématiquement",
                "Les gérer discrètement",
                "Demander au client"
            ],
            correctAnswer: 1,
            explanation: "La déclaration systématique et proactive est la meilleure prévention."
        },
        {
            question: "Peut-on vendre un produit d'assurance à un membre de sa famille ?",
            options: [
                "Oui, sans restriction",
                "Non, jamais",
                "Oui, mais après déclaration du conflit d'intérêt potentiel",
                "Uniquement avec une réduction"
            ],
            correctAnswer: 2,
            explanation: "C'est possible mais le conflit d'intérêt potentiel doit être déclaré à la hiérarchie."
        },
        {
            question: "Qu'est-ce qu'un conflit d'intérêt apparent ?",
            options: [
                "Un conflit réel",
                "Une situation qui pourrait être perçue comme un conflit",
                "Un conflit imaginaire",
                "Un conflit sans importance"
            ],
            correctAnswer: 1,
            explanation: "Un conflit apparent est une situation qui pourrait être raisonnablement perçue comme un conflit, même si ce n'est pas le cas."
        },
        {
            question: "Qui doit gérer les déclarations de conflits d'intérêts ?",
            options: [
                "Le collaborateur lui-même",
                "Les RH et la hiérarchie",
                "Les clients",
                "Personne"
            ],
            correctAnswer: 1,
            explanation: "Les déclarations doivent être faites auprès des RH et de la hiérarchie qui les examineront."
        }
    ]
};

// Create and manage quiz instances
const activeQuizzes = new Map();

function startQuiz(moduleId) {
    const questions = quizQuestions[moduleId];
    if (!questions) {
        console.error(`No quiz found for module ${moduleId}`);
        return null;
    }

    const quiz = new Quiz(moduleId, questions);
    activeQuizzes.set(moduleId, quiz);
    return quiz;
}

function getActiveQuiz(moduleId) {
    return activeQuizzes.get(moduleId);
}

function endQuiz(moduleId) {
    const quiz = activeQuizzes.get(moduleId);
    if (quiz) {
        const results = quiz.getResults();
        activeQuizzes.delete(moduleId);
        return results;
    }
    return null;
}

// Quiz UI rendering functions
function renderQuizQuestion(quiz) {
    const question = quiz.getCurrentQuestion();
    const progress = quiz.getProgress();
    
    return `
        <div class="quiz-container">
            <div class="quiz-header">
                <div class="quiz-progress-info">
                    <span>Question ${quiz.currentQuestion + 1} sur ${quiz.questions.length}</span>
                    <span>${Math.round(progress)}% complété</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
            
            <div class="quiz-question-card">
                <h3 class="quiz-question">${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" data-answer="${index}">
                            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                            <span class="option-text">${option}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quiz-navigation">
                <button class="btn btn-secondary" id="prevQuestionBtn" ${quiz.currentQuestion === 0 ? 'disabled' : ''}>
                    ← Précédent
                </button>
                <button class="btn btn-secondary" id="skipQuestionBtn">
                    Passer
                </button>
            </div>
        </div>
    `;
}

function renderQuizResults(results, module) {
    const passed = results.score >= 70;
    const minutes = Math.floor(results.timeSpent / 60);
    const seconds = results.timeSpent % 60;
    
    return `
        <div class="quiz-results">
            <div class="results-header ${passed ? 'success' : 'failure'}">
                <div class="results-icon">
                    ${passed ? '🎉' : '📚'}
                </div>
                <h2>${passed ? 'Félicitations !' : 'Continuez vos efforts'}</h2>
                <p>${passed ? 'Vous avez réussi le quiz !' : 'Vous devez obtenir au moins 70% pour valider.'}</p>
            </div>
            
            <div class="results-stats">
                <div class="result-stat">
                    <div class="stat-value">${Math.round(results.score)}%</div>
                    <div class="stat-label">Score final</div>
                </div>
                <div class="result-stat">
                    <div class="stat-value">${results.correctAnswers}/${results.totalQuestions}</div>
                    <div class="stat-label">Réponses correctes</div>
                </div>
                <div class="result-stat">
                    <div class="stat-value">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                    <div class="stat-label">Temps passé</div>
                </div>
            </div>
            
            <div class="results-actions">
                ${passed ? `
                    <button class="btn btn-primary" onclick="downloadCertificateAfterQuiz(${module.id}, ${Math.round(results.score)})">
                        📄 Télécharger le certificat
                    </button>
                    <button class="btn btn-secondary" onclick="closeQuizModal()">
                        Retour au catalogue
                    </button>
                ` : `
                    <button class="btn btn-primary" onclick="retryQuiz(${module.id})">
                        🔄 Réessayer
                    </button>
                    <button class="btn btn-secondary" onclick="reviewQuiz(${module.id})">
                        📖 Revoir le cours
                    </button>
                `}
            </div>
        </div>
    `;
}
