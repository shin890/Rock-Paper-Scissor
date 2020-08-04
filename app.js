let userScore= 0;
let comScore= 0;
const userScore_span=document.getElementById("user-score");
const comScore_span=document.getElementById("com-score");
const scoreBoard_div= document.querySelector(".scoreboard");
const result_div=document.querySelector(".result>h1");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function convert(letter){
    if (letter=="r") return "Rock";
    if (letter=="p") return "Paper";
    return "Scissor";
}

function win(userChoice,comChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    comScore_span.innerHTML= comScore;
    result_div.innerHTML=`${convert(userChoice)} beats ${convert(comChoice)}. You Win&#128293`;
    color=document.getElementById(userChoice);
    color.classList.add("green-glow");
    setTimeout(()=>color.classList.remove("green-glow"), 300);
}

function lost(userChoice,comChoice){
    comScore++;
    userScore_span.innerHTML=userScore;
    comScore_span.innerHTML= comScore;
    result_div.innerHTML=`${convert(userChoice)} lost to ${convert(comChoice)}. You lost&#128557`;
    color=document.getElementById(userChoice);
    color.classList.add("red-glow");
    setTimeout(()=>color.classList.remove("red-glow"), 300);
}

function draw(userChoice,comChoice){
    userScore_span.innerHTML=userScore;
    comScore_span.innerHTML= comScore;
    result_div.innerHTML=`It's a tie. Try Again&#128513`;
    color=document.getElementById(userChoice);
    color.classList.add("blue-glow");
    setTimeout(()=>color.classList.remove("blue-glow"), 300);
}

function getComputerChoice(){
    const choices=['r','p','s'];
    const random=Math.floor(Math.random()*3);
    return choices[random];
}

function game(userChoice){
    const comChoice= getComputerChoice();
    switch (userChoice + comChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,comChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice,comChoice);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,comChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();