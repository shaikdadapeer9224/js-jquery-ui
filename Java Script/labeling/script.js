function validtion()
 {
    var email =document.getElementById('eml');
    var password = document.getElementById('pwd');

    if (email.value.trim()=='')
    {
        email.style.border="solid 2px red";
        document.getElementById('lb1').style.visibility="visible";
        return false;
    }
    else if (password.value.trim()=='')
     {
       password.style.border="solid 2px red";
       document.getElementById('lb2').style.visibility="visible";
       return false;
    }
}
