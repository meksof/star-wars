# Star Wars

## How to run the project ?

- You need nodejs to run angular, install it from here: [nodejs](https://nodejs.org/en/download) (>= 18.13).
- Git clone the [project](https://github.com/meksof/start-wars).
- Then go to the project directory`cd start-wars` and run `npm install` to install the project dependencies.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How do I proceeded ?

 - Imaginer l'apparence de l'application
 - Faire une recherche sur les librairies open sources, pour implémenter la fonctionnalité de recherche.
 - Choix des librairies de composants: Tailwind est une librairie qui propose des helpers css. Les classes css remplacent le besoin d'implémenter un code css.

## In the meantime !

 - Swapi.dev a des problèmes de certificat, j'ai dû changer de date sur mon PC pour bypasser ce problème.
 - J'ai rencontré un problème de CORS (Cross-Origin Request): le navigateur bloque les requêtes http depuis et vers un serveur (https://swapi.dev) dont l'url est différente du nom de domaine de mon serveur local (http://localhost). Par contre, il s'est avéré qu'il s'agit d'un problème lié au problème de certificat chez swapi.dev.

## Reste à faire
 - [x] Rédiger dans README.md les étapes à suivre pour démarrer le projet.
 - [x] Présenter les informations d'une personne sur la page principale.
 - [ ] Ajouter les pages de détails d':
    - [x] un film
    - [x] une espèce
    - [x] un véhicule
    - [ ] un vaisseau spatial
 - [x] Mettre en place les tests unitaires
 - [ ] Amélioration: Surligner le mot recherché dans la liste des résultats
 - [x] Amélioration: Améliorer l'esthétique de l'UI.
 - [ ] Amélioration: [Vue personnage] Pour une meilleure expérience utilisateur, présenter les noms/titres des entités suivantes "film", "espèce", "véhicule", "vaisseau spatial" à la place d'un lien.
   L'api swapi actuellement ne propose que des liens.
   Peut-être proposer de faire un call api pour chaque ressource (film/1, film/5, ...) et présenter son nom, je pense que cette solution est un peu coûteuse en terme d'aller retour vers le serveur.