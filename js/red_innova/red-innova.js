var redInnova = angular.module('RedInnova',['ngRoute','ngResource',
                                            'red-innova.menusControllers']);


redInnova.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/ofertas',{
            templateUrl:'/templates/ofertas.tpl.html'
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
