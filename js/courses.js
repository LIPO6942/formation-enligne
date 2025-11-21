// Contenu détaillé des cours de formation

const coursesContent = {
    1: { // RGPD - Protection des données personnelles
        id: 1,
        title: 'RGPD - Protection des données personnelles',
        subtitle: 'Maîtrisez les fondamentaux de la protection des données dans le secteur des assurances',
        instructor: 'Dr. Marie DUBOIS',
        instructorTitle: 'Experte en Protection des Données',
        instructorImage: '👩‍🏫',
        duration: '45 min',
        lessons: 8,
        level: 'Débutant',
        rating: 4.8,
        students: 1247,
        lastUpdated: '15 novembre 2025',

        objectives: [
            'Comprendre les principes fondamentaux du RGPD',
            'Identifier les données personnelles dans le contexte assurantiel',
            'Appliquer les règles de consentement et de traitement des données',
            'Gérer les droits des personnes concernées (accès, rectification, oubli)',
            'Mettre en place les mesures de sécurité appropriées',
            'Réagir en cas de violation de données'
        ],

        prerequisites: [
            'Connaissance de base du secteur des assurances',
            'Aucune connaissance juridique préalable requise'
        ],

        chapters: [
            {
                id: 1,
                title: 'Introduction au RGPD',
                duration: '8 min',
                type: 'video',
                sections: [
                    {
                        title: 'Qu\'est-ce que le RGPD ?',
                        content: `
                            <h3>Le Règlement Général sur la Protection des Données</h3>
                            <p>Le RGPD (Règlement Général sur la Protection des Données) est entré en vigueur le 25 mai 2018 dans toute l'Union Européenne. Il s'agit d'un texte réglementaire qui encadre le traitement des données personnelles sur le territoire européen.</p>
                            
                            <div class="highlight-box info">
                                <h4>📌 À retenir</h4>
                                <p>Le RGPD s'applique à toutes les organisations qui traitent des données personnelles de résidents européens, qu'elles soient basées dans l'UE ou non.</p>
                            </div>
                            
                            <h4>Pourquoi le RGPD ?</h4>
                            <ul>
                                <li><strong>Protection renforcée :</strong> Donner aux citoyens plus de contrôle sur leurs données personnelles</li>
                                <li><strong>Harmonisation :</strong> Unifier les règles de protection des données dans l'UE</li>
                                <li><strong>Transparence :</strong> Obliger les entreprises à être claires sur l'utilisation des données</li>
                                <li><strong>Responsabilisation :</strong> Rendre les organisations responsables de la sécurité des données</li>
                            </ul>
                        `,
                        videoUrl: 'https://www.youtube.com/embed/example-rgpd-intro',
                        completed: false
                    },
                    {
                        title: 'Champ d\'application',
                        content: `
                            <h3>À qui s'applique le RGPD ?</h3>
                            <p>Le RGPD s'applique à deux catégories d'acteurs :</p>
                            
                            <div class="two-columns">
                                <div class="card-content">
                                    <h4>🏢 Responsables de traitement</h4>
                                    <p>Organisations qui déterminent les finalités et moyens du traitement des données personnelles.</p>
                                    <p><strong>Exemple :</strong> Une compagnie d'assurance qui collecte les données de ses clients.</p>
                                </div>
                                <div class="card-content">
                                    <h4>🤝 Sous-traitants</h4>
                                    <p>Organisations qui traitent des données pour le compte d'un responsable de traitement.</p>
                                    <p><strong>Exemple :</strong> Un prestataire qui gère le système informatique de la compagnie.</p>
                                </div>
                            </div>
                            
                            <div class="highlight-box warning">
                                <h4>⚠️ Attention</h4>
                                <p>Dans le secteur des assurances, vous êtes souvent responsable de traitement ET sous-traitant pour différentes activités.</p>
                            </div>
                        `,
                        completed: false
                    }
                ]
            },
            {
                id: 2,
                title: 'Les données personnelles',
                duration: '6 min',
                type: 'text',
                sections: [
                    {
                        title: 'Définition des données personnelles',
                        content: `
                            <h3>Qu'est-ce qu'une donnée personnelle ?</h3>
                            <p>Une donnée personnelle est <strong>toute information se rapportant à une personne physique identifiée ou identifiable</strong>.</p>
                            
                            <div class="examples-grid">
                                <div class="example-card direct">
                                    <h4>🎯 Données directement identifiantes</h4>
                                    <ul>
                                        <li>Nom et prénom</li>
                                        <li>Adresse postale</li>
                                        <li>Adresse email</li>
                                        <li>Numéro de téléphone</li>
                                        <li>Numéro de sécurité sociale</li>
                                        <li>Numéro de permis de conduire</li>
                                        <li>Photos et vidéos</li>
                                    </ul>
                                </div>
                                <div class="example-card indirect">
                                    <h4>🔍 Données indirectement identifiantes</h4>
                                    <ul>
                                        <li>Numéro de client</li>
                                        <li>Adresse IP</li>
                                        <li>Identifiant de connexion</li>
                                        <li>Données de localisation</li>
                                        <li>Empreinte digitale</li>
                                        <li>Plaques d'immatriculation</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h4>Données sensibles</h4>
                            <p>Certaines données sont dites "sensibles" et bénéficient d'une protection renforcée :</p>
                            <div class="sensitive-data-list">
                                <span class="tag">🏥 Santé</span>
                                <span class="tag">🙏 Religion</span>
                                <span class="tag">🏛️ Opinions politiques</span>
                                <span class="tag">🏳️‍🌈 Orientation sexuelle</span>
                                <span class="tag">🧬 Données génétiques</span>
                                <span class="tag">👤 Origine raciale</span>
                                <span class="tag">⚖️ Condamnations pénales</span>
                            </div>
                            
                            <div class="highlight-box danger">
                                <h4>❌ Principe d'interdiction</h4>
                                <p>Le traitement des données sensibles est <strong>en principe interdit</strong>, sauf exceptions prévues par le RGPD (consentement explicite, intérêt public, etc.).</p>
                            </div>
                        `,
                        completed: false
                    },
                    {
                        title: 'Données dans le secteur assurantiel',
                        content: `
                            <h3>Spécificités du secteur des assurances</h3>
                            <p>Dans le domaine des assurances, vous manipulez quotidiennement des données personnelles variées :</p>
                            
                            <div class="insurance-data-types">
                                <div class="data-category">
                                    <h4>📋 Données d'identification</h4>
                                    <ul>
                                        <li>État civil (nom, prénom, date de naissance)</li>
                                        <li>Coordonnées (adresse, téléphone, email)</li>
                                        <li>Pièces d'identité</li>
                                        <li>Situation familiale</li>
                                    </ul>
                                </div>
                                
                                <div class="data-category">
                                    <h4>💰 Données économiques et financières</h4>
                                    <ul>
                                        <li>Revenus et patrimoine</li>
                                        <li>Profession et situation professionnelle</li>
                                        <li>RIB et moyens de paiement</li>
                                        <li>Historique de paiement</li>
                                    </ul>
                                </div>
                                
                                <div class="data-category">
                                    <h4>🏥 Données de santé (attention !)</h4>
                                    <ul>
                                        <li>Questionnaires médicaux</li>
                                        <li>Antécédents médicaux</li>
                                        <li>Traitements en cours</li>
                                        <li>Résultats d'examens</li>
                                    </ul>
                                    <p class="warning-text">⚠️ Données sensibles - Protection maximale</p>
                                </div>
                                
                                <div class="data-category">
                                    <h4>🚗 Données de sinistralité</h4>
                                    <ul>
                                        <li>Historique des sinistres</li>
                                        <li>Circonstances des accidents</li>
                                        <li>Montants des indemnisations</li>
                                        <li>Taux de bonus-malus</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="highlight-box success">
                                <h4>✅ Bonne pratique</h4>
                                <p>Tenez un <strong>registre des traitements</strong> listant toutes les données personnelles que vous collectez et leur finalité.</p>
                            </div>
                        `,
                        quiz: {
                            question: 'Parmi ces données, laquelle EST une donnée personnelle ?',
                            options: [
                                'Le numéro de TVA d\'une entreprise',
                                'L\'adresse email d\'un prospect',
                                'Le chiffre d\'affaires global d\'une société',
                                'Le nombre d\'employés d\'une organisation'
                            ],
                            correctAnswer: 1,
                            explanation: 'L\'adresse email d\'un prospect est une donnée personnelle car elle permet d\'identifier une personne physique. Les autres données concernent des personnes morales (entreprises).'
                        },
                        completed: false
                    }
                ]
            },
            {
                id: 3,
                title: 'Les 6 principes fondamentaux',
                duration: '10 min',
                type: 'text',
                sections: [
                    {
                        title: 'Principes clés du RGPD',
                        content: `
                            <h3>Les 6 piliers de la protection des données</h3>
                            <p>Le RGPD repose sur 6 principes fondamentaux que toute organisation doit respecter :</p>
                            
                            <div class="principles-list">
                                <div class="principle-card">
                                    <div class="principle-number">1</div>
                                    <div class="principle-content">
                                        <h4>🎯 Licéité, loyauté et transparence</h4>
                                        <p><strong>Licéité :</strong> Avoir une base légale pour traiter les données (consentement, contrat, obligation légale, etc.)</p>
                                        <p><strong>Loyauté :</strong> Ne pas tromper les personnes sur l'utilisation de leurs données</p>
                                        <p><strong>Transparence :</strong> Informer clairement les personnes de ce que vous faites de leurs données</p>
                                        <div class="example">
                                            <strong>Exemple :</strong> Informer le client que ses données médicales serviront uniquement à évaluer le risque assurantiel.
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="principle-card">
                                    <div class="principle-number">2</div>
                                    <div class="principle-content">
                                        <h4>🎪 Limitation des finalités</h4>
                                        <p>Les données doivent être collectées pour des finalités <strong>déterminées, explicites et légitimes</strong>.</p>
                                        <p>❌ Vous ne pouvez pas utiliser les données pour un objectif différent de celui annoncé.</p>
                                        <div class="example">
                                            <strong>Exemple :</strong> Des données collectées pour gérer un contrat d'assurance auto ne peuvent pas être utilisées pour du démarchage commercial sans consentement.
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="principle-card">
                                    <div class="principle-number">3</div>
                                    <div class="principle-content">
                                        <h4>📊 Minimisation des données</h4>
                                        <p>Ne collectez que les données <strong>adéquates, pertinentes et limitées</strong> à ce qui est nécessaire.</p>
                                        <p>Principe : <em>"Pas plus que nécessaire, pas moins qu'indispensable"</em></p>
                                        <div class="example">
                                            <strong>Exemple :</strong> Pour une assurance habitation, pas besoin de connaître l'état de santé du client.
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="principle-card">
                                    <div class="principle-number">4</div>
                                    <div class="principle-content">
                                        <h4>✅ Exactitude</h4>
                                        <p>Les données doivent être <strong>exactes et mises à jour</strong>.</p>
                                        <p>Obligation de permettre la rectification des données inexactes.</p>
                                        <div class="example">
                                            <strong>Exemple :</strong> Mettre en place un espace client permettant de corriger ses coordonnées.
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="principle-card">
                                    <div class="principle-number">5</div>
                                    <div class="principle-content">
                                        <h4>⏳ Limitation de la conservation</h4>
                                        <p>Les données ne doivent être conservées que <strong>le temps nécessaire</strong> aux finalités du traitement.</p>
                                        <p>Obligation de définir des durées de conservation et de purger régulièrement.</p>
                                        <div class="example">
                                            <strong>Exemple :</strong> Données d'un prospect: 3 ans / Client actif: durée du contrat + obligations légales / Ancien client: 5 à 10 ans selon type de contrat.
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="principle-card">
                                    <div class="principle-number">6</div>
                                    <div class="principle-content">
                                        <h4>🔒 Intégrité et confidentialité</h4>
                                        <p>Garantir une <strong>sécurité appropriée</strong> des données personnelles.</p>
                                        <p>Protection contre le traitement non autorisé, la perte, la destruction ou les dégâts d'origine accidentelle.</p>
                                        <div class="example">
                                            <strong>Mesures :</strong> Chiffrement, contrôle d'accès, sauvegarde, formation du personnel, gestion des habilitations.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="highlight-box success">
                                <h4>✨ Accountability (Responsabilité)</h4>
                                <p>En plus de ces 6 principes, le RGPD impose un principe de <strong>responsabilité</strong> : vous devez être en mesure de <strong>démontrer</strong> que vous respectez tous ces principes (documentation, registres, audits...).</p>
                            </div>
                        `,
                        completed: false
                    }
                ]
            },
            {
                id: 4,
                title: 'Droits des personnes',
                duration: '8 min',
                type: 'interactive',
                sections: [
                    {
                        title: 'Les droits des assurés',
                        content: `
                            <h3>Les 8 droits garantis par le RGPD</h3>
                            <p>Le RGPD donne aux personnes concernées plusieurs droits qu'elles peuvent exercer à tout moment :</p>
                            
                            <div class="rights-grid">
                                <div class="right-card">
                                    <div class="right-icon">ℹ️</div>
                                    <h4>Droit à l'information</h4>
                                    <p>Être informé de manière claire et transparente sur le traitement de ses données.</p>
                                    <p class="deadline">📅 <strong>Au moment de la collecte</strong></p>
                                </div>
                                
                                <div class="right-card">
                                    <div class="right-icon">👁️</div>
                                    <h4>Droit d'accès</h4>
                                    <p>Obtenir une copie de ses données personnelles et des informations sur leur traitement.</p>
                                    <p class="deadline">📅 <strong>Réponse sous 1 mois</strong></p>
                                </div>
                                
                                <div class="right-card">
                                    <div class="right-icon">✏️</div>
                                    <h4>Droit de rectification</h4>
                                    <p>Faire corriger des données inexactes ou incomplètes.</p>
                                    <p class="deadline">📅 <strong>Réponse sous 1 mois</strong></p>
                                </div>
                                
                                <div class="right-card">
                                    <div class="right-icon">🗑️</div>
                                    <h4>Droit à l'effacement ("droit à l'oubli")</h4>
                                    <p>Demander la suppression de ses données dans certains cas.</p>
                                    <p class="deadline">📅 <strong>Réponse sous 1 mois</strong></p>
                                    <p class="note">⚠️ Ne s'applique pas si obligation légale de conservation</p>
                                </div>
                                
                                <div class="right-card">
                                    <div class="right-icon">⏸️</div>
                                    <h4>Droit à la limitation</h4>
                                    <p>Demander le gel temporaire du traitement de ses données.</p>
                                    <p class="deadline">📅 <strong>Réponse sous 1 mois</strong></p>
                                </div>
                                
                                <div class="right-card">
                                    <div class="right-icon">📦</div>
                                    <h4>Droit à la portabilité</h4>
                                    <p>Récupérer ses données dans un format structuré et lisible par machine.</p>
                                    <p class="deadline">📅 <strong>Réponse sous 1 mois</strong></p>
                                </div>
                                
                                <div class="right-card">
                                    <div class="right-icon">🚫</div>
                                    <h4>Droit d'opposition</h4>
                                    <p>S'opposer au traitement de ses données pour des raisons tenant à sa situation particulière.</p>
                                    <p class="deadline">📅 <strong>Réponse immédiate si prospection</strong></p>
                                </div>
                                
                                <div class="right-card">
                                    <div class="right-icon">🤖</div>
                                    <h4>Droit de ne pas faire l'objet d'une décision automatisée</h4>
                                    <p>Ne pas être soumis à une décision basée exclusivement sur un traitement automatisé produisant des effets juridiques.</p>
                                    <p class="note">ℹ️ Exceptions possibles</p>
                                </div>
                            </div>
                            
                            <div class="highlight-box warning">
                                <h4>⚖️ Comment gérer les demandes</h4>
                                <ol>
                                    <li><strong>Vérifier l'identité</strong> du demandeur</li>
                                    <li><strong>Accusé de réception</strong> sous 48h</li>
                                    <li><strong>Analyser</strong> la demande et sa recevabilité</li>
                                    <li><strong>Répondre</strong> sous 1 mois (prorogeable 2 mois si complexe)</li>
                                    <li><strong>Tracer</strong> toutes les demandes dans un registre</li>
                                </ol>
                            </div>
                        `,
                        completed: false
                    }
                ]
            },
            {
                id: 5,
                title: 'Sécurité et violation de données',
                duration: '7 min',
                type: 'text',
                sections: [
                    {
                        title: 'Mesures de sécurité',
                        content: `
                            <h3>Garantir la sécurité des données</h3>
                            <p>En tant que responsable de traitement, vous devez mettre en œuvre des mesures techniques et organisationnelles appropriées.</p>
                            
                            <div class="security-measures">
                                <div class="measure-category">
                                    <h4>🔐 Mesures techniques</h4>
                                    <ul>
                                        <li>Chiffrement des données sensibles</li>
                                        <li>Pseudonymisation quand possible</li>
                                        <li>Contrôles d'accès et authentification forte</li>
                                        <li>Pare-feu et antivirus à jour</li>
                                        <li>Sauvegardes régulières et testées</li>
                                        <li>Mises à jour de sécurité</li>
                                        <li>Journalisation des accès</li>
                                    </ul>
                                </div>
                                
                                <div class="measure-category">
                                    <h4>👥 Mesures organisationnelles</h4>
                                    <ul>
                                        <li>Politique de sécurité formalisée</li>
                                        <li>Formation et sensibilisation du personnel</li>
                                        <li>Gestion des habilitations</li>
                                        <li>Clauses de confidentialité dans les contrats</li>
                                        <li>Procédures de gestion des incidents</li>
                                        <li>Audits réguliers</li>
                                        <li>Clean desk policy</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h3 class="mt-4">Violations de données (Data breach)</h3>
                            <p>Une violation de données est une <strong>atteinte à la sécurité</strong> entraînant la destruction, la perte, l'altération, la divulgation non autorisée ou l'accès non autorisé à des données.</p>
                            
                            <div class="breach-types">
                                <div class="breach-type">
                                    <h5>🔓 Violation de confidentialité</h5>
                                    <p>Accès ou divulgation non autorisés</p>
                                    <span class="example-tag">Ex: Email envoyé aux mauvais destinataires</span>
                                </div>
                                <div class="breach-type">
                                    <h5>📝 Violation d'intégrité</h5>
                                    <p>Modification non autorisée</p>
                                    <span class="example-tag">Ex: Données modifiées par un pirate</span>
                                </div>
                                <div class="breach-type">
                                    <h5>💾 Violation de disponibilité</h5>
                                    <p>Perte ou destruction</p>
                                    <span class="example-tag">Ex: Disque dur défectueux sans sauvegarde</span>
                                </div>
                            </div>
                            
                            <div class="highlight-box danger">
                                <h4>⏱️ En cas de violation : AGIR VITE !</h4>
                                <div class="breach-procedure">
                                    <div class="step">
                                        <span class="step-number">1</span>
                                        <div>
                                            <h5>Immédiat</h5>
                                            <p>Contenir l'incident et réduire les impacts</p>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <span class="step-number">2</span>
                                        <div>
                                            <h5>Sous 72h</h5>
                                            <p>Notifier la CNIL si risque pour les droits et libertés</p>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <span class="step-number">3</span>
                                        <div>
                                            <h5>Dans les meilleurs délais</h5>
                                            <p>Informer les personnes concernées si risque élevé</p>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <span class="step-number">4</span>
                                        <div>
                                            <h5>Toujours</h5>
                                            <p>Documenter la violation dans un registre</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `,
                        completed: false
                    }
                ]
            },
            {
                id: 6,
                title: 'Consentement et bases légales',
                duration: '4 min',
                type: 'text',
                sections: [
                    {
                        title: 'Les bases légales du traitement',
                        content: `
                            <h3>6 bases légales possibles</h3>
                            <p>Pour traiter des données personnelles légalement, vous devez vous appuyer sur l'une de ces 6 bases :</p>
                            
                            <div class="legal-bases">
                                <div class="legal-base priority-high">
                                    <div class="base-header">
                                        <span class="base-icon">✋</span>
                                        <h4>1. Consentement</h4>
                                    </div>
                                    <p>La personne a consenti au traitement.</p>
                                    <div class="conditions">
                                        <strong>Conditions:</strong>
                                        <ul>
                                            <li>Libre (sans contrainte)</li>
                                            <li>Spécifique (par finalité)</li>
                                            <li>Éclairé (information claire)</li>
                                            <li>Univoque (action positive)</li>
                                            <li>Révocable à tout moment</li>
                                        </ul>
                                    </div>
                                    <span class="use-case">💡 Usage: Newsletters, cookies non essentiels</span>
                                </div>
                                
                                <div class="legal-base priority-high">
                                    <div class="base-header">
                                        <span class="base-icon">📄</span>
                                        <h4>2. Contrat</h4>
                                    </div>
                                    <p>Le traitement est nécessaire à l'exécution d'un contrat.</p>
                                    <span class="use-case">💡 Usage: Souscription d'assurance, gestion de contrat</span>
                                </div>
                                
                                <div class="legal-base">
                                    <div class="base-header">
                                        <span class="base-icon">⚖️</span>
                                        <h4>3. Obligation légale</h4>
                                    </div>
                                    <p>Le traitement est imposé par un texte de loi.</p>
                                    <span class="use-case">💡 Usage: LCB-FT, déclarations fiscales, archive légale</span>
                                </div>
                                
                                <div class="legal-base">
                                    <div class="base-header">
                                        <span class="base-icon">❤️</span>
                                        <h4>4. Sauvegarde des intérêts vitaux</h4>
                                    </div>
                                    <p>Pour protéger la vie d'une personne.</p>
                                    <span class="use-case">💡 Usage: Urgences médicales</span>
                                </div>
                                
                                <div class="legal-base">
                                    <div class="base-header">
                                        <span class="base-icon">🏛️</span>
                                        <h4>5. Mission d'intérêt public</h4>
                                    </div>
                                    <p>Exécution d'une mission de service public.</p>
                                    <span class="use-case">💡 Usage: Organismes publics</span>
                                </div>
                                
                                <div class="legal-base priority-medium">
                                    <div class="base-header">
                                        <span class="base-icon">⚖️</span>
                                        <h4>6. Intérêt légitime</h4>
                                    </div>
                                    <p>Le traitement est nécessaire aux intérêts légitimes poursuivis, sans porter atteinte aux droits des personnes.</p>
                                    <div class="conditions">
                                        <strong>Test en 3 étapes:</strong>
                                        <ol>
                                            <li>L'intérêt est-il légitime ?</li>
                                            <li>Le traitement est-il nécessaire ?</li>
                                            <li>Mise en balance avec les droits des personnes</li>
                                        </ol>
                                    </div>
                                    <span class="use-case">💡 Usage: Prévention de la fraude, sécurité des SI</span>
                                </div>
                            </div>
                            
                            <div class="highlight-box info">
                                <h4>🎯 Dans le secteur assurantiel</h4>
                                <p><strong>Principales bases utilisées:</strong></p>
                                <ul>
                                    <li><strong>Contrat:</strong> Souscription, gestion du contrat, gestion des sinistres</li>
                                    <li><strong>Obligation légale:</strong> LCB-FT, conservation des documents</li>
                                    <li><strong>Intérêt légitime:</strong> Lutte anti-fraude, recouvrement</li>
                                    <li><strong>Consentement:</strong> Marketing, cookies, données sensibles (santé)</li>
                                </ul>
                            </div>
                        `,
                        completed: false
                    }
                ]
            },
            {
                id: 7,
                title: 'Responsabilités et sanctions',
                duration: '3 min',
                type: 'text',
                sections: [
                    {
                        title: 'Sanctions et amendes',
                        content: `
                            <h3>Régime de sanctions du RGPD</h3>
                            <p>Le non-respect du RGPD expose l'organisation à des sanctions administratives et pénales.</p>
                            
                            <div class="sanctions-grid">
                                <div class="sanction-tier tier-1">
                                    <h4>📊 Niveau 1</h4>
                                    <div class="amount">10 millions €</div>
                                    <div class="percent">ou 2% du CA mondial</div>
                                    <p class="infraction-type">Le montant le plus élevé</p>
                                    <div class="infractions">
                                        <strong>Pour infractions à:</strong>
                                        <ul>
                                            <li>Obligations du sous-traitant</li>
                                            <li>Certification</li>
                                            <li>Organisme de contrôle</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="sanction-tier tier-2">
                                    <h4>⚠️ Niveau 2</h4>
                                    <div class="amount">20 millions €</div>
                                    <div class="percent">ou 4% du CA mondial</div>
                                    <p class="infraction-type">Le montant le plus élevé</p>
                                    <div class="infractions">
                                        <strong>Pour infractions aux:</strong>
                                        <ul>
                                            <li>Principes de base du RGPD</li>
                                            <li>Droits des personnes</li>
                                            <li>Transferts internationaux</li>
                                            <li>Décisions automatisées</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="real-cases">
                                <h4>💰 Exemples de sanctions prononcées</h4>
                                <div class="case">
                                    <div class="case-company">Amazon (Luxembourg)</div>
                                    <div class="case-amount">746 M€</div>
                                    <div class="case-reason">Publicité ciblée sans consentement approprié</div>
                                </div>
                                <div class="case">
                                    <div class="case-company">Google (France)</div>
                                    <div class="case-amount">90 M€</div>
                                    <div class="case-reason">Cookies non conformes</div>
                                </div>
                                <div class="case">
                                    <div class="case-company">H&M (Allemagne)</div>
                                    <div class="case-amount">35,3 M€</div>
                                    <div class="case-reason">Surveillance excessive des employés</div>
                                </div>
                                <div class="case">
                                    <div class="case-company">Assureur français</div>
                                    <div class="case-amount">180 K€</div>
                                    <div class="case-reason">Conservation excessive, défaut de sécurité</div>
                                </div>
                            </div>
                            
                            <div class="highlight-box danger">
                                <h4>⚖️ Autres sanctions possibles</h4>
                                <ul>
                                    <li><strong>Avertissement</strong> ou rappel à l'ordre</li>
                                    <li><strong>Injonction</strong> de mise en conformité</li>
                                    <li><strong>Limitation ou interdiction temporaire</strong> du traitement</li>
                                    <li><strong>Suspension des flux de données</strong></li>
                                    <li><strong>Sanctions pénales</strong> (jusqu'à 5 ans de prison)</li>
                                    <li><strong>Dommages et intérêts</strong> aux personnes lésées</li>
                                    <li><strong>Préjudice d'image</strong> et perte de confiance</li>
                                </ul>
                            </div>
                            
                            <div class="highlight-box success">
                                <h4>✅ Facteurs atténuants</h4>
                                <p>La CNIL prend en compte:</p>
                                <ul>
                                    <li>La coopération avec l'autorité</li>
                                    <li>Les mesures prises pour atténuer le dommage</li>
                                    <li>La mise en place de procédures internes</li>
                                    <li>Le respect des codes de conduite</li>
                                    <li>L'existence d'un DPO</li>
                                </ul>
                            </div>
                        `,
                        completed: false
                    }
                ]
            },
            {
                id: 8,
                title: 'Quiz final et bonnes pratiques',
                duration: '5 min',
                type: 'quiz',
                sections: [
                    {
                        title: 'Synthèse et bonnes pratiques',
                        content: `
                            <h3>Les réflexes RGPD au quotidien</h3>
                            
                            <div class="best-practices">
                                <div class="practice-do">
                                    <h4>✅ À FAIRE</h4>
                                    <ul>
                                        <li>Tenir un registre des traitements à jour</li>
                                        <li>Informer clairement les personnes</li>
                                        <li>Ne collecter que les données nécessaires</li>
                                        <li>Chiffrer les données sensibles</li>
                                        <li>Définir des durées de conservation</li>
                                        <li>Former régulièrement les équipes</li>
                                        <li>Répondre aux demandes sous 1 mois</li>
                                        <li>Notifier les violations à la CNIL sous 72h</li>
                                        <li>Documenter tout ce que vous faites</li>
                                        <li>Auditer régulièrement vos pratiques</li>
                                    </ul>
                                </div>
                                
                                <div class="practice-dont">
                                    <h4>❌ À NE PAS FAIRE</h4>
                                    <ul>
                                        <li>Collecter des données "au cas où"</li>
                                        <li>Conserver indéfiniment les données</li>
                                        <li>Utiliser les données à d\'autres fins</li>
                                        <li>Partager les données sans base légale</li>
                                        <li>Ignorer les demandes des personnes</li>
                                        <li>Cacher une violation de données</li>
                                        <li>Traiter des données sensibles sans précaution</li>
                                        <li>Négliger la sécurité des données</li>
                                        <li>Penser que "ça n\'arrive qu\'aux autres"</li>
                                        <li>Considérer le RGPD comme une contrainte</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="highlight-box success">
                                <h4>🎯 Checklist de conformité</h4>
                                <div class="checklist">
                                    <label><input type="checkbox"> Registre des traitements tenu à jour</label>
                                    <label><input type="checkbox"> Mentions d\'information présentes partout</label>
                                    <label><input type="checkbox"> Procédure de gestion des demandes en place</label>
                                    <label><input type="checkbox"> Mesures de sécurité techniques et organisationnelles</label>
                                    <label><input type="checkbox"> Durées de conservation définies et appliquées</label>
                                    <label><input type="checkbox"> Formation du personnel réalisée</label>
                                    <label><input type="checkbox"> Procédure de gestion des violations établie</label>
                                    <label><input type="checkbox"> Clauses RGPD dans les contrats sous-traitants</label>
                                    <label><input type="checkbox"> Analyse d\'impact (PIA) si nécessaire</label>
                                    <label><input type="checkbox"> DPO désigné si requis</label>
                                </div>
                            </div>
                            
                            <div class="call-to-action">
                                <h3>🎓 Prêt pour le quiz final ?</h3>
                                <p>Testez vos connaissances avec notre quiz de 5 questions pour valider votre formation RGPD !</p>
                                <button class="btn-primary-large" onclick="startFinalQuiz()">Commencer le Quiz Final</button>
                            </div>
                        `,
                        completed: false
                    }
                ]
            }
        ],

        resources: [
            {
                type: 'pdf',
                title: 'Guide RGPD de la CNIL',
                description: 'Guide complet de la CNIL pour les entreprises',
                url: '#',
                size: '2.4 MB'
            },
            {
                type: 'link',
                title: 'Site officiel de la CNIL',
                description: 'Actualités et ressources RGPD',
                url: 'https://www.cnil.fr'
            },
            {
                type: 'template',
                title: 'Modèle de registre des traitements',
                description: 'Template Excel pour tenir votre registre',
                url: '#',
                size: '156 KB'
            },
            {
                type: 'video',
                title: 'Webinaire RGPD - Secteur Assurance',
                description: 'Replay du webinaire (45 min)',
                url: '#',
                duration: '45:32'
            }
        ],

        certificate: {
            available: true,
            requiredScore: 70,
            validity: '2 ans'
        }
    },

    // Autres modules à venir...
    2: {
        id: 2,
        title: 'Lutte anti-blanchiment (LCB-FT)',
        subtitle: 'Prévenir et détecter le blanchiment d\'argent et le financement du terrorisme',
        duration: '60 min',
        lessons: 12,
        level: 'Intermédiaire',
        // Contenu à développer...
    }
};

// Export pour utilisation dans l'application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = coursesContent;
}
