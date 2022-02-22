var app = angular.module("myapp",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/display",{
        templateUrl:'output.html',
        controller:'displayctr'
    }); 
}]);
app.controller('displayctr',function($scope, $http)
{
    $http.get("http://localhost:8000/student")
    .success(function(response)
    {
        
        {
            $scope.names=response;
        }
        
    }); 
});

// app.controller("carctr",function($scope)
// {
//     $scope.cars = ["Innova","XUV","Fortuner","Swift","Verna"];

// });
// app.controller("customerctr",function($scope)
// {
//     $scope.customers = [
//         {name:'Rachit',car:'Innova',driver:'Ashok'},
//         {name:'Hemant',car:'XUV',driver:'Kalyan'},
//         {name:'Nimesh',car:'Fortuner',driver:'Nishant'},
//         {name:'Raj',car:'Swift',driver:'Ramesh'},
//         {name:'Jay',car:'Varna',driver:'Ram'},
//     ]

// });