let playscore
let compscore
let score
console.log("Welcome to the Rock paper scissors game")
let textArray = [
    "rock","paper","scissors"
]
function computerChoice(){
    let compchoice = Math.floor(Math.random()*textArray.length)
    return textArray[compchoice]
}
 
for(let i = 0; i<=5; i++){
    let choice = parseInt(prompt("1 is rock, 2 is paper, 3 is scissors"))
    playerscorech = textArray[choice]
    compscorech = computerChoice()
    console.log(compscorech)
    if(playerscorech == compscorech)
    {
        console.log("draw")
    }
    else if((playerscorech == "rock" && compscorech == "paper")|(playerscorech == "paper" && compscorech == "scissors")|(playerscorech == "scissors" && compscorech == "rock"))
    {
        compscore++
    }
    else if((compscorech == "rock" && playerscorech == "paper")|(compscorech == "paper" && playerscorech == "scissors")|(compscorech == "scissors" && playerscorech == "rock"))
    {
        playscore++
    }
}
console.log(playscore)
console.log(compscore)
if(compscore > playscore)
{
    console.log("computer wins")
}
else if(playscore > compscore)
{
    console.log("you win")
}
else
{
    console.log("draw")
}

