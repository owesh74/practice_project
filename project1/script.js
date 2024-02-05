let ih4 = document.querySelector("#strange");
let addfrn = document.querySelector("#add");
let remfrn = document.querySelector("#remove");

addfrn.addEventListener("click",function(){
    ih4.innerHTML = "Friend"
    addfrn.style.backgroundColor = "lightgreen";
    ih4.style.color = "green";

})

remfrn.addEventListener("click",function(){
    ih4.innerHTML = "Stranger"
    addfrn.style.backgroundColor = "lightgray";
    ih4.style.color = "gray";


})