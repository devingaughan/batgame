
//
var Valuex = Number(document.getElementById("bat").getAttribute("x"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
    document.getElementById("bat").setAttribute("x",Valuex-10)
  Valuex = Valuex-10
 }
 else if (e.keyCode == 39){
   document.getElementById("bat").setAttribute("x",Valuex+10)
  Valuex = Valuex+10
 }
 })

 var Valuey = Number(document.getElementById("bat").getAttribute("y"));
 document.addEventListener("keydown", function(e) {
  if (e.keyCode == 38) {
     document.getElementById("bat").setAttribute("y",Valuey-10)
   Valuey = Valuey-10
  }
  else if (e.keyCode == 40){
    document.getElementById("bat").setAttribute("y",Valuey+10)
   Valuey = Valuey+10
  }
  })
