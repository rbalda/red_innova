var menusController = angular.module('red-innova.menusControllers',[]);

menusController.controller('menuTopCtrl',['$scope','$location','$route',
    function($scope,$location,$route){

    this.subOptionsMenu = null;
    this.selectedOption = 0;
    this.selectedSubOption = 0;
    this.route = $route;
    this.menuOptions=[
            {
                "id":0,
                "name":"home",
                "url":"/",
                "subOpts":[
                    {
                        "id":0,
                        "name":"Novedades",
                        "url":"incubaciones-home.tpl.html",
                    },
                    {
                        "id":1,
                        "name":"Incubaciones Institucionales",
                        "url":"incubaciones-list-create.tpl.html",
                    }
                ]
            },
            {
                "id":1,
                "name":"ofertas",
                "url":"/ofertas",
                "subOpts":[
                    {
                        "id":0,
                        "name":"Novedades",
                        "url":"incubaciones-home.tpl.html",
                    },
                    {
                        "id":1,
                        "name":"Incubaciones Institucionales",
                        "url":"incubaciones-list-create.tpl.html",
                    }
                ]
            },
            {
                "id":2,
                "name":"demandas",
                "url":"/demandas",
                "subOpts":[
                    {
                        "id":0,
                        "name":"Novedades",
                        "url":"incubaciones-home.tpl.html",
                    },
                    {
                        "id":1,
                        "name":"Incubaciones Institucionales",
                        "url":"incubaciones-list-create.tpl.html",
                    }
                ]
            },
            {
                "id":3,
                "name":"incubaciones",
                "url":"/incubaciones",
                "subOpts":[
                    {
                        "id":0,
                        "name":"Novedades",
                        "url":"incubaciones-home.tpl.html",
                    },
                    {
                        "id":1,
                        "name":"Incubaciones Institucionales",
                        "url":"incubaciones-list-create.tpl.html",
                    }
                ]
            }
        ]


    this.select = function(op){
        this.selectedOption = op;
        this.go(this.menuOptions[this.selectedOption]);
        this.setSubOptions();
        this.selectSub(0);
    }

    this.go=function(op){
        $location.path(op.url);
    }

    this.setSubOptions= function(){
        this.subOptionsMenu = this.menuOptions[this.selectedOption].subOpts;
    }

    this.selectSub = function(Sop){
        this.selectedSubOption = Sop;
    }

}]);

