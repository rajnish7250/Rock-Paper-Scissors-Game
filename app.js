let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const genCompChoice = () => {
    let options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner =(userWin) => {
    if(userWin){
        console.log("you win");
        userScore++;
        document.querySelector("#user-score").innerText=userScore;
        msg.innerText="You Win!!";
        msg.style.backgroundColor="green";
    }
    else{
        console.log("Computer win");
        compScore++;
        document.querySelector("#comp-score").innerText=compScore;
        msg.innerText="Computer Win!!";
        msg.style.backgroundColor="red";
    }
}

const gameDraw = () =>
{
    console.log("Game is Draw:");
    msg.innerText="Game is Draw";
    msg.style.backgroundColor="black";
}

const playGame= (userChoice) => 
{
    console.log("User-Choice ",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp-Choice ",compChoice);
    let userWin=true;
    if(userChoice===compChoice){
        // Draw Game
        gameDraw();
    }
    else if(userChoice==="paper")
    {
        // scissors, rock
        userWin= compChoice==="scissors"?false: true;
        showWinner(userWin);
    }
    else if(userChoice==="scissors")
    {
        //rock,paper
        userWin = compChoice==="rock"?false: true;
        showWinner(userWin);
    }
    else{
        //paper,scissors
        userWin=compChoice==="paper"?false:true;
        showWinner(userWin);
    }

    




}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
    }
)
























// let options=["rock","paper","scissors"];
// let optionSelected=Math.floor(Math.random(options)*3);
// let msg=document.querySelector("#msg");
// let user=document.querySelector("#user-score");
// let comp=document.querySelector("#comp-score");
// let userScore=0;
// let compScore=0;

// let rock=document.querySelector("#rock");
// rock.onclick= () => {
//     let optionSelected=options[Math.floor(Math.random(options)*3)];
//     if(optionSelected==="paper"){
//         compScore++;
//         comp.innerText=compScore;
//         msg.innerText=`Computer win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//         msg.style.backgroundColor="red";
//     }
//     else if (optionSelected==="rock"){
//         msg.innerText=`Match Draw.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//     }
//     else{
//         userScore++;
//         user.innerText=userScore;
//         msg.innerText=`You win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//         msg.style.backgroundColor="green";
//     }
//     // alert(`User Selected Rock and Computer Selected ${options[optionSelected]}`);
    
// }




// let paper=document.querySelector("#paper");
// paper.onclick=() =>{
//     let optionSelected=options[Math.floor(Math.random(options)*3)];
//     if(optionSelected==="paper"){
//         compScore++;
//         comp.innerText=compScore;
//         msg.innerText=`Computer win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//         msg.style.backgroundColor="red";
//     }
//     else if (optionSelected==="rock"){
//         msg.innerText=`Match Draw.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//     }
//     else{
//         userScore++;
//         user.innerText=userScore;
//         msg.innerText=`You win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//         msg.style.backgroundColor="green";
//     }
//     // alert(`User Selected Paper and Computer Selected ${options[optionSelected]}`);
// }





// let scissors=document.querySelector("#scissors");
// scissors.onclick = () =>{
//     let optionSelected=options[Math.floor(Math.random(options)*3)];
//     if(optionSelected==="paper"){
//         compScore++;
//         comp.innerText=compScore;
//         msg.innerText=`Computer win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//         msg.style.backgroundColor="red";
//     }
//     else if (optionSelected==="rock"){
//         msg.innerText=`Match Draw.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//     }
//     else{
//         userScore++;
//         user.innerText=userScore;
//         msg.innerText=`You win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
//         msg.style.backgroundColor="green";
//     }
//     // alert(`User Selected scissors and Computer Selected ${options[optionSelected]}`);
// }
