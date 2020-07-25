$("#taco-submit").on("click", (event) => {
    event.preventDefault();

    // Make a new taco object
    let newTaco = {
        taco_name: $("#tacotext").val().trim(),
    };

    $.post("/api/new", newTaco)
        // On success, run the following code
        .then(() => {

            let row = $("<li>");
            row.addClass("list-group-item ready");
            row.text(newTaco.taco_name);

            $("#to-eat").append(row);
            row.append($("<button>").attr({ class: "btn submit-btn", type: "submit", id: "devour-btn" }).text("Down the Hatch!"))
        });

    // Empty each input box by replacing the value with an empty string
    $("#tacotext").val("");

});

$.get("/api/all", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {
            let taco = {
                id: data[i].id,
                taco_name: data[i].taco_name,
                devoured: data[i].devoured
            }
            console.log(taco);
            let row = $("<li>");
            row.addClass("list-group-item ready");
            row.attr("data-id", taco.id);
            row.text(taco.taco_name);

            $("#to-eat").append(row);
            row.append($("<button>").attr({ class: "btn", type: "submit", id: "devour-btn", "data-id": taco.id, }).text("Down the Hatch!"))
        };
    }
});

$("#devour-btn").on("click", (event) => {
    event.preventDefault();
    if (event.target.type === "submit") {
        let id = event.target.id;
        console.log(id);
    }

})