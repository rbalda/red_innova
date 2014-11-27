var menusController = angular.module('red-innova.menusControllers',[]);

menusController.controller('menuTopCtrl',['$scope','$location',function($scope,$location){
    this.selectedOption = 0;
    this.menuOptions=[
            {
                "id":0,
                "name":"home",
                "url":"/",
                "controller":null,
                "theme":"green"
            },
            {
                "id":1,
                "name":"ofertas",
                "url":"/ofertas",
                "controller":null,
                "theme":"yellow"
            },
            {
                "id":2,
                "name":"demandas",
                "url":"/",
                "controller":null,
                "theme":"default"
            },
            {
                "id":3,
                "name":"incubaciones",
                "url":"/",
                "controller":null,
                "theme":"blue"
            }
        ]
    this.setView = function(op){
        this.go(this.menuOptions[op]);
    }

    this.go = function(opt){
        $location.path(opt.url);
    }

}]);
