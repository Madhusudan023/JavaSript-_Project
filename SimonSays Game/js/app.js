let h2 = document.querySelector("h2") ;
let body = document.querySelector("body");

let para = document.getElementById("gameOver");

let levelScore = document.getElementById("score");

let gameSeq = []; 

let userSeq = [];

let gameStart = false; 

let level = 0; 


let btns = ["btn1", "btn2", "btn3", "btn4"]

document.addEventListener("keypress", function(){
    console.log("Game started");
    gameStart = true;

    levelUp();
})

function gameflash(btn)
{
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash")
  }, 290);
}

function userflash(btn)
{
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash")
  }, 290);
}


function levelUp()
{
  
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`
  para.innerText = ``;
  para.style.backgroundColor="#fff";
  

  levelScore.innerText = ``;
  levelScore.style.backgroundColor="#fff";
 


  let randomIdx = Math.floor(Math.random()*4);
  let randomColor = btns[randomIdx];
  let randombtn = document.querySelector(`.${randomColor}`);
  gameflash(randombtn);
  gameSeq.push(randomColor);
  console.log(gameSeq);


} 

function checkans(idx){
    
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
          {
            setTimeout( levelUp, 1000)
          }
    }else{
         para.innerText = "GAME OVER !!";
         para.style.backgroundColor="#ff00008f";

        levelScore.innerText = `Your Score is ${level}`;
        levelScore.style.backgroundColor="#0000ff69";

        h2.innerText=`press any key to start` ;
        gameSeq = [];
        userSeq = [];
        level = 0;
        body.classList.add("out");
        setTimeout(function (){
          body.classList.remove("out");
        }, 240);
    }
}
    

function butPress()
{
  let btn = this;

  userflash(btn);
  userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSeq.push(userColor);
  checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn"); 

for(btn of allbtns)
{
  
btn.addEventListener("click", butPress)

}
