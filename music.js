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
function Rectangle() {
    var canvas = document.getElementById('canvas');
    for(i=0;i<10;i++) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var a=50;
        var b=50;
            a=a+150;
            ctx.moveTo(a, b);
            ctx.strokeRect(a, b, 50, 50);
        }
    }
}