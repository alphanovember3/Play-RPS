let userscore = 0;
let cpuscore = 0;

let boxes = document.querySelectorAll(".box");
let user = document.querySelector("#user");
let cpu = document.querySelector("#cpu");

let result = document.querySelector(".result");

//adding the event listener to the boxes
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

        let userchoice = box.getAttribute("id");

        checkwinner(userchoice);
    });

});

//checking the winning condition 

checkwinner = (userchoice)=>{

    //call function which returns the CPU choice

    let cpuchoice = getCpuChoice();

    //checking condition for a draw

    if(cpuchoice == userchoice){
        console.log("Draw Game")
        result.innerText = "Draw Game";
        result.style.backgroundColor = "#629584";
    }

    //checking winning condition
    else{
        if(userchoice == "paper"){

            if(cpuchoice == "rock"){
                userscore ++;
                user.innerText = userscore;
                result.innerText = "You Win";
                result.style.backgroundColor = "green";
                
            }
            else{
                cpuscore++;
                cpu.innerText = cpuscore;
                result.innerText = "You Lost";
                result.style.backgroundColor = "red";
                
            }
        }
        if(userchoice == "rock"){

            if(cpuchoice == "scissor"){
                userscore ++;
    
                user.innerText = userscore;
                result.innerText = "You Win";
                result.style.backgroundColor = "green";
            }
            else{
                cpuscore++;
                cpu.innerText = cpuscore;
                result.innerText = "You Lost";
                result.style.backgroundColor = "red";
    
            }
        }
        if(userchoice == "scissor"){

            if(cpuchoice == "paper"){
                userscore ++;
    
                user.innerText = userscore;
                result.innerText = "You Win";
                result.style.backgroundColor = "green";
            }
            else{
                cpuscore++;
                cpu.innerText = cpuscore;
                result.innerText = "You Lost";
                result.style.backgroundColor = "red";
    
            }
        }      

    
    }
   

}


//Generating the CPU choice with the random function

getCpuChoice = ()=>{


    const options = ["rock","scissor","paper"];

    let idx = Math.floor(Math.random()*3);

   
    return options[idx];

}













