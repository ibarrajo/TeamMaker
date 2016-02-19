'use strict';

angular.module('hacksummitApp.auth', [
  'hacksummitApp.constants',
  'hacksummitApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
