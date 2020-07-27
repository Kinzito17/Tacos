const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./app/models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(() => {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

// const express = require("express");

// const app = express();
// const PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("app/public"));

// // Routes
// require("./app/routes/api-routes.js")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });
