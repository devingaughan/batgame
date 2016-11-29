var home = document.getElementById('Grave')
var soulsCollected = 0;
var timeStart = Date.now()

document.addEventListener( "keydown", function (e) {
//movemont left-right
var itemX = Number(document.getElementById("item").getAttribute("x"));
var itemY = Number(document.getElementById("item").getAttribute("y"));
var width = 40;
var height = 40;
var Valuex = Number(document.getElementById("bat").getAttribute("x"));
var Valuey = Number(document.getElementById("bat").getAttribute("y"));
var bat = document.getElementById("bat");
var item = document.getElementById("item");
//  var canMove = true;

function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var random = randomNumberGenerator(1, 300);

//var batX = Number(document.getElementById("bat").getAttribute("x"));
//var batY = Number(document.getElementById("bat").getAttribute("y"));

//if(canMove == true){

if (e.keyCode == 37) {
    document.getElementById("bat").setAttribute("x",Valuex-10)


 }
 else if (e.keyCode == 39){
   document.getElementById("bat").setAttribute("x",Valuex+10)

 }
//movement up-down

   else if (e.keyCode == 38) {
     document.getElementById("bat").setAttribute("y",Valuey-10)

  }
  else if (e.keyCode == 40){
    document.getElementById("bat").setAttribute("y",Valuey+10);

 }

 // one piece of code to check for overlap

  if(Valuex > itemX - width&& Valuex < itemX + width && Valuey > itemY -height&& Valuey - height< itemY + height ){
    item.setAttribute("x", random)
    console.log("work please!!!")
    soulsCollected = soulsCollected + 1;
    console.log(soulsCollected)
    document.getElementById("text3").textContent = soulsCollected;

 }
 //game over
 if(soulsCollected == 5) {
   //canMove = false
  document.getElementById("Grave").pauseAnimations();
  var timeStop = Date.now()
  var score;
  score = (timeStop - timeStart)/1000;
console.log(score)
document.getElementById('text4').textContent = score;
 }
 })
