# 🔐 COMPTES UTILISATEURS - GUIDE COMPLET

## 📋 **Tous les Comptes Disponibles**

Voici la liste complète de tous les comptes que vous pouvez utiliser pour vous connecter :

---

## 👤 **COMPTES APPRENANTS**

### 1️⃣ **Utilisateur Démo (Original)**
```
Email    : user@demo.com
Mot de passe : user123
Nom      : Utilisateur Démo
Service  : Ventes
Progression : 2 modules terminés, 2 en cours
```

### 2️⃣ **Jean Dupont** ⭐ (Recommandé)
```
Email    : apprenant@assurance.fr
Mot de passe : demo123
Nom      : Jean Dupont
Service  : Assurance Vie
Progression : 1 module terminé, 3 en cours
```

### 3️⃣ **Marie Martin**
```
Email    : marie.martin@assurance.fr
Mot de passe : demo123
Nom      : Marie Martin
Service  : Assurance IARD
Progression : 3 modules terminés, 1 en cours
```

### 4️⃣ **Pierre Dubois**
```
Email    : pierre.dubois@assurance.fr
Mot de passe : demo123
Nom      : Pierre Dubois
Service  : Gestion des Sinistres
Progression : 0 module terminé, 2 en cours
```

### 5️⃣ **Sophie Bernard**
```
Email    : sophie.bernard@assurance.fr
Mot de passe : demo123
Nom      : Sophie Bernard
Service  : Service Client
Progression : 4 modules terminés, 0 en cours
```

---

## 👨‍💼 **COMPTES ADMINISTRATEURS**

### 🔑 **Administrateur Démo (Original)**
```
Email    : admin@demo.com
Mot de passe : admin123
Nom      : Administrateur
Service  : IT
```

### 🔑 **Admin Assurance**
```
Email    : admin@assurance.fr
Mot de passe : admin123
Nom      : Admin Assurance
Service  : Direction Formation
```

---

## 🎯 **COMPTES RECOMMANDÉS POUR DÉMO**

### Pour tester en tant qu'Apprenant :
```
✅ Email    : apprenant@assurance.fr
✅ Mot de passe : demo123
```
**Pourquoi ?** Correspond à la documentation, facile à retenir

### Pour tester en tant qu'Admin :
```
✅ Email    : admin@assurance.fr
✅ Mot de passe : admin123
```
**Pourquoi ?** Cohérent avec l'email apprenant

---

## 🔐 **TOUS LES MOTS DE PASSE PAR TYPE**

### Mots de passe Apprenants :
- **demo123** (nouveaux comptes)
- **user123** (compte original)

### Mots de passe Administrateurs :
- **admin123** (tous les comptes admin)

---

## ✨ **Comment Se Connecter ?**

### Étape par étape :

1. **Ouvrez l'application**
   - Double-cliquez sur `LANCER_APPLICATION.bat`
   - OU ouvrez `index.html` dans votre navigateur
   - OU allez sur https://lipo6942.github.io/formation-enligne

2. **Sur la page de connexion** :
   - Entrez l'email (ex: `apprenant@assurance.fr`)
   - Entrez le mot de passe (ex: `demo123`)
   - Cliquez sur "Se connecter"

3. **Vous êtes connecté !** 🎉

---

## 🆕 **AJOUTER VOS PROPRES COMPTES**

Pour créer de nouveaux comptes utilisateurs :

### 📝 **Méthode Manuelle (Simple)**

1. Ouvrez le fichier : `js/data.js`

2. Cherchez la section `const usersData = [`

3. Ajoutez un nouveau compte en suivant ce modèle :

```javascript
{
    id: 6,  // Numéro unique (suivant)
    name: 'Votre Nom',
    email: 'votre.email@assurance.fr',
    password: 'votreMotDePasse',
    role: 'learner',  // OU 'admin' pour administrateur
    department: 'Votre Service',
    completedModules: 0,
    inProgressModules: 0
},
```

4. **Sauvegardez** le fichier

5. **Rechargez** la page (F5)

6. **Connectez-vous** avec vos nouveaux identifiants !

---

## 🎨 **Exemples de Nouveaux Comptes**

