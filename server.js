//require dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

//scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

//define PORT 3000 or use Heroku PORT
var PORT = process.env.PORT || 3000;

//intialize Express;
var app = express()

//Configure Middleware

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// If deployed, use the deployed Heroku database. Otherwise use my local scraperdb database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraperdb";

mongoose.connect(MONGODB_URI);

//Configure routes now

// A GET route for scraping the chicago tribune website

app.get("/", function(request, response) {

    console.log("JuJu Team");

    //response.send("JuJu Team!!");

});

// app.get("/", function(req, res) {
//     res.send("Hello world");
//   });

app.get("/scrape", function (request, response) {

    // First, grab the body of the html with axios

    // First, tell the console what server.js is doing
    console.log("\n***********************************\n" +
        "Grabbing every thread name and link\n" +
        "from chicago tribune website:" +
        "\n***********************************\n");

    axios.get("http://www.chicagotribune.com").then(function (response) {

        // Load the Response into cheerio and save it to a variable
        var $ = cheerio.load(response.data);

        // An empty array to save the data that is scraped
        var results = [];

        // With cheerio, find each h2-tag with the "regular-text-mobile.h6" class
        // (i: iterator. element: the current element)
        $("h2.regular-text-mobile.h6").each(function (i, element) {

            // Save the text of the element in a "title" variable
            var title = $(element).text();

            // In the currently selected element, look at its child elements (i.e., its a-tags),
            // then save the values for any "href" attributes that the child elements may have
            var link = $(element).children().attr("href");

            // Save these results in an object that will be pushed into the results array defined earlier
            results.push({
                title: title,
                link: link
            });

        });

        console.log(results);

    });

});

//Start the server
app.listen(PORT, function () {
    console.log("App is listening on " + PORT);
});



