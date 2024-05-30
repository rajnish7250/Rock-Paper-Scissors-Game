var choices=document.querySelectorAll(".choice")
var msg=document.querySelector(".msg");
var userScoreJ=0;
var compScoreJ=0;
var userscore=document.querySelector("#userscore");
var compscore=document.querySelector("#compscore");
var table=document.querySelector("table");
var userchoicee;
var compchoicee;
var statuss;
var sno=0;

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        var userchoice=choice.getAttribute("id");
        userchoicee=userchoice;
        
        playGame(userchoice);
    })
})

var genCompChoice = () =>{
    var options=["rock","paper","scissors"];
    var idx=Math.floor(Math.random()*3);
    return options[idx];
}

var playGame = (userchoice) => {
    console.log(`UserChoice: ${userchoice}`);
    var compchoice=genCompChoice();
    compchoicee=compchoice;
    console.log(`Computer Choice: ${compchoice}`);
    var userWin=true;

    if(userchoice===compchoice)
        {
            var status="Match was drawn";
            console.log(status);
            updateMsgBoard(status);
        }
    else if(userchoice==="rock")
        {
            //paper, scissors
            userWin=compchoice==="paper"?false:true;
            showWinner(userWin);
        }
    else if(userchoice==="paper")
        {
            //rock,scissors
            userWin=compchoice==="rock"?true:false;
            showWinner(userWin);
        }
    else if(userchoice==="scissors")
        {
            //paper, rock
            userWin=compchoice==="paper"?true:false;
            showWinner(userWin);
        }

}

var showWinner = (userWin) =>
    {
        if (userWin)
            {
                var status="User Win";
                console.log(status);
                updateMsgBoard(status);
            }
        else{
            var status="Comp win";
            console.log(status);
            updateMsgBoard(status);
        }
    }

var updateMsgBoard = (status) =>{
    if(status=="User Win")
        {
            msg.style.backgroundColor="green";
            msg.innerText=status;
            userScoreJ++;
            userscore.innerText=userScoreJ;
            updateTable(status);
        }
    else if(status==="Comp win")
        {
            msg.style.backgroundColor="red";
            msg.innerText=status;
            compScoreJ++;
            compscore.innerText=compScoreJ;
            updateTable(status);
        }
    else
    {
        msg.style.backgroundColor="black";
        msg.innerText=status;
        updateTable(status);

    }
}

var updateTable = (status) =>{
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    sno++;
    cell1.innerHTML=sno;
    cell2.innerHTML=userchoicee;
    cell3.innerHTML=compchoicee;
    cell4.innerHTML=status;
    if(status==="User Win")
        {
            cell4.style.backgroundColor="green";
        }
    else if(status==="Comp win")
        {
            cell4.style.backgroundColor="red";
        }
    else{
        cell4.style.backgroundColor="black";
        cell4.style.color="white";
    }
}
