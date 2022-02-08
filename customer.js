var employeeAppModule = angular.module("myapp", []);    
 employeeAppModule.controller("myCtrl", function ($scope,$http) {    
   $http.get('customer.json')    
   .success(function(data){    
     $scope.names = data;    
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.customers = { };     
   });    
 });    