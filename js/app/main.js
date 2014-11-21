var redInova = angular.module('RedInnova',[]);

redInova.controller('menuTopCtrl',function(){
    this.opciones = [
        {
            "id":1,
            "name":"home",
            "url":"/#",
            "color":"cyan"
        },
        {
            "id":2,
            "name":"ofertas",
            "url":"/#",
            "color":"magenta"
        },
        {
            "id":3,
            "name":"demandas",
            "url":"/#",
            "color":"yellow"
        }
    ];
    this.changeBack = function(bak){
        document.body.className = bak;
    }
});