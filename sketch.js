var canva,gameStatee, game,name,contestantCountRef,contestantCount,gameState,database, constant,contestant2,contestestant, quiz, question,question,option1,option2,input1;
var quizsubmitedRef, quizsubmited,quizsubmite,quiz,end,button,quiz2;
function setup(){
  canvas = createCanvas(850,400);
  
  database=firebase.database()
 gameState=0
 contestantCount=0
 


quiz=new Quiz()
game=new Constant()
question=new Question()
quiz.display()
quiz.start()
game.getstate()
question.submit()
}


function draw(){
  background("pink");

  


if(contestantCount===4){

  
 game.update(1)
  
  
  }
if(gameState===1){
  question.display()
quiz.hide()
}

  


}







