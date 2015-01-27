var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var jsxRegex = /\.jsx$/;

var setJSXContentType = function (req, res, next) {
    if (jsxRegex.test(req.url)) {
        res.set({
            'Content-Type': 'application/javascript'
        });
    }
    next();
};

app.use(setJSXContentType);
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000);

console.log('Server started: http://localhost:3000/');
