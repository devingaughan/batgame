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
