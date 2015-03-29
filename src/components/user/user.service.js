angular.module('dz12').factory('userService',function($q,$http) {

    function checkLogin(login){

        var deferred = $q.defer();
        if (!login){
           return deferred.reject('Incorrect login');
        }

        return $http({
            method: 'GET',
            url: 'http://f3.smartjs.academy/check?user=' + login,
            responseType: 'json'
        });
    }

    function register(regData){

        var deferred = $q.defer();
        if (!regData){
           return deferred.reject('Incorrect data');
        }

        return $http({
            method: 'POST',
            url: 'http://f3.smartjs.academy/submit',
            data: regData,
            responseType: 'json'
        });
    }

    return {
        checkLogin: checkLogin,
        register: register

    }
});
