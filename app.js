let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = ()=>{
    // rock , paper and scissors
    const options = ["rock","paper","scissors"];
    const rdmidx = Math.floor(Math.random()*3);
    return options[rdmidx];
}
const drawgame = ()=>{
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice)=>{
    console.log("user's choice = ", userchoice);
    // generate computer choice
    const compchoice = gencompchoice();
    console.log("computer choice = ", compchoice); 
    if(userchoice === compchoice){
        drawgame();
    } else{
        let userWin = true;
        if(userchoice === "rock"){
            // paper,scissors
            userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock , scissors
            userWin = compchoice === "scissors" ? false : true;
        }else{
            // rock, paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});