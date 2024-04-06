var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
/*
$("#testbtn").click(function(event){
      event.preventDefault();
      console.log("I clicked");

    });
*/
