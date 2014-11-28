var menusController = angular.module('red-innova.menusControllers',[]);

menusController.controller('menuTopCtrl',['$scope','$location','$route',
                                          function($scope,$location,$route){
    this.selectedOption = 0;
    this.route = $route;
    this.menuOptions=[
            {
                "id":0,
                "name":"home",
                "url":"/",
                "controller":null
            },
            {
                "id":1,
                "name":"ofertas",
                "url":"/ofertas",
                "controller":null
            },
            {
                "id":2,
                "name":"demandas",
                "url":"/",
                "controller":null
            },
            {
                "id":3,
                "name":"incubaciones",
                "url":"/",
                "controller":null
            }
        ]
    this.select = function(op){
        this.selectedOption = op;
        this.go(this.menuOptions[op]);
    }

    this.go=function(op){
        $location.path(op.url);
    }

}]);
