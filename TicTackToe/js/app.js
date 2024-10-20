let boxex = document.querySelectorAll(".box-btn");
let reset = document.querySelector("#reset-btn");
let result = document.querySelector("p")

let turn = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
]

boxex.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn == true){
            box.innerText = "O"
            turn = false;
        }
        else{
            box.innerText = "X"
            turn = true;
        }
        box.disabled = true;
        winner();
        
    });
});

let winner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxex[pattern[0]].innerText;
        let pos2val = boxex[pattern[1]].innerText;
        let pos3val = boxex[pattern[2]].innerText;

        if( pos1val != "" &&  pos2val !="" &&  pos3val !="")
        {
            if( pos1val ===  pos2val &&  pos2val ===  pos3val ){
                
                result.innerText = `${pos1val} is Winner`;
                console.log("Winner");
                break;
                
            }
            
        }
    }
}

reset.addEventListener("click", ()=>{
    console.log("game is Reset")
    for(box of boxex)   {
        box.innerText = "";
        box.disabled = false;
        result.innerText = "";
    }      
});
    