'use strict';

angular.module('hacksummitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-us', {
        url: '/about-us',
        templateUrl: 'app/about-us/about-us.html',
        controller: 'AboutUsCtrl'
      });
  });
