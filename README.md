# SAE 4-01 | Front

## 💼 Sujet
Gestion des stages et alternances d'une formation : Cette application sera utilisée par des étudiants et des administrateurs. Il s'agit de gérer pour chaque proposition de sujet de stage ou d'alternance, les informations nécessaires telles que le lieu, les technologies (tags) et l'entreprise. L'application doit par ailleurs gérer l'inscription des étudiants intéressés à un stage ou une alternance. Les étudiants peuvent consulter la liste des stages ou alternances compléte ou la liste de stages ou alternances sélectionnés. Les administrateurs peuvent consulter la liste des étudiants intéressés par un stage ou une alternance et ils gérent la liste des stages ou alternances pourvus.

## 👥 Auteurs
- 👤 Valentin CLADEL - <span style="color: purple">clad0006</span>
- 👤 Baptiste SIMON - <span style="color: purple">simo0170</span>
- 👤 Tom SIKORA - <span style="color: purple">siko0001</span>

## 📝 Notes
- Identifiant : `pc-client-sae4-01`
- Mot de passe : `pc-client`
- Adresse IP : `10.31.33.97`
- Site : http://10.31.33.97:8085/

## 🛠 Installation et Configuration
### *<span style="color: orange">1. Installation</span>*
Mettre à jour votre dépôt local :
- `git clone https://iut-info.univ-reims.fr/gitlab/clad0006/sae-4-01-api.git`
- `cd <dépôt_local>`
- `git pull`

Ensuite, dans le répertoire de votre projet, vous devez <span style="color: orange">installer les composants nécessaires</span> au fonctionnement du projet :
- `npm install`

Finalement, <span style="color: orange">reconfigurez votre accès à la base de données</span> en redéfinissant le fichier « .env.local » :
- `DATABASE_URL="mysql://clad0006:clad0006@mysql:3306/clad0006_sae3?serverVersion=mariadb-10.2.25&charset=utf8"`

### *<span style="color: green">2. Instructions de push</span>*
Lorsque vous avez terminé une tâche, <span style="color: green">resynchronisez votre dépôt distant</span> grâce aux commandes suivantes :
- `git branch <branche>`
- `git checkout <branche>`
- `git commit -m "message-commit"`
- `git push --set-upstream origin <branche>`

Ensuite, sur GitLab, <span style="color: green">créez un merge-request</span> sur votre branche et <span style="color: green">assignez un membre du projet</span> à la revue et à la validation.

### *<span style="color: red">3. Site et navigation</span>*
Pour lancer le site, assurez-vous d'être <span style="color: red">connecté au VPN</span>.
Ensuite, lancez le serveur de développement avec la commande suivante :
- `npm run dev`

Accédez à l'url du site : <span style="color: red">http://localhost:5173/</span>.
Tant que vous ne vous connectez pas, vous ne pourrez accéder qu'à la page d'accueil.
Si vous tentez de naviguer sur une autre page, vous serez automatiquement redirigé vers <span style="color: red">le formulaire de connexion</span>.

Depuis ce formulaire, vous pouvez vous connecter avec votre adresse email et votre mot de passe créés précédemment.
Vous pouvez également vous connecter avec le compte administrateur de test :
- Adresse Email : <span style="color: red">valentin.cladel@gmail.com</span>
- Mot de passe : <span style="color: red">test</span>

Vous pouvez créer un compte :
- Cliquez sur "S'inscrire" pour accéder à la page de création de compte.
- Remplissez les informations (Adresse Email, Mot de passe, Nom, Prénom, Numéro de téléphone, Date de naissance, un CV et une lettre de Motivation si nécessaire).
- Cliquez sur "Sauvegarder" pour valider la création du compte et l'enregistrer dans la base de données.
- Vous pouvez maintenant vous connecter.

Une fois connecté, vous avez accès au site et vous pouvez consulter :
- Les offres
- Les offres récentes
- Les détails d'une offre
- Les entreprises
- Les détails d'une entreprise
- Les offres d'une entreprise
- La page de profil
- La page de modification du profil
- La page de supression du profil
- La page d'inscription
- Le tableau de bord (si vous êtes administrateur)
- La page à propos de nous
- La page des conditions générales d'utilisation
- La page des mentions légales

Ces différentes pages sont accessibles via la barre de navigation ou le pied de page.
Pour accéder à la page d'accueil depuis une autre page, il suffit de cliquer sur le texte <span style="color: red">EduTech</span> ou le <span style="color: red">logo d'EduTech</span> dans la barre de navigation.

## 📐 Scripts
- `npm run dev` : Lance le serveur de développement Vite.
- `npm run build` : Génère une version de production de l'application à l'aide de Vite.
- `npm run lint` : Analyse le code JavaScript et JSX.
- `npm run review` : Prévisualise l'application avant de la déployer.
