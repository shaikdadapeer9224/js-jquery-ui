$(document).ready(function () {
   $("#bb1").click(function () {
     $("#divv2").fadeOut(3000);
   })
   $("#bb2").click(function () {
     $("#divv2").fadeIn(3000);
   })
   $("#bb3").click(function () {
     $("#divv2").fadeToggle(3000);
   })
   $("#bb4").click(function () {
     $("#divv2").slideUp(3000);
   })
   $("#bb5").click(function () {
     $("#divv2").slideDown(3000);
   })
   $("#bb6").click(function () {
     $("#divv2").slideToggle(3000);
   })
   $("#bb7").click(function () {
     $("#divv2").hide();
   })
   $("#bb8").click(function () {
     $("#divv2").show();
   })
   $("#bb9").click(function () {
     $("#divv2").toggle();
   })

})
