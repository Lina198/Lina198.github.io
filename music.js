var btn = document.querySelector("button");
var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
var count=0;
function once(){
    alert("ПРИВЕТ Я ЗАШЕЛ СЮДА");
    if(count==0) {ctx.strokeRect(50, 50, 100, 100);count++} else
    if(count==1) {ctx.strokeRect(200, 50, 100, 100);count++} else
    if(count==2) {ctx.strokeRect(350, 50, 100, 100);count=0}
}
btn.addEventListener('click', once);

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {
    $http.get("music.json").then(function(response) {
        $scope.Groups = response.data;
    });
});
function tableSearch() {
    document.getElementById('info-table').style.visibility = "visible";
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('info-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}
/*function Rectangle() {
    var canv = document.getElementById('canvas');
    var ctx = canv.getContext('2d');
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    var x=0;
    if (canv.getContext) {
    for(i=0;i<5;i++) {
            x=x+150;
        ctx.fillText("Имя группы", x, 60);
            ctx.moveTo(x, 50);
        ctx.strokeRect(x, 50, 100, 100);
        }
    }
}*/

