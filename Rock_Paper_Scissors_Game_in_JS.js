var scorepl1=0
var scorepl2=0
let i =1
while( i<=10)
{  
const myArray1 = ['stone', 'paper', 'scissors'];  
const player1=prompt("Enter stone,paper or scissors")
const player2 = myArray1[Math.floor(Math.random() * myArray1.length)]; 
  if(player1.includes("stone") && player2.includes("paper") )
  {
    scorepl2+=1
    alert("Player 2 wins")
  }
else if(player1.includes("paper") && player2.includes("stone"))
{
  scorepl1+=1
  alert("Player 1 wins")
}

else if(player1.includes("stone") && player2.includes("scissors"))
{
  scorepl1+=1
  alert("Player 1 wins")
}
else if(player1.includes("scissors") && player2.includes("stone"))
{
   scorepl2+=1
    alert("Player 2 wins")
}

else if(player1.includes("paper") && player2.includes("scissors"))
{
   scorepl2+=1
  alert("Player 2 wins")
}
else if(player1.includes("scissors") && player2.includes("paper"))
{
  scorepl1+=1
    alert("Player 1 wins")
}
  //This else is for the condition when the both players show same outcome
  else
{
  scorepl1++
  scorepl2++
}
i++
} 


if(scorepl1>scorepl2)
{
  alert("Player 1 won the game with score!")
  document.write("Player 1 score:",scorepl1)
}
else if(scorepl2>scorepl1)
{
  alert("Player 2 won the game with score!")
  document.write("Player 2 score:",scorepl2)
  
}
else
{
    alert("Game tied!")
}