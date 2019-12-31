
// Sequelize (capital) references the standard library.
//====================================================
var Sequelize = require("sequelize");


//====================================================
// sequelize (lowercase) references the mySQL connection to the DB.
//====================================================
var sequelize = new Sequelize('dbBurger', 'root', 'Walid123@', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});