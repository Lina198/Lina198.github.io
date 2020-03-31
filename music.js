var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {
    $scope.Groups =[
        {name : "Nightwish", country : "Финляндия", num:"1"},
        {name : "Канцлер Ги", country : "Россия", num:"2"},
        {name : "Nirvana", country : "Рим", num:"3"},
        {name : "Little big", country : "Люксембург", num:"4"},
        {name : "Fifth Harmony", country : "Бельгия", num:"5"},
        {name : "Олечка Бузова", country : "Донбасс", num:"6"}
    ];
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

function Rectangle(){

}

