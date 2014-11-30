var redInnova = angular.module('RedInnova',['ngRoute','ngResource','ngAnimate',
                                            'red-innova.menusControllers']);


redInnova.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/ofertas',{
            templateUrl:'/templates/ofertas.tpl.html',
            activetab:'ofertas'
        })
        .when('/demandas',{
            templateUrl:'/templates/ofertas.tpl.html',
            activetab:'demandas'
        })
        .when('/incubaciones',{
            templateUrl:'/templates/ofertas.tpl.html',
            activetab:'incubaciones'
        })
        .otherwise({
            redirectTo:'/',
            activetab:'home'
        });
}]);

