var myapp = angular.module('myapp',[]);
myapp.controller('displayctr',function($scope, $http)
{
    $http.get("http://localhost:8000/student")
    .success(function(response)
    {
        
        {
            $scope.names=response;
        }
        
    }); 
});