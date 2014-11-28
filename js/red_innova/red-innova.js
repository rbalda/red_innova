var redInnova = angular.module('RedInnova',['ngRoute','ngResource',
                                            'red-innova.menusControllers']);


redInnova.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/ofertas',{
            templateUrl:'/templates/ofertas.tpl.html',
            activetab:'ofertas'
        })
        .when('/demandas',{
            templateUrl:'',
            activetab:'demandas'
        })
        .when('/incubaciones',{
            templateUrl:'',
            activetab:'incubaciones'
        })
        .otherwise({
            redirectTo:'/',
            activetab:'home'
        });
}]);
