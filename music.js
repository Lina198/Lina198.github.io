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

var btn = document.querySelector('.morti');
var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
var count=0;
function once(){
    if(count==10){alert("БОЛЬШЕ УВЫ НЕЛЬЗЯ")}
    if(count==0) {ctx.strokeRect(50, 50, 100, 100);count++} else
    if(count==1) {ctx.strokeRect(200, 50, 100, 100);count++} else
    if(count==2) {ctx.strokeRect(350, 50, 100, 100);count++} else
    if(count==3) {ctx.strokeRect(500, 50, 100, 100);count++} else
    if(count==4) {ctx.strokeRect(650, 50, 100, 100);count++} else
    if(count==5) {ctx.strokeRect(800, 50, 100, 100);count++} else
    if(count==6) {ctx.strokeRect(950, 50, 100, 100);count++} else
    if(count==7) {ctx.strokeRect(1100, 50, 100, 100);count++} else
    if(count==8) {ctx.strokeRect(1250, 50, 100, 100);count++} else
    if(count==9) {ctx.strokeRect(1400, 50, 100, 100);count++}
}


