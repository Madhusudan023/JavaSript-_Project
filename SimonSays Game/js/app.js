let h2 = document.querySelector("h2") ;

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
  level++;
  h2.innerText=`Level ${level}`
  let randomIdx = Math.floor(Math.random()*4);
  let randomColor = btns[randomIdx];
  let randombtn = document.querySelector(`.${randomColor}`);
  gameflash(randombtn);
} 

function butPress()
{
  let btn = this;

  userflash(btn);
}

let allbtns = document.querySelectorAll(".btn"); 

for(btn of allbtns)
{
  
btn.addEventListener("click", butPress)

}
