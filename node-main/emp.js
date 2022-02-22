var myapp = angular.module('myapp',[]);
myapp.controller('myCtrl',function($scope, $http)
{
    $http.get("http://localhost:3000/employees")
    .success(function(response)
    {
        
        {
            $scope.names=response.customer;
        }
        
    }); 
});





