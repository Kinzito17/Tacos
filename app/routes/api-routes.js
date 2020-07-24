const Taco = require("../models/taco.js");

module.exports = function (app) {

    app.get("/api/all", function (req, res) {

        // Finding all Chirps, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        Taco.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });

    });

    //Add a new taco to devour
    app.post("/api/new", function (req, res) {

        console.log("Taco Data:");
        console.log(req.body);

        Taco.create({
            taco_name: req.body.taco_name,

        }).then(function (results) {
            // `results` here would be the newly created chirp
            res.end();
        });

    });

}
