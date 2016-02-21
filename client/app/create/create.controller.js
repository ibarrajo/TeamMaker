'use strict';

angular.module('hacksummitApp')
  .controller('CreateCtrl', function ($scope, $http, $templateCache, $state, $stateParams) {

    $scope.formData = {
      projectName: '',
      mainImage: '',
      projectDescription: $templateCache.get('descriptionTemplate.md')
    };


    $scope.submitForm = function (formData) {
      // if updating
      if ($stateParams._id) {
        $http.put('/api/projects/' + $stateParams._id, formData).then(
          function(res) {
            // console.log(res);
            $state.go('projects');
          }
        );
      } else {
        // new post
        $http.post('/api/projects', formData).then(
          function(res) {
            // console.log(res);
            $state.go('projects');
          }
        );
      }
    };

    // if editing
    if ($stateParams._id) {
      // console.log($stateParams);
      $http.get('/api/projects/' + $stateParams._id).then(
        function (res) {
          $scope.formData = res.data;
        }
      );

    }



  });
