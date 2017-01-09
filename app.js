angular.module('myApp', [])
 .controller('myCtrl', function($scope, $http) {
 $scope.showActivities = false;
 $scope.getData = function (){
  $http.get("https://nuvi-challenge.herokuapp.com/activities").success(function(response) {
   $scope.showActies = true;
   $scope.myData = response;
   console.log(response)
  });
 };
