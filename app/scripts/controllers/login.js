'use strict';

/**
 * @ngdoc function
 * @name seafileFirefoxOsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seafileFirefoxOsApp
 */
angular.module('seafileFirefoxOsApp')
    .controller('LoginCtrl', function($scope, serviceRest) {
        $scope.login = function() {
            console.log($scope.username);
            console.log($scope.password);
            serviceRest.login($scope.username, $scope.password);
        };
    });