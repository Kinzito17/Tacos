let arr = [];

$("#taco-submit").on("click", (event) => {
    event.preventDefault();

    // Make a new taco object
    let newTaco = {
        taco_name: $("#tacotext").val().trim(),
    };

    $.post("/api/new", newTaco)
        // On success, run the following code
        .then(() => {
            getTacos();
            console.log("postin");
        });

    // Empty each input box by replacing the value with an empty string
    $("#tacotext").val("");

});

function getTacos() {
    $.get("/api/all", function (data) {
        if (data.length !== 0 && arr.length !== 0 && data.length !== arr.length) {
            let arrLength = arr.length;

            for (var i = arrLength; i < data.length; i++) {
                let taco = {
                    id: data[i].id,
                    taco_name: data[i].taco_name,
                    devoured: data[i].devoured
                }
                arr.push(taco.id)
                let row = $("<li>");
                row.addClass("list-group-item ready");
                row.attr("data-id", taco.id);
                row.attr("id", "readyEat")
                row.text(taco.taco_name);

                $("#to-eat").append(row);
                $("#to-eat").append($("<button>").attr({ class: "btn devour", type: "submit", id: "devour-btn", "data-id": taco.id, }).text("Down the Hatch!"))
            }
        } else {
            for (var i = 0; i < data.length; i++) {
                let taco = {
                    id: data[i].id,
                    taco_name: data[i].taco_name,
                    devoured: data[i].devoured
                }
                arr.push(taco.id)
                let row = $("<li>");
                row.addClass("list-group-item ready");
                row.attr("data-id", taco.id);
                row.attr("id", "readyEat");
                row.text(taco.taco_name);

                $("#to-eat").append(row);
                $("#to-eat").append($("<button>").attr({ class: "btn devour", type: "submit", id: "devour-btn", "data-id": taco.id, }).text("Down the Hatch!"))
            };
        }
    })
}


$(".not-eaten").on("click", "#devour-btn", function (event) {
    event.preventDefault();

    if (event.target.type === 'submit') {
        let eatenTaco = $(this).data("id");
        let tacoName = $("#readyEat").text();
        console.log(eatenTaco);
        console.log(tacoName);

        $.ajax({
            url: `/api/${eatenTaco}`,
            type: "PUT",
            data: eatenTaco,
            success: (data) => {
                location.assign("/");
            }
        })
    }
});

$.get("/api/all", function (data) {
    if (data.length !== 0) {

        data.map(taco => {
            arr.push(taco.id)
            let row = $("<li>");
            row.addClass("list-group-item ready");
            row.attr("data-id", taco.id);
            row.attr("id", "readyEat");
            row.text(taco.taco_name);
            if (taco.devoured === false) {
                $("#to-eat").append(row);
                $("#to-eat").append($("<button>").attr({ class: "btn devour", type: "submit", id: "devour-btn", "data-id": taco.id, }).text("Down the Hatch!"))
            } else {
                $("#devoured").append(row);
            }
        })
    }
});

