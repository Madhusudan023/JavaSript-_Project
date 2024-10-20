let input = document.querySelector("input");

let btn = document.querySelector("button");

let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    let iteam = document.createElement("li");
    let delbtn = document.createElement("button");    
    iteam.innerText = input.value;
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    iteam.appendChild(delbtn);
    ul.appendChild(iteam);
    input.value=" ";
})

ul.addEventListener("click", function (event){
 if(event.target.nodeName == "BUTTON")
 {
   let par = event.target.parentElement;
   par.remove();

 }
})

// let btns = document.querySelectorAll(".delete");

// for(del of btns)
//     {
//         del.addEventListener("click", function(){
//        let par = del.parentElement;
       
//        del.remove(par);

//     });
// }