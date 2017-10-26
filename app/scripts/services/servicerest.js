'use strict';

/**
 * @ngdoc service
 * @name seafileFirefoxOsApp.serviceRest
 * @description
 * # serviceRest
 * Factory in the seafileFirefoxOsApp.
 */
angular.module('seafileFirefoxOsApp')
    .factory('serviceRest', function serviceRest($http) {
        // Public API here
        return {
            login: function(username, password) {
                console.log("CALL API REST SEAFILE")
                return $http.post("http://localhost:8000/api2/auth-token", { username: username, password: password });
            }
        };
    });