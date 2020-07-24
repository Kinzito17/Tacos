const Taco = require("../models/taco.js");

$("#taco-submit").on("click", function (event) {
    event.preventDefault();

    // Make a new taco object
    let newTaco = {
        taco_name: $("#tacotext").val().trim(),
    };

    $.post("/api/new", newTaco)
        // On success, run the following code
        .then(function () {

            let row = $("<li>");
            row.addClass("list-group-item ready");
            row.text(newTaco.taco_name);

            $("#to-eat").append(row);
            $("#to-eat").append($("<button>").attr({ class: "btn submit-btn", type: "submit", id: "devour-btn" }).text("Down the Hatch!"))
        });

    // Empty each input box by replacing the value with an empty string
    $("#tacotext").val("");

});

$.get("/api/all", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {
            let tacoId = data[i].id
            let row = $("<li>");
            row.addClass("list-group-item ready");
            row.attr("data-id", tacoId)
            row.text(data[i].taco_name)

            $("#to-eat").append(row);
            $("#to-eat").append($("<button>").attr({ class: "btn", type: "submit", id: "devour-btn", "data-id": tacoId, }).text("Down the Hatch!"))
        }
    }
});

$("#devour-btn").on("click", function (event) {
    event.preventDefault();

    // Make a new taco object
    let eatenTaco = {
        taco_name: $("#.ready").val().trim(),
    };
    console.log(eatenTaco);

    $.post("/api/new", eatenTaco)
        // On success, run the following code
        .then(function () {

            let row = $("<li>");
            row.addClass("list-group-item done");
            row.text(eatenTaco.taco_name)

            $("#devoured").append(row);
        });

    //delete current taco

    //this will be the put ot patch



});





