var home = document.getElementById('Grave')
var batX
var batY
var itemX
var itemY
var width = 80
var height = 80


//movemont left-right
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
//movement up-down
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

  //overlap
  Grave.addEventListener(function (e) {
    var bat = document.getElementById("bat")
    var item = document.getElementById("item")

       batX = Number(batX.getAttribute("x"))
       batY = Number(batY.getAttribute("y"))

    itemX = Number(itemX.getAttribute("x"))
    itemY = Number(itemY.getAttribute("y"))

    if(batX > itemX){
      item.setAttribute("opacity", 0)
    }

  })
