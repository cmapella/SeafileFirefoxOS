/**
 * La configuration de SystemJS pour notre application.
 * On peut modifier ce fichier par la suite selon nos besoins.
 */
(function(global) {
    System.config({
        paths: {
            // définition d'un raccourcis, 'npm' pointera vers 'node_modules'
            'npm:': 'https://unpkg.com/'
        },
        // L'option map permet d'indiquer à SystemJS l'emplacement des éléments charger les éléments
        map: {
            // notre application se trouve dans le dossier 'app'
            app: 'dist',

            // packets angular
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // autres librairies
            'rxjs': 'npm:rxjs',
            'moment': 'npm:moment',
            'angular2-moment': 'npm:angular2-moment',
        },
        // L'option 'packages' indique à SystemJS comment charger les paquets qui n'ont pas de fichiers et/ou extensions renseignés
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'moment': {
                main: './moment.js',
                defaultExtension: 'js'
            },
            'angular2-moment': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);