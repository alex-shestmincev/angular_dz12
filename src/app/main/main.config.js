'use strict';

angular.module('dz12')
.config( function($mdThemingProvider, $translateProvider,$httpProvider){

    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();

    $translateProvider.translations('en', {
        'LOGIN': 'Login',
        'EMAIL': 'E-mail',
        'PASSWORD': 'Password',
        'CONFIRM_PASSWORD': 'Confirm password',
        'REGISTER': 'Register',

        'REQUIRED': 'This field is required',
        'LOGIN_INVALID': 'Login is invalid or busy',
        'TOOSHORT': 'Too short',
        'EMAIL_INVALID': 'Your email address is invalid',
        'PASSWORD_INVALID': 'Bad password, minimum 8 characters, 1 big, 1 spec',
        'PASSWORD_BAD_CONFIRM': 'Confirm password is not equal to password'
    });

    $translateProvider.translations('ru', {
        'LOGIN': 'Логин',
        'EMAIL': 'E-mail',
        'PASSWORD': 'Пароль',
        'CONFIRM_PASSWORD': 'Подтверждение пароля',
        'REGISTER': 'Регистрация',

        'REQUIRED': 'Обязательное поле, не должно быть пустым',
        'LOGIN_INVALID': 'Данный логин не валиден или занят',
        'TOOSHORT': 'Слишком короткое поле',
        'EMAIL_INVALID': 'Ваш E-mail не валидный',
        'PASSWORD_INVALID': 'Неверный формат пароля, минимум 8 символов, одна большая буква, один спецсимвол. Спецсимвол не должен идти первой буквой',
        'PASSWORD_BAD_CONFIRM': 'Пароли не совпадают'
    });


    if (window.navigator.language === 'ru'){
        $translateProvider.preferredLanguage('ru');
    }else{
        $translateProvider.preferredLanguage('en');
    }

});