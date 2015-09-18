//set up
var express  = require('express');
var app  =express(); // 创建一个一应用
var mongoose = require("mongoose"); // mongoose for mongodb
var port = process.env.PORT ||8080;
var database = require('./config/database'); //加载数据库配置文件
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride =require('method-override');

//configure
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev')); //对每个request 请求记录日志
app.use(bodyParser.urlencoded({'extended':'true'})); // 解析 application/x-www-form-urlencoded
app.use(bodyParser.json()); //解析 application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // 解析 application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // 重载 request 请求 X-HTTP-Method-Override header 

//routes 
require('./app/routes.js')(app);
app.listen(port);
console.log("App listening on port " + port);