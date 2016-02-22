'use strict';

angular.module('hacksummitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('members', {
        url: '/members',
        templateUrl: 'app/members/members.html',
        controller: 'MembersCtrl'
      });
  });
