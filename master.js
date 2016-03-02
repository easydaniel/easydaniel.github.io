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
      $('.card').animate({
        'opacity': 1,
        'margin-top': '0px'
      });
    }, 500);
  }, 1000);
});
