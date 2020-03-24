var express = require('express');//создаем модуль экспресс
var app = express();// создали приложение

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

var port = 8080;

// зарегистрированнные пользователи

var users = [
    {username:'admin',password:'12345'},
    {username:'user',password:'ilovemusic'},
    {username:'dima',password:'vitalina'}
];

//создание хранилища для сессий
var sessionHandler = require('./js/session_handler');
var store = sessionHandler.createStore();

//регистрируем промежуточный обработчик, чтобы парсить кукисы
app.use(cookieParser());
//создание сессии
app.use(session({
        store: store,
        resave: false,
        saveUninitialized:true,
        secret : 'supersecret'
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'music.html'));
});

app.post('/login',function(req,res){
    
    var foundUser;
    //поиск пользователя в массиве user
    for (var i=0; i<users.length; i++) {
            var u= users[i];
            if(u.username == req.body.username && u.password==req.body.password){
                foundUser=u.username;
                break;
            }
    }
    if(foundUser !== undefined){
        req.session.username = foundUser;
        console.log("Loggin succeeded", req.session.username);
        req.send("Login successuful"+'session ID :'+req.session.id);
    } else {
        console.log("Login Failed", req.body.username);
        res.status(401).send("Login Error");
    }
});

app.get('/check', function(req,res){
    if(req.session.username){
        res.set('Content-Type','text/html');
        res.send('<h2>User'+req.session.username + 'is logged in !</h2>');
    } else {
        res.send('not logged in');
    }
});

app.listen(port, function(){
    console.log('app running on port' + port);
});

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




