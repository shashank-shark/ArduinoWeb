var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var nodemailer = require ('nodemailer')

var app = express();

app.set ('views', path.join(__dirname, 'views'));
app.set ('view engine', 'pug');

app.use (bodyParser.json());

// use shallow parsing
app.use (bodyParser.urlencoded ({extended: false}));

// start creating routes
app.get ('/', function (req, res) {
    res.render ('index');
})


app.listen (3008);
console.log ('Server is Up and running on port 3008');
