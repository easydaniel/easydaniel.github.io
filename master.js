$(document).ready(function() {
  if ($(document).width() <= 1252) {
    $('.right-section').hide();
  }
})

$(window).on("load", function() {
  $('.card').addClass('show');
});
