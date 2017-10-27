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
            login: function(serverAddress, username, password) {
                console.log("CALL API REST SEAFILE")
                return $http.post(serverAddress + "/api2/auth-token/", { username: username, password: password }).then(
                    function(response) {
                        console.log(response.data.token);
                    },
                    function(response) {
                        // failure callback
                    }
                );
            }
        };
    });