module.exports = function (sequelize, types) {

    var Burger = sequelize.define('Burger', {
        burger_name: {
            type: types.STRING,
            allowNull: false // This DB column may not be equal to null.
        },
        devoured: {
            type: types.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Burger;

};