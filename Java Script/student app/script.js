
var start =prompt("Start Web Application y/n:");
var request='';
var students=[];
if (start=='y'){
  while(request!='exit'){
          request =prompt("Please Select an Action: add, remove, display or exit ");
          if(request=='add'){
            addstudent();
          }
          else if (request=='remove'){
            removestudents();
          }
          else if (request=='display'){
            showstudents();
          }
  }
}
else{
  alert("thank you Refresh to visit again");
}
function addstudent() {
  var name=prompt("enter name to add");
  students.push(name);
  alert(name+" is added");
}
function removestudents() {
  var name=prompt("enter studen name to remove");
  var index=students.indexOf(name);
  students.splice(index,1);
  alert(name+" is removed");
}
function showstudents() {
  alert(students);
}
