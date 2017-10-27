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
            serviceRest.login($scope.serverAddress, $scope.username, $scope.password);
        };
    });