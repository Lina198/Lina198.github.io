var btn = document.querySelector('.morti');
var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = 150;
var count=0;
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {

    $http.get("music.json").then(function(response) {
        $scope.Groups = response.data;
    });

    $scope.getIndexById = function(arr, id) {
        for (var x in arr) {
            if (arr[x].id == id) {
                ctx.fillText(arr[x].country,$scope.x_row -125,100);
                ctx.fillText(arr[x].data,$scope.x_row -125,125);
            }
        }
        return null;
    }
    $scope.my_func = function(id, x_row) {
        $http.get("music.json").then(function(response) {
            $scope.lolik = response.data;
            $scope.getIndexById($scope.lolik,id);
        });

    }

    $scope.x_row=50;

    $scope.once = function (event){
        if ($scope.x_row==1400){
            alert("БОЛЬШЕ УВЫ НЕЛЬЗЯ")
            return 0;
        }
        ctx.strokeRect($scope.x_row, 50, 100, 100);
        if($scope.x_row-50>0) {
            ctx.beginPath();
            canvas_arrow(ctx, $scope.x_row -50, 75, $scope.x_row+0, 75);
            ctx.stroke();
        }
        $scope.my_func(event.target.value,$scope.x_row);
        $scope.x_row+=150;
    }

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

function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}


