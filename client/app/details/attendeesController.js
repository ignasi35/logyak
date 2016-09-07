var app = angular.module("app", ["checklist-model"]);
app.controller('AttendeesController', function($scope) {
  $scope.attendees = [
    'anna', 
    'vila', 
    'customer', 
    'admin'
  ];
  $scope.kayaker = {
    attendees: ['kayaker']
  };
  $scope.checkAll = function() {
    $scope.user.roles = angular.copy($scope.roles);
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
});