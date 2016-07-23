/**
 * Created by Mesasix on 22/07/2016.
 */

/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http');

var app = express();


/**
 * Configuration
 */

// all environments
app.set('port',8080);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

/**
 * Routes
 */
app.get('/', function (req, res) {
   res.render('index');
});

app.get('/campaigns', function (req, res) {
   res.render('pages/campaigns', {title: 'Campaigns'});
});

app.get('/templates', function (req, res) {
   res.render('pages/templates', {title: 'Templates'});
});

app.get('/lists', function (req, res) {
   res.render('pages/lists', {title: 'Lists'});
});

app.get('/reports', function (req, res) {
   res.render('pages/reports', {title :'Reports'});
});

app.get('/automation', function (req, res) {
   res.render('pages/automation', {title: 'Automation'});
});


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
    console.log('Listening on port ' + app.get('port'));
});
