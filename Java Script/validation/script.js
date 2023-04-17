function validate() {
  var loginid=document.getElementById('userid').value;
  var regx=/[0-9][a-z]{4}/;
  if(regx.test(loginid)){
    alert("valid");
  }
  else{
    alert("not valid");
  }
}
