var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {
    /*$scope.Groups =[
        {name : "Nightwish", country : "Финляндия", num:"1"},
        {name : "Канцлер Ги", country : "Россия", num:"2"},
        {name : "Nirvana", country : "Рим", num:"3"},
        {name : "Little big", country : "Люксембург", num:"4"},
        {name : "Fifth Harmony", country : "Бельгия", num:"5"},
        {name : "Олечка Бузова", country : "Донбасс", num:"6"}
    ];*/

    $http.get("music.json").then(function(response) {
        $scope.Groups = response.data;
    });
});

