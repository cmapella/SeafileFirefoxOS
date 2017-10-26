'use strict';

/**
 * @ngdoc overview
 * @name seafileFirefoxOsApp
 * @description
 * # seafileFirefoxOsApp
 *
 * Main module of the application.
 */
angular
    .module('seafileFirefoxOsApp', [
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .otherwise({
                redirectTo: '/'
            });
    });