let btns = document.querySelectorAll(".btnn");
let mai = document.querySelector(".main");
// console.log(btns);
win = document.querySelector(".res")

player = 1

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if(player == 1){
        btn.textContent = "X";
        player = 2
        }
        else{
            btn.textContent = "O"
            player = 1
        }
        btn.disabled = true
       

        for (let i = 0; i < winpat.length; i++) {
            let n0 = btns[winpat[i][0]].textContent;
            let n1 = btns[winpat[i][1]].textContent;
            let n2 = btns[winpat[i][2]].textContent;
if(n0 =='X' && n1 == 'X' && n2 == 'X'){
            win.textContent = "Player 1 wins"
            win.style.backgroundColor = "#40A2D8"
          disable();
            }
else if(n0 =='O' && n1 == 'O' && n2 == 'O'){
                win.textContent = "Player 2 wins"
            win.style.backgroundColor = "#40A2D8"

                disable();
                }
        }
    });

});


let winpat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

console.log(btns[winpat[0]]);

function disable(){
    for(i =0;i<=btns.length ;i++){
        btns[i].disabled =true
    }
}



function enable(){
    for(let i =0;i < btns.length ;i++){
        btns[i].disabled =false;
    }
}

document.querySelector(".reset").addEventListener("click", (e) => {
    enable();  
    win.textContent = "Winner Pending!"
    win.style.backgroundColor = "#789461"
    for (let i = 0; i < btns.length; i++) {
        btns[i].textContent = "";
    }
});
