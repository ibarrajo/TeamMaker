'use strict';

angular.module('hacksummitApp')
  .controller('CreateCtrl', function ($scope, $http, $templateCache, $state) {

    $scope.formData = {
      projectName: '',
      mainImage: '',
      projectDescription: $templateCache.get('descriptionTemplate.md')
    };


    $scope.submitForm = function (formData) {
      //console.log(formData);

      $http.post('/api/projects', formData).then(
        function(res) {
          console.log(res);
          $state.go('projects');
        }
      );

    };

  });
