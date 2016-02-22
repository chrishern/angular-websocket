'use strict';

/**
 * @ngdoc overview
 * @name githubApp
 * @description
 * # githubApp
 *
 * Main module of the application.
 */
angular
  .module('githubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-websocket'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/websocket', {
        templateUrl: 'views/websocket.html',
        controller: 'WebSocketCtrl',
        controllerAs: 'websocket'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
