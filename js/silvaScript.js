
var userIuput = document.getElementById("input"),
   userOutput = document.getElementById("output");

function my() {
    
 "use strict";
    
    
userOutput.innerHTML =
"-webkit-" + userIuput.value +"<br />"+
"-moz-" + userIuput.value+"<br />"+
"-ms-" + userIuput.value+"<br />"+
"-o-" + userIuput.value+"<br />"+
userIuput.value;
 
    
}
