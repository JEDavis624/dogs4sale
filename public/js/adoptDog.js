// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-adoption").on("click", function(event) {
      var id = $(this).data("id");
      var adopted = $(this).data("adopted");
  
      var newAdoption = {
        adopted: adopted
      };
  
      // Send the PUT request.
      $.ajax("/api/dogs/" + id, {
        type: "PUT",
        data: newAdoption
      }).then(
        function() {
          console.log("changed adoption status to", newAdoption);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newDog = {
        name: $("#ca").val().trim(),
        breed: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/dogs", {
        type: "POST",
        data: newDog
      }).then(
        function() {
          console.log("added new dog to adoption list");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-dog").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/dogs/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted dog", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });