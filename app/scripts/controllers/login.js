'use strict';

/**
 * @ngdoc function
 * @name seafileFirefoxOsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seafileFirefoxOsApp
 */
angular.module('seafileFirefoxOsApp')
    .controller('LoginCtrl', function($scope) {
        $scope.vm = {
            formData: {
                email: 'test@gmail.com',
                password: 'foobar'
            }
        };
    });