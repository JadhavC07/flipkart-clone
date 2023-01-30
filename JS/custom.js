$(document).ready(function () {
  $(".loginToggle-container").hide();
});

$(document).ready(function () {
  $(".login-btn").click(function () {
    $(".loginToggle-container").fadeToggle();
  });
});

$(document).ready(function () {
  $(".close-btn").click(function () {
    $(".loginToggle-container").hide(500);
  });
});
