//require dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

//scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

//define PORT
var PORT = 3000;

//intialize Express;
var app = express()

//Configure Middleware
