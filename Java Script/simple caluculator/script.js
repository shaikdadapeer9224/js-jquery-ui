function add() {
  var n1=document.getElementById('n1').value
  var n2=document.getElementById('n2').value
  var a1=parseInt(n1)
  var a2=parseInt(n2)
  var sol=a1+a2;
  //alert(sol);
document.getElementById("para1").innerHTML = "   the solution is "+sol;
}
function subract() {
  var a1=document.getElementById('n1').value
  var a2=document.getElementById('n2').value
  var sol=a1-a2;
  //alert(sol);
  document.getElementById("para1").innerHTML = "   the solution is "+sol;
}
function mul() {
  var a1=document.getElementById('n1').value
  var a2=document.getElementById('n2').value
  var sol=a1*a2;
  //alert(sol);
  document.getElementById("para1").innerHTML = "   the solution is "+sol;
}
function div() {
  var a1=document.getElementById('n1').value
  var a2=document.getElementById('n2').value
  var sol=a1/a2;
  //alert(sol);
  document.getElementById("para1").innerHTML = "   the solution is "+sol;
}
