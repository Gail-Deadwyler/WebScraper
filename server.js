//require dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

//scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

//define PORT 3000 or use Heroku PORT
var PORT = process.env.PORT || 3000;

//intialize Express;
var app = express()

//Configure Middleware

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

