var cookieParser = require('cookie-parser');
var session = require('express-session');
//подключаю модуль mssql
var MSSQLStore = require('content-mssql')(session);
var mssql = require('mssql');

module.exports = {
    createStore: function(){
        var config = {
            user: 'test', 
            password: '12345',
            server: 'localhost',
            database: "testsb",
            port: 1433,
            pool: {
                max:10,
                min:0,
                idleTimeoutMillis: 30000
            }

        }
        return new MSSQLStore(config);
    }
}