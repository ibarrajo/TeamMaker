'use strict';

angular.module('hacksummitApp')
  .controller('ProjectsCtrl', function ($scope, $http, $window) {
    $scope.projectList = [];

    // Load Projects
    $scope.loadProjects = function () {
      $http.get('/api/projects').then(
        function(res) {
          $scope.projectList = res.data;
          console.log(res.data);
        }
      );
    };

    $scope.deleteProject = function (_id) {
      var confirm = $window.confirm('Are you absolutely sure you want to delete?');

      if (confirm) {
        $http.delete('/api/projects/' + _id).then(
          function(res) {
            $scope.loadProjects();
            console.log('deleted ' + _id + ' successfully');
          },
          function(res) {
            // @TODO this is where i would put my error case
            // if I had any time to make it!
          }
        );
      }
    };


    // initialize
    $scope.loadProjects();


  });
