// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (dbBurger) {
            // We have access to the todos as an argument inside of the callback function
            res.render('index', { burgers: dbBurger }); // pass object to handlebars

        });
    });

    // POST route for saving a new todo
    app.post("/", function (req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Burger.create({
            burger_name: req.body.burger,

        }).then(function () {
            // We have access to the new todo as an argument inside of the callback function
            // res.json(dbBurger);
            res.redirect('/');
        });
    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/:id", function (req, res) {
        // //     // Update takes in an object describing the properties we want to update, and
        // //     // we use where to describe which objects we want to update
        db.Burger.update({
            devoured: 1
        }, {
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.redirect("/");
        });
    });

    //   // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    //   // req.params.id
    app.delete("/:id", function (req, res) {
        // We just have to specify which todo we want to destroy with "where"
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.redirect('/');
            //   res.json(dbBurger);
        });

    });

};

//   // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/todos", function(req, res) {
// //     // Update takes in an object describing the properties we want to update, and
// //     // we use where to describe which objects we want to update
//     db.Todo.update({
//       text: req.body.text,
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     });
//   });

// 
