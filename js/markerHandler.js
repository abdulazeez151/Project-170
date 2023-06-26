AFRAME.registerComponent("markerhandler", {
    init: async function () {

      this.el.addEventListener("markerFound", () => {
        console.log("Marker is found.")
        this.handleMarkerFound();
      });
    
      this.el.addEventListener("markerLost", () => {
        console.log("Marker is lost.")
        this.handleMarkerLost();
      });
    },



    handleMarkerFound: function () {
      //Changing button-div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var orderButton = document.getElementById("order-button");
      var orderSummaryButton = document.getElementById("order-summary-button");
  
      //Handling click events
      orderSummaryButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "Work in Progress."
        });
      });
  
      orderButton.addEventListener("click", function () {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks for Order!",
          text: " ",
          timer: 2000,
          buttons: false
        });
      });
    },
    handleMarkerLost: function () {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });