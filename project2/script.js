let dil = document.querySelector("i");
let card = document.querySelector(".card")
card.addEventListener("dblclick",function(){
  dil.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(function(){

    dil.style.transform = "translate(-50%, -50%) scale(0)";

},800)

})


