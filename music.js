var btn = document.querySelector('.morti');
var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
var clear = document.getElementById("clear");
canv.width = window.innerWidth;
canv.height = 150;
var count=0;
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {

    $scope.id_arr=[];

    $scope.coord_arr=[];

    $http.get("music.json").then(function(response) {
        $scope.Groups = response.data;
    });

    $http.get("counrty.json").then(function(response) {
        $scope.country = response.data;
    });

    $scope.getIndexById = function(arr, id) {
        for (var x in arr) {
            if (arr[x].id == id) {
                $scope.id_arr.push(arr[x]);
		return null;
            }
        }
        return null;
    }
    $scope.my_func = function(id) {
        $http.get("music.json").then(function(response) {
            $scope.lolik = response.data;
            $scope.getIndexById($scope.lolik,id);
        });

    }

    $scope.x_row=50;

    $scope.once = function (event){
        alert();

	$scope.my_func(event.target.value);
	refresh();
  // тут должна быть функция, которая убирает всё нарисованое с карты
	$scope.id_arr.sort(sort_by_date);
  var x_;
  var y_;

  $scope.coord_arr=[];
	for(var x in $scope.id_arr){
        if ($scope.x_row==1400){
            alert("hfuikewjfopjewopfjodjf");
            return 0;
        }
        ctx.strokeRect($scope.x_row, 50, 100, 100);
        if($scope.x_row-50>0) {
            ctx.beginPath();
            canvas_arrow(ctx, $scope.x_row -50, 75, $scope.x_row+0, 75);
            ctx.stroke();
            var coord_ = tour_country($scope.id_arr[x],$scope.country);
            x_ = coord_.x;
            y_ = coord_.y;
        }
        else{
          var coord = tour_country($scope.id_arr[x],$scope.country);
          var x1 = coord.x;
          var y1 = coord.y;
          alert(x1);
          $scope.coord_arr.push({"x1":x_,"y1":y_,"x2":x1,"y2":y1,});
          // тут функция которая рисует стрелочку из города с координатами x_ и y_ в город с координатами x и y


            x_=x1;
            y_=y1;
        }

        ctx.fillText($scope.id_arr[x].country,$scope.x_row -125,100);
        ctx.fillText($scope.id_arr[x].data,$scope.x_row -125,125);
        $scope.x_row+=150;

	}
    }

    function refresh(){// дубликат функции для clear.click
	$scope.x_row =50;
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, 250, 380);
            canv.width = window.innerWidth;
            canv.height = 150;
            coords.splice(0, coords.length);
    }

    function tour_country(tour, country){
      for(var x in country){
        if(tour.country==country[x].id){
          var coord={"x":country[x].x,"y":country[x].y}
          return coord;
          }
        }
      }
      return null;
    }

    function sort_by_date(a, b) { // функция сортировки по дате для JSON
	var dateA = new Date(a.date).getTime();
	var dateB = new Date(b.date).getTime();
	console.log(dateA.length); console.log(dateB);
	return dateA > dateB ? 1 : -1;
    };

    clear.onclick = function()
    {
        $scope.x_row =50;
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, 250, 380);
            canv.width = window.innerWidth;
            canv.height = 150;
            //coords.splice(0, coords.length);
            console.log("Очистка ", coords);
            $scope.id_arr=[];
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