### Exemple 1 : Nouveau Apprenant
```javascript
{
    id: 6,
    name: 'Thomas Petit',
    email: 'thomas.petit@assurance.fr',
    password: 'demo123',
    role: 'learner',
    department: 'Commercial',
    completedModules: 0,
    inProgressModules: 0
},
```

### Exemple 2 : Manager avec Accès Admin
```javascript
{
    id: 12,
    name: 'Claire Directrice',
    email: 'claire.directrice@assurance.fr',
    password: 'admin123',
    role: 'admin',
    department: 'Direction Générale',
    completedModules: 0,
    inProgressModules: 0
},
```

---

## 🔒 **Sécurité - IMPORTANT**

⚠️ **POUR UNE VERSION DE PRODUCTION** :

1. **NE STOCKEZ JAMAIS** les mots de passe en clair
2. **Utilisez un vrai backend** avec base de données
3. **Hashage des mots de passe** (bcrypt, argon2)
4. **Authentification sécurisée** (JWT, sessions)
5. **HTTPS obligatoire**

📌 **Version actuelle** :
- C'est une **démo/prototype**
- Données stockées en **localStorage** (navigateur)
- Mots de passe en **clair** (non sécurisé)
- ✅ OK pour **démonstration**
- ❌ PAS OK pour **production réelle**

---

## 🎯 **Scénarios de Test**

### Scénario 1 : Nouvel Apprenant
1. Connectez-vous avec : `pierre.dubois@assurance.fr` / `demo123`
2. Explorez le tableau de bord
3. Démarrez un cours RGPD
4. Complétez des sections
5. Passez un quiz

### Scénario 2 : Apprenant Avancé
1. Connectez-vous avec : `sophie.bernard@assurance.fr` / `demo123`
2. Voyez les 4 modules terminés
3. Téléchargez vos certificats
4. Vérifiez votre niveau de gamification

### Scénario 3 : Administrateur
1. Connectez-vous avec : `admin@assurance.fr` / `admin123`
2. Consultez le tableau de bord admin
3. Voyez les statistiques globales
4. Gérez les utilisateurs
5. Exportez des rapports

---

## 📊 **Table Récapitulative**

| Nom | Email | Mot de passe | Rôle | Service |
|-----|-------|--------------|------|---------|
| Utilisateur Démo | user@demo.com | user123 | Apprenant | Ventes |
| Jean Dupont | apprenant@assurance.fr | demo123 | Apprenant | Assurance Vie |
| Marie Martin | marie.martin@assurance.fr | demo123 | Apprenant | Assurance IARD |
| Pierre Dubois | pierre.dubois@assurance.fr | demo123 | Apprenant | Sinistres |
| Sophie Bernard | sophie.bernard@assurance.fr | demo123 | Apprenant | Service Client |
| Administrateur | admin@demo.com | admin123 | Admin | IT |
| Admin Assurance | admin@assurance.fr | admin123 | Admin | Direction Formation |

---

## 🐛 **Problèmes de Connexion ?**

### ❌ **"Identifiants incorrects"**
- Vérifiez l'orthographe de l'email
- Vérifiez le mot de passe (sensible à la casse)
- Essayez de copier-coller depuis ce document

### ❌ **Page blanche après connexion**
- Ouvrez la console (F12)
- Vérifiez les erreurs JavaScript
- Actualisez la page (Ctrl + F5)

### ❌ **Le compte ne fonctionne pas**
- Vérifiez que le fichier `js/data.js` est bien sauvegardé
- Videz le cache du navigateur
- Testez en mode navigation privée

---

## 💡 **Astuce Pro**

**Créez un raccourci pour les identifiants fréquents :**

1. Utilisez un gestionnaire de mots de passe
2. Ou enregistrez ce document dans vos favoris
3. Ou créez un fichier `COMPTES.txt` pour référence rapide

---

## 📞 **Besoin d'Aide ?**

Si vous ne pouvez toujours pas vous connecter :

1. Essayez tous les comptes listés ci-dessus
2. Vérifiez que `js/data.js` contient bien les comptes
3. Ouvrez la console (F12) pour voir les erreurs
4. Demandez de l'aide !

---

**Bon tests ! 🚀**

Vous avez maintenant **7 comptes différents** pour tester toutes les fonctionnalités de la plateforme !
