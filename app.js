let options=["rock","paper","scissors"];
let optionSelected=Math.floor(Math.random(options)*3);
let msg=document.querySelector("#msg");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;

let rock=document.querySelector("#rock");
rock.onclick= () => {
    let optionSelected=options[Math.floor(Math.random(options)*3)];
    if(optionSelected==="paper"){
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`Computer win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
        msg.style.backgroundColor="red";
    }
    else if (optionSelected==="rock"){
        msg.innerText=`Match Draw.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
    }
    else{
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
        msg.style.backgroundColor="green";
    }
    // alert(`User Selected Rock and Computer Selected ${options[optionSelected]}`);
    
}




let paper=document.querySelector("#paper");
paper.onclick=() =>{
    let optionSelected=options[Math.floor(Math.random(options)*3)];
    if(optionSelected==="paper"){
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`Computer win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
        msg.style.backgroundColor="red";
    }
    else if (optionSelected==="rock"){
        msg.innerText=`Match Draw.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
    }
    else{
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
        msg.style.backgroundColor="green";
    }
    // alert(`User Selected Paper and Computer Selected ${options[optionSelected]}`);
}





let scissors=document.querySelector("#scissors");
scissors.onclick = () =>{
    let optionSelected=options[Math.floor(Math.random(options)*3)];
    if(optionSelected==="paper"){
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`Computer win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
        msg.style.backgroundColor="red";
    }
    else if (optionSelected==="rock"){
        msg.innerText=`Match Draw.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
    }
    else{
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You win.  Computer_Choice:${optionSelected}, User_Choice:Rock`;
        msg.style.backgroundColor="green";
    }
    // alert(`User Selected scissors and Computer Selected ${options[optionSelected]}`);
}