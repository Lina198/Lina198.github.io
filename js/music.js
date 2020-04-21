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
    $scope.my_func = function() {
        $scope.getIndexById($scope.Groups=[],$scope.Groups.id );
    }
    $scope.getIndexById = function(arr, id) {
        $scope.index = 0, length = arr.length, i = 0;
        for (; i < length; i++) {
            if (arr[i]['id'] === $scope.Groups.id)  {
                index = i;
                break;
            }
        }
        return ctx.fillText(index,100,50);;
    }
    $scope.once = function ()
        {
        if(count==10){alert("БОЛЬШЕ УВЫ НЕЛЬЗЯ")}
        if(count==0) {
            ctx.strokeRect(50, 50, 100, 100);
            count++;
        } else
        if(count==1) {
            ctx.strokeRect(200, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 150, 75, 200, 75);
            ctx.stroke();
            $scope.my_func();
            count++;
        } else
        if(count==2) {
            ctx.strokeRect(350, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 300, 75, 350, 75);
            ctx.stroke();
            count++;
        } else
        if(count==3) {
            ctx.strokeRect(500, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 450, 75, 500, 75);
            ctx.stroke();
            count++;
        } else
        if(count==4) {
            ctx.strokeRect(650, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 600, 75, 650, 75);
            ctx.stroke();
            count++;
        } else
        if(count==5) {
            ctx.strokeRect(800, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 750, 75, 800, 75);
            ctx.stroke();
            count++;
        } else
        if(count==6) {
            ctx.strokeRect(950, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 900, 75, 950, 75);
            ctx.stroke();
            count++;
        } else
        if(count==7) {
            ctx.strokeRect(1100, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 1050, 75, 1100, 75);
            ctx.stroke();
            count++;
        } else
        if(count==8) {
            ctx.strokeRect(1250, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 1200, 75, 1250, 75);
            ctx.stroke();
            count++;
        } else
        if(count==9) {
            ctx.strokeRect(1400, 50, 100, 100);
            ctx.beginPath();
            canvas_arrow(ctx, 1350, 75, 1400, 75);
            ctx.stroke();
            count++;
        }
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


