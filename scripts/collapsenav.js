$(document).ready(function(){
  $("#burger-btn").click(function(){
    $("#nav").slideToggle();
    $("#spacer").slideToggle('fast');
  });

  $("#spacer").click(function(){
    $("#nav").slideToggle();
    $("#spacer").slideToggle('fast');
  });
});