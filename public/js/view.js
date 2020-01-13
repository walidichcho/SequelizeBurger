/* global moment */

// When user clicks add-btn
$("#burger-submit").on("click", function (event) {
    event.preventDefault();

    // Make a newChirp object
    var newBurger = {
        burgerName: $("#burgername").val().trim(),
        //   body: $("#chirp-box").val().trim(),
        //   created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newBurger);

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBurger)
        // On success, run the following code
        .then(function () {

            var row = $("<div>");
            row.addClass("burger");

            row.append("<p>" + newBurger.burgerName + "</p>");
            // row.append("<p>" + newChirp.body + "</p>");
            // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

            $("#newburger").prepend(row);


        });

    // Empty each input box by replacing the value with an empty string
    $("#burgername").val("");

});



