var redInnova = angular.module('RedInnova',['ngMaterial','ngRoute','ngResource','red-innova.menusControllers']);


redInnova.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/ofertas',{
            templateUrl:''
        })
        .when('/demandas',{
            templateUrl:''
        })
        .when('/incubaciones',{
            templateUrl:''
        })
        .otherwise({
            redirectTo:'/'
        });
}]);
