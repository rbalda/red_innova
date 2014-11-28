var menusController = angular.module('red-innova.menusControllers',[]);

menusController.controller('menuTopCtrl',['$scope','$location',function($scope,$location){
    this.selectedOption = 0;
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
    this.setView = function(op){
        this.go(this.menuOptions[op]);
    }

    this.go = function(opt){
        $location.path(opt.url);
    }

}]);
