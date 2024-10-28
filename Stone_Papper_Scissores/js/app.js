let userScore = 0; 

let compScore = 0;


let you = document.querySelector("#userScore");

let comp = document.querySelector("#compScore");

let mess2 = document.getElementById("msg2")

const choices = document.querySelectorAll(".choise");

let msg = document.querySelector(".msg");

const computerChoise = function()
{
    let options = ["paper", "rock", "scissor"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

const playGame = function(userchoise)
{
  console.log(`User choise = ${userchoise}`);
    let gamechoise = computerChoise();
    console.log(`computer Choise = ${gamechoise}`);

  if(gamechoise === userchoise){
    
      msg.style.backgroundColor = "#010138";
   
    msg.innerText=`Mach Widraw`;
    msg2.innerText = `your and game choise is ${userchoise}`;
    console.log("widraw")
  }

  else if(gamechoise === "rock" &&  userchoise ==="paper"){
    msg.innerText=`You Won ! `;
    msg2.innerText = ` Your choise is ${userchoise} and computer choise ${gamechoise}`;
      userScore++;
      msg.style.backgroundColor = "green";
      you.innerText = `${userScore}`;
      console.log(`user score ${userScore}`);
      setTimeout(()=>{
        msg.style.backgroundColor = "#010138";
      }, 1000);
  }
  else if(gamechoise === "paper" &&  userchoise ==="scissor")
  {
      msg.innerText=`You Won !`;
      msg2.innerText = ` Your choise is ${userchoise} and computer choise ${gamechoise}`;
      msg.style.backgroundColor = "green";
      userScore++;
    
      you.innerText =`${userScore}`;
      console.log(`user score ${userScore}`);
      setTimeout(()=>{
        msg.style.backgroundColor = "#010138";
      }, 1000);
  }
  else if(gamechoise === "scissor" &&  userchoise ==="rock")
    {
      msg.innerText=`You Won !`;
      msg2.innerText = ` Your choise is ${userchoise} and computer choise ${gamechoise}`;
      msg.style.backgroundColor = "green";
      userScore++;
      you.innerText =`${userScore}`;
      console.log(`user score ${userScore}`);
      setTimeout(()=>{
        msg.style.backgroundColor = "#010138";
      }, 1000);
    }
    else{
        msg.innerText=`You loss `;
        msg2.innerText = ` computer won Your choise is ${userchoise} and computer choise ${gamechoise} `;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = `${compScore}`; 
        console.log(`computer score ${compScore}`);
        setTimeout(()=>{
          msg.style.backgroundColor = "#010138";
        }, 1000);
    }
    
}

choices.forEach((choise) => {
    choise.addEventListener("click", ()=>{
       let userchoise = choise.getAttribute("id");
        console.log(`${userchoise} is click`);
        playGame(userchoise);
    })
});