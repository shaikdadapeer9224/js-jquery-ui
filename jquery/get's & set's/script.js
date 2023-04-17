$(document).ready(function () {
  $("#bb1").click(function () {

    $("#pp1").text("hii changed lorem");
  })

  $("#bb2").click(function () {

    $("#pp1").css('color','red');
  })

  $("#bb3").click(function () {

    alert($("#pp1").text())
  })
  $("#bb4").click(function () {

    $("#pp1").text("peoples changed");
  })

})
