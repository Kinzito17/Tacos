// Dependencies

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
const Taco = sequelize.define("taco", {
    taco_name: {
        type: Sequelize.STRING,
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0'
    }
});

// Syncs with DB
Taco.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Taco;
