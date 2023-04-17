
function accessvalues()
{
     var male =document.getElementById('rdm');
     var female= document.getElementById('rdf');
     var trans = document.getElementById('rdt');

     if (male.checked==true)
     {
        alert("male is selected");
     }
     else if (female.checked==true)
     {
        alert("Female is slected");
     }
     else if (trans.checked==true)
     {
        alert("Trans is selected");
     }
     else {
       alert("Nothing is selected");
     }
}
