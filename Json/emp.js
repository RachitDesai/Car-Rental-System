var myapp = angular.module('myapp',[]);
myapp.controller('myCtrl',function($scope, $http)
{
    $http.get("customer.json")
    .success(function(response)
    {
        
        {
            $scope.names=response.customer;
        }
        
    });
    $scope.orderByall = function(item) {
        $scope.myOrderBy = item;
      }
    
});
myapp.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});
myapp.filter("myfilterid",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toLowerCase();
    }}
});
myapp.filter('myFormat', function () { return function () {
    let seniorCitizen = personsArray.filter((person) => { return person.age>59;
    })
    return seniorCitizen;
    } ;
});



