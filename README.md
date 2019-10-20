# WebScraper

This project creates a web app that lets users view and leave comments on the latest news.

## Overview
Installed npm packages (**axios, mongoose, express, morgan, cheerio**) using npm install <npm package name>. Initialized `package.json` using `npm init -y`. Created a `.gitignore` file to exclude: `node_modules, .DS_Store and .env`. Used Mongoose as an ORM to create Model Schemas (Article and Note) that validate database entries. Used axios as an API call to get information from the Chicago Tribune website. Used cheerio, to find each h2-tag with the "regular-text-mobile.h6" class. Added the text and href of every link and saved them as properties of the result object to a result array. Created a new Article using the `result` object built from scraping. Created a Get Route for getting all Articles from the db. Created a Get Route for grabbing a specific Article by id, populating it with it's note. Created a Post Route for saving/updating an Article's associated Note. 

## How to use the app
When the page opens (https://gd-webscraper.herokuapp.com/), the user is presented with 20 articles that have been scraped from the Chicago Tribune webite. The user can click on any article and leave a comment. Going to https://gd-webscraper.herokuapp.com/articles will retrieve the JSON data for the articles. Going to https://gd-webscraper.herokuapp.com/articles/:id, will retrieve the JSON for that specific article. 

## Technologies used: 
Node.js  
JavaScript ES5  
npm packages (axios, cheerio, express, morgan, mongoose)
Mongoose as an ORM
Heroku

## My role in app development
According to the project specifications and using classroom code as an example, I created the code and tested the functionality of this application.

## Deployment  
GitHub - https://github.com/Gail-Deadwyler/WebScraper.git  
Heroku - https://gd-webscraper.herokuapp.com/
