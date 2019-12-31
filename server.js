//==========================================================
// Server Dependencies
//==========================================================

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path')

//==========================================================
// Initialize Express
//==========================================================
var app = express();

//==========================================================
// Set PORT variable using environment port or localhost.
//==========================================================
var PORT = process.env.PORT || 3000;

// ========================================================
// Require the models for syncing
// ========================================================
var db = require('./models');

//==========================================================
// Serve static files
//==========================================================
app.use(express.static(process.cwd() + './public'));
app.use(express.static('public/img'));
app.use(express.static('public/css'));


//==========================================================
// Configure body-parser middleware.
//==========================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//==========================================================
// Configure method-override middleware.
//==========================================================
app.use(methodOverride('_method'));

//==========================================================
// Configure express-handlebars.
//==========================================================

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//==========================================================
// Require route controllers
//==========================================================
require('./routes/api-routes')(app);


//==========================================================
// Sync sequelize models
// Start Express server
//==========================================================
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});



//==========================================================
// Server Dependencies
//==========================================================

// var express = require('express');
// var methodOverride = require('method-override');
// var bodyParser = require('body-parser');

//==========================================================
// Initialize Express
//==========================================================
// var app = express();

//==========================================================
// Set PORT variable using environment port or localhost.
//==========================================================
// var PORT = process.env.PORT || 3000;

// ========================================================
// Require the models for syncing
// ========================================================
// var db = require('./models');

//==========================================================
// Serve static files
//==========================================================
// app.use(express.static(process.cwd() + '/public'));

//==========================================================
// Configure body-parser middleware.
//==========================================================
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//==========================================================
// Configure method-override middleware.
//==========================================================
// app.use(methodOverride('_method'));

//==========================================================
// Configure express-handlebars.
//==========================================================

// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');


//==========================================================
// Require route controllers
//==========================================================
// require('./routes/api-routes')(app);


//==========================================================
// Sync sequelize models
// Start Express server
//==========================================================
// db.sequelize.sync({ force: false }).then(function () {
//     app.listen(PORT, function () {
//         console.log('App listening on PORT ' + PORT);
//     });
// });








// // *****************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// //
// // ******************************************************************************
// // *** Dependencies
// // =============================================================
// var express = require("express");

// var methodOverride = require('method-override');

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
// var db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// // app.use(express.static("public"));

// app.use(express.static(process.cwd() + '/public'));

// app.use(methodOverride('_method'));

// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Routes
// // =============================================================
// require("./routes/api-routes.js")(app);

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync().then(function () {
//     app.listen(PORT, function () {
//         console.log("App listening on PORT " + PORT);
//     });
// });

