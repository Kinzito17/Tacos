const Taco = require("../models/taco.js");


module.exports = (app) => {

    app.get("/api/all", function (req, res) {
        Taco.findAll({}).then(results => {
            res.json(results);
        });

    });

    //Add a new taco to devour
    app.post("/api/new", function (req, res) {
        Taco.create({
            taco_name: req.body.taco_name,
            devoured: false
        }).then(results => {
            res.end();
        });

    });

    //Update boolean
    app.put("/api/:id", (req, res, next) => {
        console.log(req.params.id)
        Taco.update({
            devoured: req.body.devoured
        },
            {
                where: {
                    id: req.body.id
                }
            })
            .then((results) => {
                res.json(results);
            }).catch(next);

    });

}
