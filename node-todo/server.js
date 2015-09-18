//set up import package model
var express  = require('express');
var app  =express(); // create our app 
var mongoose = require("mongoose"); // mongoose for mongodb
var port = process.env.PORT ||8080;
