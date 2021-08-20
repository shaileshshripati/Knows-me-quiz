// let's begin

var readlineSync = require("readline-sync")

var username = readlineSync.question("Hey! May I know your name: ")

console.log("Hi "+username+" Let's check how much you know about shailesh")

var score = 0

var questions = [
  {
    question: "Where did he live? ",
    answer: "Mumbai"
  },
  {
    question: "How many languages he knows? ",
    answer: "3"
  },
  {
    question: "His birthday is in october? ",
    answer: "yes"
  },
  {
    question: "He likes sweet dish? ",
    answer: "yes"
  },
  {
    question: "He likes movies or cricket ",
    answer: "Both"
  }
]

// high scroces
var highscore = [
  {
    name: "Jack",
    score: 4
  },
  {
    name: "Henry",
    score: 3
  }
]

function play(question,answer)
{
  var useranswer = readlineSync.question(question)

  if(useranswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You're right")
    score = score + 1
  }
  else
  {
    console.log("You're wrong")
  }
  console.log("Current Score: "+score)
  console.log("------------------")
}

for (var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer)
}

console.log("High scores")
for (var j=0;j<highscore.length;j++)
{
  console.log((j+1)+" Name: "+highscore[j].name)
  console.log("  Score: "+highscore[j].score)
  console.log("---------------")
}
console.log("hey, If you had beaten the high score then send a screenshot. We will update it")
