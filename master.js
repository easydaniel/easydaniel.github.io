$(document).ready(function() {
  if ($(document).width() <= 1252) {
    $('.right-section').hide();
  }
})

$(window).on("load", function() {
  setTimeout(function() {
    $('.loader > div').addClass("stop");
    $('.loader').fadeOut();
    setTimeout(function() {
      $('.card').fadeTo(500, 1);
    }, 500);
  }, 1000);
});
