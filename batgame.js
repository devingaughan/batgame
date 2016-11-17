var home = document.getElementById('Grave')

var itemX;
var itemY;
var width = 80
var height = 80
var batX = Number(document.getAttribute("x"));
var batY = Number(document.getAttribute("y"));
document.addEventListener( "keydown", function (e) {
//movemont left-right
var Valuex = Number(document.getElementById("bat").getAttribute("x"));
var bat = document.getElementById("bat");
var item = document.getElementById("item");



itemX = Number(document.getAttribute("x"));
itemY = Number(document.getAttribute("y"));
 if (e.keyCode == 37) {
    document.getElementById("bat").setAttribute("x",Valuex-10)
  Valuex = Valuex-10
  if(batX > itemX && batX < itemX + width && batX > itemX && batY < itemY + height ){
    item.setAttribute("x", 100)
  soulsCollected = soulsCollected += 1;
  console.log("work please!!!")
  }
 }
 else if (e.keyCode == 39){
   document.getElementById("bat").setAttribute("x",Valuex+10)
  Valuex = Valuex+10
  if(batX > itemX && batX < itemX + width && batX > itemX && batY < itemY + height ){
    item.setAttribute("x", 100)
  soulsCollected = soulsCollected += 1;
  console.log("work please!!!")
  }
 }
//movement up-down
 var Valuey = Number(document.getElementById("bat").getAttribute("y"));
  if (e.keyCode == 38) {
     document.getElementById("bat").setAttribute("y",Valuey-10)
   Valuey = Valuey-10
   if(batX > itemX && batX < itemX + width && batX > itemX && batY < itemY + height ){
     item.setAttribute("x", 100)
   soulsCollected = soulsCollected += 1;
   console.log("work please!!!")
   }
  }
  else if (e.keyCode == 40){
    document.getElementById("bat").setAttribute("y",Valuey+10)
   Valuey = Valuey+10
   if(batX > itemX && batX < itemX + width && batX > itemX && batY < itemY + height ){
     item.setAttribute("x", 100)
   soulsCollected = soulsCollected += 1;
   console.log("work please!!!")
   }
 }
 })
