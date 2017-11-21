# SeafileFirefoxOS
Le but de ce projet est de réaliser un client Seafile pour la plateforme FirefoxOS dans le cadre de notre cursus universitaire.

## Technologies

### Serveur

* [API Web Seafile](https://www.seafile.com/en/download/)

### Client

* [Angular 5](https://angular.io/)
* [Materialize CSS](http://materializecss.com/)


## Pré-requis

Vous devez au préalable installer les logiciels suivants :

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Mozilla firefox](https://www.mozilla.org/fr/firefox/new/)

## Installation

### API Web Seafile

* Télécharger l'API Web [Seafile](https://www.seafile.com/en/download/) selon votre système d'exploitation.
* Consultez le manuel pour installer l'API Web Seafile selon votre système d'exploitation : [Manuel API Web Seafile](https://manual.seafile.com/develop/web_api.html)
* Vous devez poursuivre l'installation jusqu'à la **création d'un compte administrateur**.

### Mac Os
* Attention l'API Web Seafile n'est pas compatible Mac OS. Vous pouvez utiliser [Virtual Box](https://www.virtualbox.org/wiki/Downloads) pour émuler un système Windows.
* Pour communiquer avec votre machine virtuelle : **Configuration -> Réseau -> Mode d'accès réseau : Accès par pont.**
* Ouvrez un terminal dans windows.
* Saisissez la commande **`ipconfig`**
* L'adresse de votre machine correspond à **Adresse IPV4 : 192.X.X.X.**

### Client Seafile Firefox Os
#### Windows
* Ouvrez le terminal **Git Bash**.
* Clonez le projet dans le répertoire de votre choix : **`git clone https://github.com/cmapella/SeafileFirefoxOS.git`**
* Placez vous dans le dossier du projet : **`cd SeafileFirefoxOs`**
* Installez les modules nécessaires au fonctionnement de l'application : **`npm install`**

#### Mac OS
* Ouvrez un terminal.
* Clonez le projet dans le répertoire de votre choix : **`git clone https://github.com/cmapella/SeafileFirefoxOS.git`**
* Placez vous dans le dossier du projet : **`cd SeafileFirefoxOs`**
* Installez les modules nécessaires au fonctionnement de l'application : **`npm install`**

## Lancement de l'application

### Dans un navigateur web

* Placez vous dans le dossier du projet avec votre terminal : **`cd SeafileFirefoxOs`**
* Lancez l'application : **`npm start`**
* Ouvrez l'application à cette adresse :  [http://localhost:3000](http://localhost:3000).

### Depuis un émulateur Firefox OS

#### Installation du simulateur Firefox OS

* Lancez votre navigateur **Firefox OS**.
* Outils -> Développement Web -> WebIDE.
* Installez le **Simulateur Firefox OS 2.2**, dans l'onglet Simulateur.
* Installez aussi le **Module ADB Helper** et **Module Tools Adapters**. Ils vous permettront de lancer votre application sur un mobile Firefox OS.

#### Lancement de l'application depuis le Web IDE

* Cliquez sur **"Ouvrir une application hébergée"**. Attention à cette étape votre client doit être démarré.
* L'URL du manifest est la suivante : **"http://localhost:3000/manifest.webapp"**.
* Le projet Seafile Firefox OS devrait apparaitre dans l'onglet "Mes Projets"
* Lancez le **Simulateur Firefox OS 2.2**.
* Dans la fenètre du WebIde, il ne vous reste plus qu'à demarrer l'application via le bouton **lecture**.

### Se connecter à son API Web Seafile

Sur le formulaire de connexion saisissez les informations suivantes :

* **Adresse du serveur** : correspond à l'adresse de l'API Web Seafile. Exemple : **http://localhost:8000** si l'application est démarrée sur votre machine locale ou encore **http://192.X.X.X:8000** sur une machine distante.
* **Email** : correspond à l'email du compte administrateur que vous avez crée précédemment
* **Mot de passe** : correspond au mot de passe associé au compte administrateur




