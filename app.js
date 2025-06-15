let choices=document.querySelectorAll(".choice");
compScore=document.querySelector(".compscore");
userScore=document.querySelector(".userscore");
msg=document.querySelector("#msg");
let scoreuser=0;
let scorecomp=0;

checkWinner=(userchoice,computerchoice)=>{
    if( userchoice=="rock"&& computerchoice=="scissors"){
        scoreuser++;
        msg.innerText="you won";
        msg.style.backgroundColor="rgb(172, 197, 114)";
        userScore.innerText=scoreuser;
    }else if(userchoice=="paper"&& computerchoice=="rock"){
        scoreuser++;
        userScore.innerText=scoreuser;
        msg.innerText="you won";
        msg.style.backgroundColor="rgb(172, 197, 114)";
    }else if(userchoice=="scissors"&& computerchoice=="paper"){
        scoreuser++;
        userScore.innerText=scoreuser;
        msg.innerText="you won";
        msg.style.backgroundColor="rgb(172, 197, 114)";
    }else if(userchoice==computerchoice){
        console.log("draw");
        msg.innerText="it is a draw";
        msg.style.backgroundColor="rgb(255, 165, 93)";
    }else{
        scorecomp++;
        compScore.innerText=scorecomp;
        msg.innerText="comp won";
        msg.style.backgroundColor="rgb(205, 138, 105)";
    }
}
choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        userchoice=choice.getAttribute("name");
        const listChoices=["rock","scissors","paper"];
        randomIndx=Math.floor(Math.random() * 3);
        computerchoice=listChoices[randomIndx];
        console.log(`computer choice is ${computerchoice} and user choice is ${userchoice}`);
        checkWinner(userchoice,computerchoice);
            })
})
