let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //rock,paper,scissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. PLay again/";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,CompChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice);

    if(userChoice === CompChoice){
      drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //Scissors,paper
            userWin = CompChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
           //rock,Scissors
           userWin = CompChoice === "scissors" ? false : true;
        } else{
            //userChoice === "Scissors"
            //rock,paper
            userWin = CompChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,CompChoice);
    }



}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});