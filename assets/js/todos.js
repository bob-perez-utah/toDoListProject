//Check off specific Todos by clicking

$("li").click(function() {
    // if li is greay
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        console.log("It is currently gray!");
    }
    //turn it black

    //else

    // turn it gray

    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
});