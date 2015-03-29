'use strict';

angular.module('dz12')
.controller('MainCtrl', function($scope,userService) {

    $scope.password = '';
    $scope.confirm_password = '';
    $scope.customerror = {
        login:'',
        password:'',
        email:''
    }

    $scope.$watchGroup(['password','confirm_password'],
        function(newValue){

            if ($scope.password != $scope.confirm_password){
                $scope.userForm.confirm_password.$error.equal = true;
                $scope.userForm.confirm_password.$valid = false;
                $scope.userForm.confirm_password.$invalid = true;
                $scope.userForm.$invalid = true;
            }else{
                $scope.userForm.confirm_password.$valid = true;
                $scope.userForm.confirm_password.$invalid = false;
                delete $scope.userForm.confirm_password.$error.equal;

            }
        }
    );

    $scope.$watch('login',function(newValue){
        if (newValue) {
            userService.checkLogin(newValue)
            .then(function (res) {
                if (res.data.success === true){
                    delete $scope.userForm.login.$error.loginerror ;
                    $scope.userForm.login.$valid = true;
                    $scope.userForm.login.$invalid = false;
                }else{
                    $scope.userForm.login.$error.loginerror = true;
                    $scope.userForm.login.$valid = false;
                    $scope.userForm.login.$invalid = true;
                    $scope.userForm.$invalid = true;
                }
                //console.log($scope.userForm.login);
            });
        }
    });

    $scope.Register = function(){
        if ($scope.userForm.$invalid || $scope.userForm.login.$invalid
            || $scope.userForm.password.$invalid || $scope.userForm.email.$invalid){
            return;
        }

        var regData = {
            login: $scope.login,
            email: $scope.email,
            password: $scope.password

        }

        userService.register(regData).then(function (res) {

            if (res.success === true){
                alert("success");
            }else{
                var error = res.data.error;

                for (var key in error) {
                    if (error.hasOwnProperty(key)) {
                        custom_validate_error(key,error[key])
                    }
                }

            }
            console.log(res.data);
        });
    }

    function custom_validate_error($field,message){
        if ($scope.userForm.hasOwnProperty($field)){
            $scope.userForm[$field].$error.custom = message;
            $scope.userForm[$field].$valid = false;
            $scope.userForm[$field].$invalid = true;
            $scope.userForm.$invalid = true;


        }else{
            delete $scope.userForm[$field].$error.custom ;
            $scope.userForm[$field].$valid = true;
            $scope.userForm[$field].$invalid = false;
        }



    }


});


