'use strict';

angular.module('dz12')
.controller('MainCtrl', function($scope) {
    $scope.user = {
        login: '',
        email: '',
        password: '',
        confirm_password: ''
    };
})
.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});

