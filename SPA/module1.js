var app = angular.module("myapp",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/gallery",{
        templateUrl:'views/gallery.html',
        controller:'galleryctr'
    }). 
    when("/cars",{
        templateUrl:'views/cars.html',
        controller:'carctr'
    }). 
    when("/customers",{
        templateUrl:'views/customer.html',
        controller:'customerctr'
    }). 
    otherwise({
        redirectTo:'index.html'
    })

}]);
app.controller("galleryctr",function($scope)
{
    $scope.pic1 = "images/g3.jpg";
    $scope.pic2 = "images/g4.jpg";
    $scope.pic3 = "images/g5.jpg";
    $scope.pic4 = "images/g6.jpg";
    $scope.pic5 = "images/g7.jpg";
    $scope.pic6 = "images/g8.jpg";


});

app.controller("carctr",function($scope)
{
    $scope.cars = ["Innova","XUV","Fortuner","Swift","Verna"];

});
app.controller("customerctr",function($scope)
{
    $scope.customers = [
        {name:'Rachit',car:'Innova',driver:'Ashok'},
        {name:'Hemant',car:'XUV',driver:'Kalyan'},
        {name:'Nimesh',car:'Fortuner',driver:'Nishant'},
        {name:'Raj',car:'Swift',driver:'Ramesh'},
        {name:'Jay',car:'Varna',driver:'Ram'},
    ]

});