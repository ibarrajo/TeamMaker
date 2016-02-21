'use strict';

angular.module('hacksummitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl'
      })
      .state('edit', {
        url: '/edit/:_id',
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl'
      });
  });
