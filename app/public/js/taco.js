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
            row.addClass("list-group-item");
            row.text(newTaco.taco_name)

            $("<button>").attr({ class: "btn submit-btn", type: "submit" }).text("Down the Hatch!")
            row.append(".submit-btn")


            $("#to-eat").append(row);
        });

    // Empty each input box by replacing the value with an empty string
    $("#tacotext").val("");


});



