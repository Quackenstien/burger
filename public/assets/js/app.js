$(document).ready(function () {
  $("#devourBtn").on("click", function () {
    event.preventDefault();
    console.log("Devour clicked");
    const burgerId = $(this).data("id");
    const devour = $(this).data("eaten");
    const burgerUpdate = { devoured: devour };

    $.ajax("/burgers/" + burgerId, {
      type: "PUT",
      data: burgerUpdate,
    }).done((response) => {
      console.log(response);
      location.reload();
    });
  });
  $("#addBurger").on("click", function () {
    event.preventDefault();

    console.log("add button clicked");
    const burger = {
      burger_name: $(add).val(),
      devour: $(add).data("eaten"),
    };
    $.post("/burgers", burger).done((response) => {
      console.log(response);
      location.reload();
    });
  });
});
