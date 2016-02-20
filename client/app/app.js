'use strict';

angular.module('hacksummitApp', [
  'hacksummitApp.auth',
  'hacksummitApp.admin',
  'hacksummitApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'hc.marked'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
